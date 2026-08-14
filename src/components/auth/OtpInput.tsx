"use client";

import React, { useRef, useEffect } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
}

export function OtpInput({ value, onChange, length = 6 }: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Auto-focus the first empty box
    const firstEmptyIndex = value.findIndex((v) => !v);
    const targetIndex = firstEmptyIndex === -1 ? 0 : firstEmptyIndex;
    inputRefs.current[targetIndex]?.focus();
  }, []);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digit = rawVal.replace(/\D/g, "").slice(-1); // Only keep the last entered digit

    const newOtp = [...value];
    newOtp[index] = digit;
    onChange(newOtp);

    // Auto move focus forward if digit entered
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        // Current is already empty, delete previous and move focus back
        const newOtp = [...value];
        newOtp[index - 1] = "";
        onChange(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...value];
        newOtp[index] = "";
        onChange(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pastedData) return;

    const newOtp = [...value];
    for (let i = 0; i < length; i++) {
      newOtp[i] = pastedData[i] || "";
    }
    onChange(newOtp);

    // Focus last filled or next empty box
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-3 py-3">
      {Array.from({ length }).map((_, index) => {
        const isFilled = Boolean(value[index]);

        return (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-11 h-13 sm:w-13 sm:h-16 text-center text-xl sm:text-2xl font-black rounded-2xl bg-[#262626] border transition-all outline-none select-none ${
              isFilled
                ? "border-[#00a8ff] text-white shadow-md shadow-[#00a8ff]/20 bg-[#2a2a2a]"
                : "border-[#3a3a3a] text-slate-400 focus:border-[#00a8ff] focus:ring-2 focus:ring-[#00a8ff]/20"
            }`}
            placeholder="0"
          />
        );
      })}
    </div>
  );
}
