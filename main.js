song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("sorry.mp3");
    song2 = loadSound("as_it_was.mp3");
}
function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 450, 400);
}