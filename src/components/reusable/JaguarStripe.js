const sizes = {
  default: "h-4 w-8",
  lg: "h-5 w-12",
  wide: "h-1.5 w-24",
  full: "h-1.5 w-full",
};

// three slanted chrome bars (the "///" mark from the reference designs)
export default function JaguarStripe({ className = "", size = "default" }) {
  return (
    <span className={`inline-flex gap-0.5 ${sizes[size] || sizes.default} ${className}`} aria-hidden="true">
      <span className="chrome-bar-a flex-1 skew-x-[-20deg]" />
      <span className="chrome-bar-b flex-1 skew-x-[-20deg]" />
      <span className="chrome-bar-c flex-1 skew-x-[-20deg]" />
    </span>
  );
}
