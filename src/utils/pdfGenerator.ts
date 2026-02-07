import { jsPDF } from 'jspdf';

interface PDFOptions {
  title: string;
  subtitle?: string;
  content: string;
  filename: string;
}

export function generatePDF({ title, subtitle, content, filename }: PDFOptions): void {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  
  // Word wrap title if needed
  const titleLines = doc.splitTextToSize(title, 170);
  let y = 20;
  titleLines.forEach((line: string) => {
    doc.text(line, 20, y);
    y += 8;
  });
  
  // Subtitle
  if (subtitle) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(subtitle, 20, y);
    y += 12;
  } else {
    y += 5;
  }
  
  // Content
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const lines = content.split('\n');
  
  lines.forEach(line => {
    // Check if we need a new page
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
    
    // Handle long lines with word wrap
    const wrappedLines = doc.splitTextToSize(line, 170);
    wrappedLines.forEach((wrappedLine: string) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(wrappedLine, 20, y);
      y += 5;
    });
  });
  
  // Save the PDF
  const pdfFilename = filename.endsWith('.pdf') ? filename : `${filename.replace(/\.txt$/, '')}.pdf`;
  doc.save(pdfFilename);
}

export function generateTemplatePDF(template: { title: string; content: string; filename: string }): void {
  generatePDF({
    title: template.title,
    subtitle: 'Vibe Intelligence',
    content: template.content,
    filename: template.filename,
  });
}
