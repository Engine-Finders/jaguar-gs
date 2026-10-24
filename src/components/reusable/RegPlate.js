import UnionJack from "@/components/reusable/UnionJack";

// Number-plate input shared by every registration box on the site. Everything is sized from the plate
// height (--ph) so the width, GB strip, flag, GB label and text keep the proportions of the hero
// trust card at any size. Callers set the height with `heightClass` (e.g. "[--ph:56px] sm:[--ph:80px]").
// The text also shrinks to fit when the plate is squeezed narrower than 5.6 x its height
// (phones, plate beside a button), so "YOUR REG" never clips.
const TONES = {
  silver: "bg-linear-to-b from-[#f4f4f4] via-[#e0e0e0] to-[#c9c9c9] text-black placeholder:text-black",
  light: "bg-linear-to-b from-[#ffffff] to-[#e4e4e7] text-[#1b1b1d] placeholder:text-[#2a2a2c]",
  white: "bg-white text-black placeholder:text-black/70",
  dark: "bg-[#232323] text-white placeholder:text-white/40",
};

export default function RegPlate({
  value,
  onChange,
  onBlur,
  tone = "silver",
  heightClass = "[--ph:64px] sm:[--ph:80px]",
  borderClass = "border-[#8f8f8f]",
  stripClass = "bg-[#111111]",
  className = "",
  ariaLabel = "Vehicle registration",
  placeholder = "Your Reg",
  readOnly = false,
  yellowPlate = false,
  plain = false,
  textScale = 0.75,
}) {
  return (
    <div
      className={`flex h-(--ph) w-full min-w-0 max-w-[calc(var(--ph)*5.6)] overflow-hidden rounded-sm border-2 shadow-sm ${yellowPlate ? "border-[#1a1a1a]" : borderClass} ${heightClass} ${className}`}
      style={{ containerType: "inline-size" }}
    >
      <span
        className={`flex shrink-0 flex-col items-center justify-center ${yellowPlate ? "bg-[#003399]" : stripClass}`}
        style={{ width: "calc(var(--ph) * 0.7)", gap: "calc(var(--ph) * 0.2)" }}
      >
        <span className="block" style={{ width: "calc(var(--ph) * 0.35)" }}>
          <UnionJack className="w-full" />
        </span>
        <span className="font-bold leading-none tracking-wide text-white" style={{ fontSize: "calc(var(--ph) * 0.175)" }}>
          GB
        </span>
      </span>
      <input
        type="text"
        readOnly={readOnly}
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={8}
        aria-label={ariaLabel}
        style={{
          ...(plain ? {} : { fontFamily: '"Charles Wright", sans-serif' }),
          lineHeight: 0.8,
          fontSize: `min(calc(var(--ph) * ${textScale}), calc((100cqw - var(--ph) * 0.7 - 16px) / 5))`,
        }}
        className={`min-w-0 flex-1 px-2 text-center uppercase outline-none ${plain ? "font-medium tracking-[0.2em]" : "font-normal tracking-[0.06em]"} ${yellowPlate ? "bg-[#f6c315] text-black placeholder:text-black/60" : TONES[tone]}`}
      />
    </div>
  );
}
