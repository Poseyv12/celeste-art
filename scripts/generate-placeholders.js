const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Function to generate SVG placeholder
function generatePlaceholder(width, height, text) {
  return `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text 
    x="50%" 
    y="50%" 
    font-family="Arial" 
    font-size="20" 
    fill="#6b7280" 
    text-anchor="middle" 
    dominant-baseline="middle"
  >
    ${text}
  </text>
</svg>`;
}

// Generate placeholders
const placeholders = [
  { name: 'hero', width: 1920, height: 1080, text: 'Hero Image' },
  { name: '1', width: 800, height: 800, text: 'Artwork 1' },
  { name: '2', width: 800, height: 800, text: 'Artwork 2' },
  { name: '3', width: 800, height: 800, text: 'Artwork 3' },
  { name: 'studio', width: 800, height: 600, text: 'Studio' },
];

placeholders.forEach(({ name, width, height, text }) => {
  const svg = generatePlaceholder(width, height, text);
  fs.writeFileSync(
    path.join(publicDir, `placeholder-${name}.jpg`),
    Buffer.from(svg)
  );
}); 