const PDFDocument = require('pdfkit');
const fs = require('fs');
module.exports = async function generateCertificate(name, type, outputPath){
  return new Promise((resolve,reject)=>{
    const doc = new PDFDocument({ size: 'A4' });
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);
    doc.fontSize(28).text('ResearchNest', { align: 'center' });
    doc.moveDown(2);
    doc.fontSize(20).text(`Certificate of ${type}`, { align: 'center' });
    doc.moveDown(2);
    doc.fontSize(16).text(`This is to certify that ${name} has ${type} in the conference.`, { align: 'center' });
    doc.end();
    stream.on('finish', ()=> resolve(outputPath));
    stream.on('error', reject);
  });
}
