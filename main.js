var cat = 0;
var dog = 0;
var cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3QQ85994i/model.json' , modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1 ;
        random_number_g = Math.floor(Math.random() * 255) + 1 ;
        random_number_b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHTML = "detected dog - "+dog+ "detected cat - "+cat+ "detected cow - "+cow ;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";
        
        img = document.getElementById("ear");

        if (results[0].label == "barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
        else if (results[0].label == "meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        } 
        else if (results[0].label == "mooing"){
            img.src = "https://i.pinimg.com/originals/eb/96/c9/eb96c9d76b4cd5ae25e8879bb986024a.gif";
            cow = cow + 1;
        } 
        else{
            img.src = "https://s3-whjr-curriculum-uploads.whjr.online/dd5ed82b-b105-4b93-806f-1f9e718b56ec.png"
        }
    }
};