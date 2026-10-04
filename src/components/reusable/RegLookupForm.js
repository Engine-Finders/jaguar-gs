"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { lookupVrm, buildQuoteUrl } from "@/lib/vrmLookup";

export default function RegLookupForm({
  buttonLabel = "Find My Jaguar",
  left = null,
  compact = false,
  row = false,
  stacked = false,
  large = false,
  compactButton = false,
  hideArrow = false,
  hideButton = false,
  darkButton = false,
  whiteBorder = false,
  matchHeight = false,
  bigButtonText = false,
  short = false,
  darkField = false,
  plateLabel = "UK",
}) {
  const [reg, setReg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const details = await lookupVrm(reg);
      router.push(buildQuoteUrl(details));
    } catch (err) {
      setError(err.message || "Please enter a valid UK registration number.");
    } finally {
      setLoading(false);
    }
  }

  const buttonHeight = matchHeight ? "h-14" : row ? (short ? "h-11" : "h-14") : stacked ? "h-9" : compact ? "h-11" : "h-12";
  const fieldHeight = matchHeight ? "h-14" : row ? (short ? "h-11" : "h-14") : stacked ? "h-16" : compact ? "h-14 sm:h-20" : "h-24 sm:h-28";
  const fieldBorder = whiteBorder ? "border-white/70" : "border-[#8f8f8f]";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        row
          ? "flex w-full items-center gap-2 text-left"
          : stacked
            ? "flex w-full flex-col items-start gap-3 text-left"
            : "flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left"
      }
    >
      {left}

      {error && (
        <p className="w-full text-center text-xs font-semibold text-red-400 sm:text-left">{error}</p>
      )}

      <div
        className={`flex ${fieldHeight} w-full min-w-0 ${row ? "flex-1" : "shrink-0"} overflow-hidden rounded-sm border-2 ${fieldBorder} shadow-sm ${
          row || stacked ? "" : "sm:flex-1 sm:w-auto"
        }`}
      >
        <span
          className={`flex ${row ? "w-8" : stacked ? "w-9" : "w-12 sm:w-14"} shrink-0 flex-col items-center justify-center gap-0.5 text-white ${darkField ? "bg-[#232323]" : "bg-[#111111]"}`}
        >
          <span className="text-[13px] leading-none" aria-hidden="true">
            ♛
          </span>
          <span className={`${row || stacked ? "text-[9px]" : "text-[11px] sm:text-xs"} font-extrabold tracking-wide`}>{plateLabel}</span>
        </span>
        <input
          type="text"
          value={reg}
          onChange={(e) => setReg(e.target.value.toUpperCase())}
          placeholder="AB12 CDE"
          maxLength={8}
          style={{ fontFamily: '"Charles Wright", sans-serif' }}
          className={`min-w-0 flex-1 px-2 text-center tracking-wide outline-none ${
            darkField
              ? "bg-[#232323] text-white placeholder:italic placeholder:text-white/40"
              : "bg-linear-to-b from-[#f4f4f4] via-[#e0e0e0] to-[#c9c9c9] text-black placeholder:italic placeholder:text-black"
          } ${
            row
              ? compact
                ? "text-xl sm:text-2xl"
                : "text-2xl sm:text-3xl"
              : stacked
                ? compact
                  ? "text-2xl"
                  : "text-3xl"
                : large
                  ? "text-6xl sm:text-7xl"
                  : compact
                    ? "text-2xl sm:text-3xl"
                    : "text-5xl sm:text-7xl"
          }`}
        />
      </div>

      {!hideButton && (
        <button
          type="submit"
          disabled={loading}
          className={`${buttonHeight} flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border-2 font-bold transition-colors disabled:cursor-wait disabled:opacity-70 ${
            darkButton ? "italic" : ""
          } ${
            darkButton
              ? "border-white/25 bg-[#111111] text-white hover:bg-white hover:text-[#111111]"
              : "border-[#1a1a1a] bg-[#1a1a1a] text-white hover:bg-transparent hover:text-[#1a1a1a]"
          } ${compactButton ? "px-2 text-[10px] gap-1 sm:px-2.5 sm:text-xs sm:gap-1.5" : bigButtonText ? "px-6 text-base sm:text-lg" : "px-6 text-sm"} ${
            stacked ? "w-full" : row ? "" : "w-full sm:w-auto"
          }`}
        >
          {loading ? "Searching…" : buttonLabel} {!loading && !hideArrow && "→"}
        </button>
      )}
    </form>
  );
}
