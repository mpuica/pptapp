const PptxGenJS = require('pptxgenjs');

const PPTapp = ({

  generate: function (params) {

    // STEP 1: Create a new Presentation
    var pptx = new PptxGenJS();

    // STEP 2: Add a new Slide to the Presentation
    var slide = pptx.addSlide();

    // STEP 3: Add any objects to the Slide (charts, tables, shapes, images, etc.)
    slide.addText(
      'BONJOUR - CIAO - GUTEN TAG - HELLO - HOLA - NAMASTE - OLÀ - ZDRAS-TVUY-TE - こんにちは - 你好  ',
      { x:0.0, y:0.25, w:'100%', h:1.5, align:'center', fontSize:24, color:'0088CC', fill:{ color:'F1F1F1' } }
    );

    // STEP 4: Send the PPTX Presentation to the user, using your choice of file name
    pptx.writeFile('app/demo/first');

    console.log('genrated!');
  }

})

module.exports = PPTapp;
