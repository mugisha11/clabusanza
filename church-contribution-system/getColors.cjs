const { createCanvas, loadImage } = require('canvas');

async function getColors() {
  const image = await loadImage('public/logo.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  const data = ctx.getImageData(0, 0, image.width, image.height).data;
  const colors = {};
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 128) {
      const hex = '#' + ((1 << 24) + (data[i] << 16) + (data[i + 1] << 8) + data[i + 2]).toString(16).slice(1);
      colors[hex] = (colors[hex] || 0) + 1;
    }
  }
  const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
  console.log(sorted.slice(0, 5));
}
getColors().catch(console.error);
