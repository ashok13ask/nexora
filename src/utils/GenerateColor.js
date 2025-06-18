// colorUtils.js

export function generateRandomLightAndDarkColor(darkFactor = 0.2) {
  const lightColor = getRandomLightColor();
  const darkColor = getDarkerColor(lightColor, darkFactor);
  return { lightColor, darkColor };
}

function getRandomLightColor() {
  const r = Math.floor(200 + Math.random() * 20);
  const g = Math.floor(200 + Math.random() * 20);
  const b = Math.floor(200 + Math.random() * 20);
  return rgbToHex(r, g, b);
}

function getDarkerColor(hex, factor) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(
    Math.floor(r * factor),
    Math.floor(g * factor),
    Math.floor(b * factor)
  );
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("")
  );
}

function hexToRgb(hex) {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}
