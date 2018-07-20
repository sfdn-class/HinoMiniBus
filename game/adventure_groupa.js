window.canvas;
window.sceneNumber = 0;

var gazou0;
var gazou1;
var gazou2;
var gazou3;
var sinai1;
var sinai2;
var sinai3;
var sinai4;
var sinai5;
var sinai6;
var sinai7;
var sinai_manganzi1;
var minami1;
var misawa1;
var asahi1;
var otikawa1;
var hirayama1;
var kawabe1;

function setup(){
    //size(640, 480);に相当する
    window.canvas = createCanvas(640, 480);
    //ただしこの命令でhtml上にcanvasタグが挿入される．
    window.canvas.parent("P5Canvas");
    colorMode(RGB, 255, 255, 255, 255);
    gazou0=loadImage("game/0.jpg");
    gazou1=loadImage("game/1.jpg");
    gazou2=loadImage("game/2.jpg");
    gazou3=loadImage("game/3.jpg");
    sinai1=loadImage("game/sinai1.jpg");
    sinai2=loadImage("game/sinai2.jpg");
    sinai3=loadImage("game/sinai3.jpg");
    sinai4=loadImage("game/sinai4.jpg");
    sinai5=loadImage("game/sinai5.jpg");
    sinai6=loadImage("game/sinai6.jpg");
    sinai7=loadImage("game/sinai7.jpg");
    sinai_manganzi1=loadImage("game/sinai_manganzi1");
    minami1=loadImage("game/minami1.jpg");
    misawa1=loadImage("game/misawa1.jpg");
    asahi1=loadImage("game/asahi1.jpg");
    otikawa1=loadImage("game/otikawa1.jpg");
    hirayama1=loadImage("game/hirayama1.jpg");
    kawabe1=loadImage("game/kawabe1.jpg");
}

function draw(){
  if(window.sceneNumber == 0){
    //スタートシーン
    drawSceneNumber0();
  }
  else if(window.sceneNumber == 1){
    drawSceneNumber1();
  }
  else if(window.sceneNumber == 2){
    drawSceneNumber2();
  }
  else if(window.sceneNumber == 3){
    //路線選択画面
    drawSceneNumber3();
  }
  else if(window.sceneNumber == sinai1){
    //市内路線
    drawSceneNumbersinai1();
  }
  else if(window.sceneNumber == sinai2){
    //市内路線
    drawSceneNumbersinai2();
  }
  else if(window.sceneNumber == sinai3){
    //市内路線
    drawSceneNumbersinai3();
  }
  else if(window.sceneNumber == sinai4){
    //市内路線
    drawSceneNumbersinai4();
  }
  else if(window.sceneNumber == sinai5){
    //市内路線
    drawSceneNumbersinai5();
  }
  else if(window.sceneNumber == sinai6){
    //市内路線
    drawSceneNumbersinai6();
  }
  else if(window.sceneNumber == sinai7){
    //市内路線
    drawSceneNumbersinai7();
  }
  else if(window.sceneNumber == sinai_manganzi1){
    //市内路線
    drawSceneNumbersinai_manganzi1();
  }
  else if(window.sceneNumber == minami1){
    //南平路線
    drawSceneNumberminami1();
  }
  else if(window.sceneNumber == misawa1){
    //三沢台路線
    drawSceneNumbermisawa1();
  }
  else if(window.sceneNumber == asahi1){
    //旭が丘路線
    drawSceneNumberasahi1();
  }
  else if(window.sceneNumber == otikawa1){
    //落川路線
    drawSceneNumberotikawa1();
  }
  else if(window.sceneNumber == hirayama1){
    //平山路線
    drawSceneNumberhirayama1();
  }
  else if(window.sceneNumber == kawabe1){
    //川辺堀之内路線
    drawSceneNumberkawabe1();
  }
}

function drawSceneNumber0(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou0,0,0);
}

function drawSceneNumber1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou1,0,0);
}

function drawSceneNumber2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou2,0,0);
}

function drawSceneNumber3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou3,0,0);
}

function drawSceneNumbersinai1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai1,0,0);
}

function drawSceneNumbersinai2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai2,0,0);
}

function drawSceneNumbersinai3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai3,0,0);
}

function drawSceneNumbersinai4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai4,0,0);
}

function drawSceneNumbersinai5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai5,0,0);
}

function drawSceneNumbersinai6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai6,0,0);
}

function drawSceneNumbersinai7(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai7,0,0);
}

function drawSceneNumberminami1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami1,0,0);
}

function drawSceneNumbermisawa1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa1,0,0);
}

function drawSceneNumberasahi1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi1,0,0);
}

function drawSceneNumberotikawa1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa1,0,0);
}

function drawSceneNumberhirayama1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama1,0,0);
}

function drawSceneNumberkawabe1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe1,0,0);
}

function mousePressed() { // マウスをクリックしたら(右クリック含む)
  if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==0){
  window.sceneNumber=1;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==1){
  window.sceneNumber=2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==2){
  window.sceneNumber=3;
  }
  else if(mouseX>32.5&&mouseX<142.5&&mouseY>60&&mouseY<135&&window.sceneNumber==3){
  window.sceneNumber=sinai1;
  }
  else if(mouseX>187.5&&mouseX<297.5&&mouseY>60&&mouseY<135&&window.sceneNumber==3){
  window.sceneNumber=minami1;
  }
  else if(mouseX>342.5&&mouseX<452.5&&mouseY>60&&mouseY<135&&window.sceneNumber==3){
  window.sceneNumber=misawa1;
  }
  else if(mouseX>497.5&&mouseX<607.5&&mouseY>60&&mouseY<135&&window.sceneNumber==3){
  window.sceneNumber=asahi1;
  }
  else if(mouseX>32.5&&mouseX<142.5&&mouseY>195&&mouseY<245&&window.sceneNumber==3){
  window.sceneNumber=otikawa1;
  }
  else if(mouseX>187.5&&mouseX<297.5&&mouseY>195&&mouseY<245&&window.sceneNumber==3){
  window.sceneNumber=hirayama1;
  }
  else if(mouseX>342.5&&mouseX<452.5&&mouseY>195&&mouseY<245&&window.sceneNumber==3){
  window.sceneNumber=kawabe1;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai1){
  window.sceneNumber=sinai2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai3;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai4;
  }
  else if(mouseX>497.5&&mouseX<607.5&&mouseY>195&&mouseY<240&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai5;
  }
  else if(mouseX>497.5&&mouseX<607.5&&mouseY>195&&mouseY<240&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai6;
  }
  else if(mouseX>497.5&&mouseX<607.5&&mouseY>195&&mouseY<240&&window.sceneNumber==sinai6){
  window.sceneNumber=sinai7;
  }
  else if(mouseX>497.5&&mouseX<607.5&&mouseY>195&&mouseY<240&&window.sceneNumber==sinai7){
  window.sceneNumber=sinai4;
  }
}
