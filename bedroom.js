img = "";
status = "";
objects = [];

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
    objects = results;
}

function preload()
{
    img = loadImage('bedroom.jpeg');
}

function draw()
{
    
    if(status != "")
    {
        image(img, 0, 0, 640, 420);
        
      for(i = 0; i < objects.length; i++)
      {
         document.getElementById("status").innerHTML = "Status : Object Detected";
         document.getElementById("detected").innerHTML = "Out of which how many are detected : " + objects.length;

         fill("#8818ad");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
         noFill();
         stroke("#8818ad");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }

}