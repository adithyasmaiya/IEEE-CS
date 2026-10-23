const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, '..', 'public', 'frames');
const totalFrames = 177;
const concurrency = 8;

async function run() {
  console.log(`Starting WebP optimization for ${totalFrames} frames...`);
  const startTime = Date.now();
  let totalJpgSize = 0;
  let totalWebpSize = 0;

  let index = 1;
  async function worker() {
    while (index <= totalFrames) {
      const current = index++;
      const num = String(current).padStart(3, '0');
      const jpgPath = path.join(framesDir, `ezgif-frame-${num}.jpg`);
      const webpPath = path.join(framesDir, `ezgif-frame-${num}.webp`);

      if (fs.existsSync(jpgPath)) {
        totalJpgSize += fs.statSync(jpgPath).size;
        await sharp(jpgPath)
          .resize(1920, 1080, { fit: 'cover' })
          .webp({ quality: 80, effort: 4 })
          .toFile(webpPath);
        totalWebpSize += fs.statSync(webpPath).size;
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  const jpgMb = (totalJpgSize / (1024 * 1024)).toFixed(2);
  const webpMb = (totalWebpSize / (1024 * 1024)).toFixed(2);
  const savingsPercent = (((totalJpgSize - totalWebpSize) / totalJpgSize) * 100).toFixed(1);

  console.log(`Optimization complete in ${durationSec}s!`);
  console.log(`Original JPG total: ${jpgMb} MB`);
  console.log(`Optimized WebP total: ${webpMb} MB`);
  console.log(`Payload reduction: ${savingsPercent}% (Saved ${(jpgMb - webpMb).toFixed(2)} MB)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
