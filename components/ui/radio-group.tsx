"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RadioOption
{
    value: string;
    label: string;
}

interface RadioGroupProps
{
    name: string;
    options: RadioOption[];
    defaultValue?: string;
    className?: string;
    onChange?: (value: string) => void;
}

export function RadioGroup({
    name,
    options,
    defaultValue,
    className,
    onChange,
}: RadioGroupProps)
{
    const [selectedValue, setSelectedValue] = React.useState(defaultValue || options[0]?.value);

    const handleChange = (value: string) =>
    {
        setSelectedValue(value);
        onChange?.(value);
    };

    return (
        <div className={cn("flex gap-3", className)}>
            {options.map((option) => (
                <label
                    key={option.value}
                    className="cursor-pointer"
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                        className="sr-only"
                    />
                    <div
                        className={cn(
                            "flex items-center cursor-pointer justify-center px-6 py-3 rounded-sm border transition-all duration-200 min-w-[80px]",
                            selectedValue === option.value
                                ? "border-white text-white"
                                : "border-gray-600 text-gray-600"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            {/* <div
                                className={cn(
                                    "w-3 h-3 rounded-full transition-colors duration-200",
                                    selectedValue === option.value
                                        ? "border-white"
                                        : "bg-gray-400"
                                )}
                            /> */}
                            <span className="text-sm font-medium">
                                {option.label}
                            </span>
                        </div>
                    </div>
                </label>
            ))}
        </div>
    );
}
