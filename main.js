Webcam.set({
    width:450,
    height:450,
    image_format:"png",
    png_quality:90

})
camera=document.getElementById("camera")
Webcam.attach('#camera')

function picture(){
    Webcam.snap(function(mace){
        document.getElementById("result").innerHTML='<img id="firestar"src="'+mace+'"/>';
    });
    
}
 console.log('ml5',ml5.version);
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/Vfmp_b86/model.json',modelLoaded);
 function modelLoaded()
 console.log('model is loaded');

 function classified()
     paradox=document.getElementById('rusty');
    classifier.classify(paradox,gotResult);

    function gotResult(error,results){

    
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('object_name').innerHTML[0].label;
        document.getElementById('object_name').innerHTML[0].confidince.toFixed(2);
    }
}