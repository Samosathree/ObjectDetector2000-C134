img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Sending through Bermuda Triangle, WAIT DON'T PUT IT HERE!";
}
function preload(){
    img = loadImage('dog_cat.jpg');
}

function modelLoaded(){
    console.log("WE CAN'T FIND IT AFTER PUTTING IT IN THE TRIANGLE! WAIT NO DON'T LOOK HERE!!!");
    status = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status : NO NO U KNOW THE STUFFS NOWS, good soup";
            document.getElementById("objnum").innerHTML = "We detected this many thing in  the triangle : " + objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}