// Brand stripes that used to be baked into the section photos, redrawn as vector bands that sit on top of
// the photo (a bit wider than the old ones so they hide them). The overlay is an <img> whose SVG has the
// same aspect ratio as the photo, so passing the photo's own object-fit / object-position / transform
// classes keeps the stripes locked to the picture at any crop.
// A band is { top: [x0, x1], bottom: [x0, x1], y: [yTop, yBottom], fill } in photo pixels (x at y[0] and y[1]).

const grad = (id, stops, dir = "h") =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="${dir === "h" ? 1 : 0}" y2="${dir === "h" ? 0 : 1}">${stops
    .map(([o, c, op]) => `<stop offset="${o}" stop-color="${c}"${op != null ? ` stop-opacity="${op}"` : ""}/>`)
    .join("")}</linearGradient>`;

function build(p) {
  const defs = [];
  const shapes = [];
  p.bands.forEach((b, i) => {
    let fill = b.fill;
    if (Array.isArray(b.fill)) {
      defs.push(grad(`g${i}`, b.fill, b.dir));
      fill = `url(#g${i})`;
    }
    const pts = `${b.top[0]},${b.y[0]} ${b.top[1]},${b.y[0]} ${b.bottom[1]},${b.y[1]} ${b.bottom[0]},${b.y[1]}`;
    if (b.glow) {
      defs.push(`<filter id="f${i}" x="-60%" y="-5%" width="220%" height="110%"><feGaussianBlur stdDeviation="${b.glow}"/></filter>`);
      shapes.push(`<polygon points="${pts}" fill="${b.glowFill ?? (Array.isArray(b.fill) ? b.fill[0][1] : b.fill)}" opacity="0.6" filter="url(#f${i})"/>`);
    }
    shapes.push(`<polygon points="${pts}" fill="${fill}"${b.opacity != null ? ` opacity="${b.opacity}"` : ""}/>`);
  });
  let body = shapes.join("");
  if (p.clip) {
    defs.push(`<clipPath id="clip"><polygon points="${p.clip}"/></clipPath>`);
    body = `<g clip-path="url(#clip)">${body}</g>`;
  }
  if (p.fade) {
    const [y0, y1] = p.fade;
    defs.push(`<linearGradient id="fadeG" gradientUnits="userSpaceOnUse" x1="0" y1="${y0}" x2="0" y2="${y1}"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>`);
    defs.push(`<mask id="fade" maskUnits="userSpaceOnUse" x="0" y="0" width="${p.w}" height="${p.h}"><rect width="${p.w}" height="${y0}" fill="#fff"/><rect y="${y0}" width="${p.w}" height="${y1 - y0}" fill="url(#fadeG)"/></mask>`);
    body = `<g mask="url(#fade)">${body}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${p.w} ${p.h}"><defs>${defs.join("")}</defs>${body}</svg>`;
}

const PRESETS = {
  // sec11 desktop: two flat bands side by side - silver, then black - redrawn over the stripe baked into the photo
  sec11: {
    w: 1024,
    h: 572,
    bands: [
      { top: [408, 456], bottom: [258, 306], y: [0, 460], fill: "#c3c4c7" },
      { top: [456, 498], bottom: [306, 348], y: [0, 460], fill: "#1c1c1e" },
    ],
  },
  // sec3 desktop: two silver bands that end behind the car's windscreen
  sec3: {
    w: 1024,
    h: 768,
    clip: "770,0 900,0 900,140 860,132 848,126 832,118 815,108 800,100 785,93 770,90",
    bands: [
      { top: [821, 847], bottom: [790, 817], y: [0, 105], dir: "v", fill: [[0, "#37373a"], [0.3, "#8e8e90"], [0.8, "#b6b6b8"], [1, "#b0b0b2"]] },
      { top: [861, 888], bottom: [824, 850], y: [0, 128], dir: "v", fill: [[0, "#4a4a4d"], [0.5, "#636366"], [1, "#47474a"]] },
    ],
  },
  // sec14 desktop: silver bands at the top right, ending behind the engine
  sec14: {
    w: 1024,
    h: 242,
    bands: [
      { top: [933, 963], bottom: [890, 922], y: [0, 58], dir: "v", fill: [[0, "#2b2b2e"], [0.6, "#6a6a6d"], [1, "#4a4a4d"]] },
      { top: [963, 988], bottom: [934, 952], y: [0, 70], dir: "v", fill: [[0, "#202022"], [1, "#4f4f52"]] },
    ],
  },
};

export default function PhotoStripes({ preset, className = "object-cover", style }) {
  const p = PRESETS[preset];
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(build(p))}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`} style={style} />
  );
}
