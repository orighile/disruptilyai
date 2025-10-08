import { removeBackground, loadImage } from '../src/utils/removeBackground';

async function processLogo() {
  try {
    // Load the logo image
    const response = await fetch('/lovable-uploads/disruptily-logo.png');
    const blob = await response.blob();
    const img = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(img);
    
    // Download the processed image
    const url = URL.createObjectURL(processedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'disruptily-logo-transparent.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Logo processed successfully!');
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();
