const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergePdfs=async (p1,p2) => {
  await merger.add(p1) 
  await merger.add(p2); 
  let d=new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.s aveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

module.exports={mergePdfs};
