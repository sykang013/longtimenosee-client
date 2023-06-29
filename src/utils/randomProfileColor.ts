export function randomProfileColor() {
  const rColor = Math.floor(Math.random() * 128)
    .toString(16)
    .padStart(2, '0');
  const gColor = Math.floor(Math.random() * 128)
    .toString(16)
    .padStart(2, '0');
  const bColor = Math.floor(Math.random() * 128)
    .toString(16)
    .padStart(2, '0');

  return `#${rColor}${gColor}${bColor}`;
}
