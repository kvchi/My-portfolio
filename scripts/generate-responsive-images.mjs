import { mkdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Run with `npm run images:generate`. The fixed source list, rendered-width
// candidates, and pinned Sharp version keep repeated output deterministic.
// Photographic quality ranges from 70 for the low-opacity footer to 84 for the
// portrait; small skill marks use lossless WebP to preserve hard edges.

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = path.join(projectRoot, 'src', 'assets', 'Images');
const outputDirectory = path.join(projectRoot, 'src', 'assets', 'optimized');

const jobs = [
  { source: 'code.jpg', name: 'hero-code', widths: [640, 1024, 1440, 1920], quality: 76 },
  { source: 'coding2.jpg', name: 'footer-coding', widths: [640, 1024, 1440], quality: 70 },
  { source: 'candle3.jpg', name: 'shopsphare-candle', widths: [480, 768, 1024], quality: 80 },
  { source: 'disney.jpg', name: 'disney-interface', widths: [480, 768, 1024], quality: 80 },
  { source: 'laundry.jpg', name: 'laund3omat', widths: [480, 768, 1024], quality: 80 },
  { source: 'cleaningLady2.jpg', name: 'purehaven', widths: [480, 768, 1024], quality: 80 },
  { source: 'nexim.png', name: 'nexim-interface', widths: [480, 609], quality: 82 },
  { source: 'me.png', name: 'portrait-jonathan', widths: [447], quality: 84 },
  { source: 'htmlLogo.png', name: 'skill-html', widths: [64], lossless: true },
  { source: 'cssLogo.png', name: 'skill-css', widths: [64], lossless: true },
  { source: 'javaScriptLogo.png', name: 'skill-javascript', widths: [64], lossless: true },
  { source: 'reactLogo.png', name: 'skill-react', widths: [64], lossless: true },
  { source: 'tailwindcss.png', name: 'skill-tailwind', widths: [64], lossless: true },
];

await mkdir(outputDirectory, { recursive: true });

for (const [jobIndex, job] of jobs.entries()) {
  const inputPath = path.join(sourceDirectory, job.source);
  const metadata = await sharp(inputPath).metadata();

  for (const width of job.widths) {
    if (!metadata.width || width > metadata.width) {
      throw new Error(`Refusing to upscale ${job.source} from ${metadata.width ?? 'unknown'}px to ${width}px.`);
    }

    const outputPath = path.join(outputDirectory, `${job.name}-${width}w.webp`);
    const temporaryPath = path.join(
      outputDirectory,
      `.${job.name}-${width}w-${process.pid}-${jobIndex}.tmp.webp`,
    );
    if (path.resolve(outputPath) === path.resolve(inputPath)) {
      throw new Error(`Refusing to overwrite original image: ${inputPath}`);
    }

    const webpOptions = job.lossless
      ? { lossless: true, effort: 6 }
      : { quality: job.quality, effort: 6, smartSubsample: true };

    try {
      await sharp(inputPath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp(webpOptions)
        .toFile(temporaryPath);

      await rename(temporaryPath, outputPath);
    } finally {
      await rm(temporaryPath, { force: true });
    }

    console.log(path.relative(projectRoot, outputPath));
  }
}
