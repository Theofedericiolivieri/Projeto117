function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function preLoad(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearCanvas(){
    background("white");
}