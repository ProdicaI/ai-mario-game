function preload() {
  world_start = loadSound("world_start.wav");
  setSprites();
  MarioAnimation();
}

function setup() {
  canvas = createCanvas(1240, 336);
  canvas.parent("canvas");
  instializeInSetup(mario);

  let video = createCapture(VIDEO);
  video.size(1240, 336);
  video.parent("game_console");

  let poseNet = ml5.poseNet(video, () => console.log("Model Loaded!"));

  poseNet.on("pose", (res) => {
    if (res.length > 0) {
      noseX = res[0].pose.nose.x;
      noseY = res[0].pose.nose.y;
      console.log(`NoseX: ${noseX}\nNoseY: ${noseY}`);
    }
  });
}

function draw() {
  game();
}
