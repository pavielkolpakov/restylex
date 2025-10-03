"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface HyperTextProps
{
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
  conteinerId?: string;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const scrollToContact = (container: string) =>
{
  document.getElementById(container)?.scrollIntoView({ behavior: "smooth" });
};

export function HyperText({
  text,
  duration = 500,
  framerProps = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: 0 },
  },
  className,
  conteinerId = 'default',
}: HyperTextProps)
{
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);

  const triggerAnimation = () =>
  {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() =>
  {
    if (!trigger) return;

    const interval = setInterval(
      () =>
      {
        if (interations.current < text.length)
        {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= interations.current
                  ? text[i]
                  : alphabets[getRandomInt(26)],
            ),
          );
          interations.current = interations.current + 0.1;
        } else
        {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.length * 10),
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger]);

  return (
    <div
      className="flex scale-100 cursor-pointer overflow-hidden py-2"
      onMouseEnter={triggerAnimation}
      onClick={() => scrollToContact(conteinerId)}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
