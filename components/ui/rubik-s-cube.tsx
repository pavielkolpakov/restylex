"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { SpotLight, useDepthBuffer } from "@react-three/drei";
import * as THREE from "three";
import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  forwardRef,
  useMemo,
  useCallback,
} from "react";
import { Group, Vector3, Matrix4, Quaternion } from "three";
import { SpotLight as SpotLightImpl } from "three";
import { RoundedBox } from "@react-three/drei";

interface Cube {
  position: Vector3;
  rotationMatrix: Matrix4;
  id: string;
  originalCoords: { x: number; y: number; z: number };
}

interface Move {
  axis: "x" | "y" | "z";
  layer: number;
  direction: number;
  rotationAngle?: number;
}

interface DeviceSettings {
  smoothness: number;
  castShadow: boolean;
  receiveShadow: boolean;
}

interface ViewportSize {
  width: number;
  height: number;
}

interface RubiksCubeRef {
  reset: () => void;
}

const RubiksCubeModel = forwardRef<RubiksCubeRef, Record<string, unknown>>(
  (props, ref) => {
    const ANIMATION_DURATION = 1.2;
    const GAP = 0.01;
    const RADIUS = 0.075;
    const CUBE_SIZE = 0.8;

    const mainGroupRef = useRef<Group>(null);
    const isAnimatingRef = useRef<boolean>(false);
    const currentRotationRef = useRef<number>(0);
    const lastMoveAxisRef = useRef<"x" | "y" | "z" | null>(null);
    const currentMoveRef = useRef<Move | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isMountedRef = useRef<boolean>(true);
    const viewportSizeRef = useRef<ViewportSize>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const isResizingRef = useRef<boolean>(false);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [cubes, setCubes] = useState<Cube[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [deviceSettings, setDeviceSettings] = useState<DeviceSettings>(() => {
      const isMobile = window.innerWidth < 768;
      return {
        smoothness: isMobile ? 2 : 4,
        castShadow: !isMobile,
        receiveShadow: !isMobile,
      };
    });

    const reusableVec3 = useMemo(() => new Vector3(), []);
    const reusableMatrix4 = useMemo(() => new Matrix4(), []);
    const reusableQuaternion = useMemo(() => new Quaternion(), []);

    React.useImperativeHandle(ref, () => ({
      reset: resetCube,
    }));

    const initializeCubes = useCallback((): Cube[] => {
      const initial: Cube[] = [];
      const positions = [-1, 0, 1];

      for (const x of positions) {
        for (const y of positions) {
          for (const z of positions) {
            initial.push({
              position: new Vector3(x, y, z),
              rotationMatrix: new Matrix4().identity(),
              id: `cube-${x}-${y}-${z}`,
              originalCoords: { x, y, z },
            });
          }
        }
      }
      return initial;
    }, []);

    useEffect(() => {
      setCubes(initializeCubes());

      isMountedRef.current = true;

      return () => {
        isMountedRef.current = false;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }

        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
          resizeTimeoutRef.current = null;
        }
      };
    }, [initializeCubes]);

    const resetCube = useCallback(() => {
      if (!isMountedRef.current) return;

      setCubes(initializeCubes());
      if (mainGroupRef.current) {
        mainGroupRef.current.rotation.set(0, 0, 0);
      }
      isAnimatingRef.current = false;
      currentRotationRef.current = 0;
      lastMoveAxisRef.current = null;
      currentMoveRef.current = null;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }, [initializeCubes]);

    const handleViewportChange = useCallback(() => {
      if (!isMountedRef.current) return;

      isResizingRef.current = true;

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const visualViewportWidth = window.visualViewport
          ? window.visualViewport.width
          : width;
        const visualViewportHeight = window.visualViewport
          ? window.visualViewport.height
          : height;

        const effectiveWidth = Math.min(width, visualViewportWidth);
        const effectiveHeight = Math.min(height, visualViewportHeight);

        const prevSize = viewportSizeRef.current;
        if (
          Math.abs(prevSize.width - effectiveWidth) < 10 &&
          Math.abs(prevSize.height - effectiveHeight) < 10
        ) {
          isResizingRef.current = false;
          return;
        }

        viewportSizeRef.current = {
          width: effectiveWidth,
          height: effectiveHeight,
        };

        const isMobile = effectiveWidth < 768;
        setDeviceSettings((prevSettings) => {
          const newSettings = {
            smoothness: isMobile ? 2 : 4,
            castShadow: !isMobile,
            receiveShadow: !isMobile,
          };

          if (
            prevSettings.smoothness !== newSettings.smoothness ||
            prevSettings.castShadow !== newSettings.castShadow ||
            prevSettings.receiveShadow !== newSettings.receiveShadow
          ) {
            return newSettings;
          }
          return prevSettings;
        });

        isResizingRef.current = false;
      }, 150);
    }, [resetCube]);

    useEffect(() => {
      handleViewportChange();

      let throttleTimer: NodeJS.Timeout | null = null;
      const throttledHandler = () => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
          handleViewportChange();
          throttleTimer = null;
        }, 100);
      };

      window.addEventListener("resize", throttledHandler);

      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", throttledHandler);
        window.visualViewport.addEventListener("scroll", throttledHandler);
      }

      const handleOrientationChange = () => {
        if (isAnimatingRef.current) {
          resetCube();
        }
        setTimeout(handleViewportChange, 100);
      };

      window.addEventListener("orientationchange", handleOrientationChange);

      return () => {
        window.removeEventListener("resize", throttledHandler);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener("resize", throttledHandler);
          window.visualViewport.removeEventListener("scroll", throttledHandler);
        }
        window.removeEventListener(
          "orientationchange",
          handleOrientationChange
        );

        if (throttleTimer) {
          clearTimeout(throttleTimer);
        }
      };
    }, [handleViewportChange, resetCube]);

    useEffect(() => {
      const handleVisibilityChange = () => {
        if (!isMountedRef.current) return;
        const isPageVisible = document.visibilityState === "visible";
        setIsVisible(isPageVisible);

        if (!isPageVisible) {
          resetCube();
        } else {
          setTimeout(() => {
            if (isMountedRef.current) {
              handleViewportChange();
            }
          }, 100);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }, [resetCube, handleViewportChange]);

    const possibleMoves = useMemo(() => {
      const moves: Move[] = [];
      for (const axis of ["x", "y", "z"] as const) {
        for (const layer of [-1, 0, 1]) {
          for (const direction of [1, -1]) {
            moves.push({ axis, layer, direction });
          }
        }
      }
      return moves;
    }, []);

    const isInLayer = useCallback(
      (position: Vector3, axis: "x" | "y" | "z", layer: number): boolean => {
        const coord =
          axis === "x" ? position.x : axis === "y" ? position.y : position.z;
        return Math.abs(coord - layer) < 0.1;
      },
      []
    );

    const selectNextMove = useCallback(() => {
      if (
        !isAnimatingRef.current &&
        isVisible &&
        isMountedRef.current &&
        !isResizingRef.current
      ) {
        const availableMoves = possibleMoves.filter(
          (move) => move.axis !== lastMoveAxisRef.current
        );

        const move =
          availableMoves[Math.floor(Math.random() * availableMoves.length)];
        const rotationAngle = Math.PI / 2;

        currentMoveRef.current = { ...move, rotationAngle } as Move;
        lastMoveAxisRef.current = move.axis as "x" | "y" | "z";
        isAnimatingRef.current = true;
        currentRotationRef.current = 0;
      }
    }, [possibleMoves, isVisible]);

    useEffect(() => {
      let timeoutId: NodeJS.Timeout | undefined;

      const scheduleNextMove = () => {
        if (isVisible && isMountedRef.current && !isResizingRef.current) {
          const delay = isAnimatingRef.current
            ? ANIMATION_DURATION * 1000
            : 200;

          timeoutId = setTimeout(() => {
            selectNextMove();
            if (isMountedRef.current) {
              scheduleNextMove();
            }
          }, delay);
        } else {
          if (isResizingRef.current && isVisible && isMountedRef.current) {
            setTimeout(() => {
              if (isMountedRef.current) {
                scheduleNextMove();
              }
            }, 500);
          }
        }
      };

      scheduleNextMove();

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [isVisible, selectNextMove]);

    const createRotationMatrix = useCallback(
      (axis: "x" | "y" | "z", angle: number): Matrix4 => {
        reusableMatrix4.identity();
        reusableQuaternion.identity();
        reusableVec3.set(0, 0, 0);

        reusableVec3[axis] = 1;
        reusableQuaternion.setFromAxisAngle(reusableVec3, angle);
        return reusableMatrix4.makeRotationFromQuaternion(reusableQuaternion);
      },
      [reusableMatrix4, reusableQuaternion, reusableVec3]
    );

    const easeInOutQuad = useCallback((t: number): number => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }, []);

    const matrixToQuaternion = useCallback(
      (matrix: Matrix4): Quaternion => {
        reusableQuaternion.setFromRotationMatrix(matrix);
        return reusableQuaternion.clone();
      },
      [reusableQuaternion]
    );

    const normalizePositions = useCallback((cubes: Cube[]): Cube[] => {
      return cubes.map((cube) => {
        const x = Math.round(cube.position.x);
        const y = Math.round(cube.position.y);
        const z = Math.round(cube.position.z);

        const newPosition =
          Math.abs(cube.position.x - x) > 0.001 ||
          Math.abs(cube.position.y - y) > 0.001 ||
          Math.abs(cube.position.z - z) > 0.001
            ? new Vector3(x, y, z)
            : cube.position;

        return {
          ...cube,
          position: newPosition,
        };
      });
    }, []);

    const checkCubeIntegrity = useCallback((cubes: Cube[]): boolean => {
      if (cubes.length !== 27) {
        console.warn("Incorrect number of cubes:", cubes.length);
        return false;
      }

      for (const cube of cubes) {
        const { x, y, z } = cube.position;
        if (Math.abs(x) > 1.1 || Math.abs(y) > 1.1 || Math.abs(z) > 1.1) {
          console.warn("Cube out of range:", cube.id, x, y, z);
          return false;
        }
      }

      return true;
    }, []);

    const updateCubes = useCallback(
      (prevCubes: Cube[], move: Move, stepRotationMatrix: Matrix4): Cube[] => {
        return prevCubes.map((cube) => {
          if (isInLayer(cube.position, move.axis, move.layer)) {
            const tempVec3 = new Vector3(
              cube.position.x,
              cube.position.y,
              cube.position.z
            );

            tempVec3.applyMatrix4(stepRotationMatrix);

            const newRotationMatrix = new Matrix4().multiplyMatrices(
              stepRotationMatrix,
              cube.rotationMatrix
            );

            return {
              ...cube,
              position: tempVec3,
              rotationMatrix: newRotationMatrix,
            };
          }
          return cube;
        });
      },
      [isInLayer]
    );

    useFrame((state, delta) => {
      if (!isVisible || !isMountedRef.current) return;

      if (mainGroupRef.current) {
        mainGroupRef.current.rotation.x += delta * 0.3;
        mainGroupRef.current.rotation.y += delta * 0.5;
        mainGroupRef.current.rotation.z += delta * 0.2;
      }

      if (isResizingRef.current && isAnimatingRef.current) {
        resetCube();
        return;
      }

      if (isAnimatingRef.current && currentMoveRef.current) {
        const move = currentMoveRef.current;
        const targetRotation = move.rotationAngle ?? 0;
        const rotation = delta / ANIMATION_DURATION;

        if (currentRotationRef.current < 1) {
          const newRotation = Math.min(
            currentRotationRef.current + rotation,
            1
          );
          const prevRotation = currentRotationRef.current;
          currentRotationRef.current = newRotation;

          const easedProgress = easeInOutQuad(newRotation);
          const prevEasedProgress = easeInOutQuad(prevRotation);
          const currentAngle = easedProgress * targetRotation;
          const prevAngle = prevEasedProgress * targetRotation;
          const stepRotation = currentAngle - prevAngle;

          const stepRotationMatrix = createRotationMatrix(
            move.axis,
            stepRotation * move.direction
          );

          if (isMountedRef.current && !isResizingRef.current) {
            setCubes((prevCubes) => {
              const updatedCubes = updateCubes(
                prevCubes,
                move,
                stepRotationMatrix
              );

              if (newRotation >= 1) {
                const normalizedCubes = normalizePositions(updatedCubes);

                if (!checkCubeIntegrity(normalizedCubes)) {
                  console.warn("Found a cube out of bounds");
                  if (isMountedRef.current) {
                    setTimeout(() => resetCube(), 0);
                  }
                }

                isAnimatingRef.current = false;
                currentRotationRef.current = 0;
                currentMoveRef.current = null;

                return normalizedCubes;
              }

              return updatedCubes;
            });
          }
        }
      }
    });

    const chromeMaterial = useMemo(
      () => ({
        color: "#000000",
        metalness: 0.5,
        roughness: 0.5,
        clearcoat: 0,
        clearcoatRoughness: 0,
        reflectivity: 0.5,
        iridescence: 0,
        iridescenceIOR: 0,
        iridescenceThicknessRange: [100, 400] as [number, number],
        envMapIntensity: 8,
      }),
      []
    );

    const sharedMaterial = useMemo(
      () => <meshPhysicalMaterial {...chromeMaterial} />,
      [chromeMaterial]
    );

    return (
      <group ref={mainGroupRef} {...props}>
        {cubes.map((cube) => (
          <group
            key={cube.id}
            position={[
              cube.position.x * (CUBE_SIZE + GAP),
              cube.position.y * (CUBE_SIZE + GAP),
              cube.position.z * (CUBE_SIZE + GAP),
            ]}
            quaternion={matrixToQuaternion(cube.rotationMatrix)}
          >
            <RoundedBox
              args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
              radius={RADIUS}
              smoothness={deviceSettings.smoothness}
              castShadow={deviceSettings.castShadow}
              receiveShadow={deviceSettings.receiveShadow}
            >
              {sharedMaterial}
            </RoundedBox>
          </group>
        ))}
      </group>
    );
  }
);

RubiksCubeModel.displayName = "RubiksCubeModel";

function CameraController() {
  const { camera } = useThree();

  useFrame(() => {
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function EnhancedSpotlight(props: Record<string, unknown>) {
  const light = useRef<SpotLightImpl>(null);

  useEffect(() => {
    if (light.current) {
      light.current.target.position.set(0, 0, 0);
      light.current.target.updateMatrixWorld();
    }
  }, []);

  return (
    <>
      <SpotLight castShadow={false} ref={light} {...props} />
    </>
  );
}

function SceneContent() {
  const depthBuffer = useDepthBuffer({
    size: 2048,
    frames: 1,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(0);
  useFrame((state) => {
    setTime(state.clock.getElapsedTime());
  });

  return (
    <>
      <EnhancedSpotlight
        depthBuffer={depthBuffer}
        color="#aaaace"
        position={[3, 3, 2]}
        volumetric={true}
        opacity={1}
        penumbra={1}
        distance={17}
        angle={0.8}
        attenuation={30}
        anglePower={6}
        intensity={1}
        shadowMapSize={2048}
        shadowBias={-0.0001}
        shadowAutoUpdate={true}
        castShadow={true}
      />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[0, 0, 7]}
        near={0.1}
        far={1000}
      />

      <CameraController />

      <Suspense fallback={null}>
        <RubiksCubeModel position={[0, 0, 0]} scale={1} />
      </Suspense>
    </>
  );
}

export function Scene() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();

    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <div className="h-svh relative bg-black">
      <Canvas
        shadows
        gl={{
          antialias: isDesktop,
          preserveDrawingBuffer: isDesktop,
          powerPreference: isDesktop ? "high-performance" : "default",
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
