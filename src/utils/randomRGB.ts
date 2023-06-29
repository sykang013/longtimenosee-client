export function randomRGB() {
  const rColor = Math.floor(Math.random() * 128);
  const gColor = Math.floor(Math.random() * 128);
  const bColor = Math.floor(Math.random() * 128);

  return `rgb(${rColor},${gColor}, ${bColor})`;
}
