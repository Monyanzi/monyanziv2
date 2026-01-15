import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const images = [
    { input: 'src/assets/theory-of-constraints.png', output: 'src/assets/theory-of-constraints.webp' },
    { input: 'src/assets/reinsurance-tower.png', output: 'src/assets/reinsurance-tower.webp' },
    { input: 'src/assets/value-stick.png', output: 'src/assets/value-stick.webp' },
    { input: 'src/assets/hero-profile.jpg', output: 'src/assets/hero-profile.webp' }
];

async function convertImages() {
    console.log('Converting images to WebP format...\n');

    for (const img of images) {
        try {
            const inputPath = path.join(__dirname, img.input);
            const outputPath = path.join(__dirname, img.output);

            const stats = fs.statSync(inputPath);
            const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

            console.log(`Converting: ${path.basename(img.input)} (${sizeBefore} MB)`);

            await sharp(inputPath)
                .webp({ quality: 85, effort: 6 })
                .toFile(outputPath);

            const statsAfter = fs.statSync(outputPath);
            const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
            const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);

            console.log(`✓ Created: ${path.basename(img.output)} (${sizeAfter} MB) - ${reduction}% smaller\n`);
        } catch (error) {
            console.error(`✗ Error converting ${img.input}:`, error.message);
        }
    }

    console.log('Conversion complete!');
}

convertImages();
