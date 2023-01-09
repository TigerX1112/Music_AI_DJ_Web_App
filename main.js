song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("sorry.mp3");
    song2 = loadSound("as_it_was.mp3");
}
function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function modalLoaded() {
    console.log("Pose net is intilized");
}
function draw() {
    image(video, 0, 0, 450, 400);
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("X = " + leftWristX + " Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("X = " + rightWristX + " y = " + rightWristY);
    }
}