img = "";
status = "";

function preload()
{
    img = loadImage('bedroom.jpeg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML =   "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!!");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}


function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#8628fa");
    text("Dog", 45, 75);
    noFill();
    stroke("#8628fa");
    rect(30, 60, 450, 350);

    fill("#fc65e6");
    text("Cat", 320, 120);
    noFill();
    stroke("#fc65e6");
    rect(300, 90, 270,320);
}