window.canvas;
window.sceneNumber = 0;

var gazou0;
var gazou1;
var gazou2;
var gazou3;
//市内路線------------------------
var sinai_sentaku;
var sinai_modoru;
var sinai_nai;
var sinai1;
var sinai2;
var sinai3;
var sinai4;
var sinai5;
var sinai_furusato1;
var sinai_furusato2;
var sinai_honmati1;
var sinai_honmati2;
var sinai_honmati3;
var sinai_honmati4;
var sinai_honmati5;
var sinai_honmati6;
var sinai_honmati7;
var sinai_honmati8;
var sinai_mangan1;
var sinai_mangan2;
//南平路線---------------------------
var minami1;
//三沢台路線-------------------------
var misawa1;
var misawa2;
var misawa3;
var misawa4;
var misawa_sentaku;
var misawa_nai;
var misawa_modoru;
var misawa_ichi1;
var misawa_ichi2;
var misawa_sakura1;
var misawa_sakura2;
var misawa_seiseki1;
var misawa_seiseki2;
var misawa_takahata1;
var misawa_takahata2;
//旭が丘循環------------------------
var asahi_sentaku;
var asahi_modoru;
var asahi_nai;
var asahi1;
var asahi2;
var asahi3;
var asahi4;
var asahi_asahi1;
var asahi_asahi2;
var asahi_asahi3;
var asahi_asahi4;
var asahi_asahi5;
var asahi_asahi6;
var asahi_asahi7;
var asahi_asahi8;
var asahi_syuto1;
var asahi_syuto2;
var asahi_syuto3;
var asahi_syuto4;
var asahi_syuto5;
//落川路線-------------------------
var otikawa1;
var otikawa2;
var otikawa3;
var otikawa_sentaku;
var otikawa_modoru;
var otikawa_nai;
var otikawa_sakurasyako1;
var otikawa_sakurasyako2;
var otikawa_mogusa1;
var otikawa_mogusa2;
var otikawa_hoiku1;
var otikawa_hoiku2;
var otikawa_hoiku3;
var otikawa_hoiku4;
var otikawa_hoiku5;
//平山---------------------------------
var hirayama1;
//川辺---------------------------------
var kawabe1;

function setup(){
    //size(640, 480);に相当する
    window.canvas = createCanvas(640, 480);
    //ただしこの命令でhtml上にcanvasタグが挿入される．
    window.canvas.parent("P5Canvas");
    colorMode(RGB, 255, 255, 255, 255);
    gazou0=loadImage("game/kyotsu/game1.png");
    gazou1=loadImage("game/kyotsu/prologue.png");
    gazou2=loadImage("game/kyotsu/bus_select.png");
    gazou3=loadImage("game/kyotsu/game2.png");
    //modoru-sentaku-nai---------------------------------------------------
    sinai_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    sinai_modoru=loadImage("game/kyotsu/bus_modoru.png");
    sinai_nai=loadImage("game/kyotsu/game5.png");
    otikawa_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    otikawa_modoru=loadImage("game/kyotsu/bus_modoru.png");
    otikawa_nai=loadImage("game/kyotsu/game5.png");
    asahi_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    asahi_modoru=loadImage("game/kyotsu/bus_modoru.png");
    asahi_nai=loadImage("game/kyotsu/game5.png");
    misawa_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    misawa_modoru=loadImage("game/kyotsu/bus_modoru.png");
    misawa_nai=loadImage("game/kyotsu/game5.png");
    //市内--------------------------------------------------------------
    sinai1=loadImage("game/sinai/1.png");
    sinai2=loadImage("game/sinai/sinai1.png");
    sinai3=loadImage("game/sinai/sinai2.png");
    sinai4=loadImage("game/sinai/sinai3.png");
    sinai5=loadImage("game/sinai/sinai4.png");
    sinai_furusato1=loadImage("game/sinai/hinoshiyakusyo1.png");
    sinai_furusato2=loadImage("game/sinai/hinoshiyakusyo2.png");
    sinai_honmati1=loadImage("game/sinai/hinohonncyou1.png");
    sinai_honmati2=loadImage("game/sinai/hinohonncyou2.png");
    sinai_honmati3=loadImage("game/kyotsu/game_sentaku.png");
    sinai_honmati4=loadImage("game/sinai/hinohonncyou3.png");
    sinai_honmati5=loadImage("game/sinai/hinohonncyou4.png");
    sinai_honmati6=loadImage("game/kyotsu/game_sentaku.png");
    sinai_honmati7=loadImage("game/sinai/hinohonncyou5.png");
    sinai_honmati8=loadImage("game/sinai/hinohonncyou6.png");
    sinai_mangan1=loadImage("game/sinai/manngannjieki1.png")
    sinai_mangan2=loadImage("game/sinai/manngannjieki2.png")
    //南平--------------------------------------------------------------------
    minami1=loadImage("game/仮/minami1.jpg");
    //三沢台------------------------------------------------------------------
    misawa1=loadImage("game/misawa/1.png");
    misawa2=loadImage("game/misawa/misawa1.png");
    misawa3=loadImage("game/misawa/misawa2.png");
    misawa4=loadImage("game/misawa/misawa3.png");
    misawa_ichi1=loadImage("game/misawa/ichinomiya1.png");
    misawa_ichi2=loadImage("game/misawa/ichinomiya2.png");
    misawa_sakura1=loadImage("game/misawa/sakuragaokasinryoujyo1.png");
    misawa_sakura2=loadImage("game/misawa/sakuragaokasinryoujyo2.png");
    misawa_seiseki1=loadImage("game/misawa/seisekisakuragaokaeki1.png");
    misawa_seiseki2=loadImage("game/misawa/seisekisakuragaokaeki2.png");
    misawa_takahata1=loadImage("game/misawa/takahatafudoueki1.png");
    misawa_takahata2=loadImage("game/misawa/takahatafudoueki2.png");
    //旭が丘循環----------------------------------------------------------------
    asahi1=loadImage("game/asahi/1.png");
    asahi2=loadImage("game/asahi/asahi1.png");
    asahi3=loadImage("game/asahi/asahi2.png");
    asahi4=loadImage("game/asahi/asahi3.png");
    asahi_asahi1=loadImage("game/asahi/asahigaoka1.png");
    asahi_asahi2=loadImage("game/asahi/asahigaoka2.png");
    asahi_asahi3=loadImage("game/kyotsu/game_sentaku.png");
    asahi_asahi4=loadImage("game/asahi/asahigaoka3.png");
    asahi_asahi5=loadImage("game/asahi/asahigaoka4.png");
    asahi_asahi6=loadImage("game/kyotsu/game_sentaku.png");
    asahi_asahi7=loadImage("game/asahi/asahigaoka5.png");
    asahi_asahi8=loadImage("game/asahi/asahigaoka6.png");
    asahi_syuto1=loadImage("game/asahi/syutodaigakutokyomae1.png");
    asahi_syuto2=loadImage("game/asahi/syutodaigakutokyomae2.png");
    asahi_syuto3=loadImage("game/kyotsu/game_sentaku.png");
    asahi_syuto4=loadImage("game/asahi/syutodaigakutokyomae3.png");
    asahi_syuto5=loadImage("game/asahi/syutodaigakutokyomae4.png");
    //落川-----------------------------------------------------------------------
    otikawa1=loadImage("game/otikawa/1.png");
    otikawa2=loadImage("game/otikawa/ochikawa1.png");
    otikawa3=loadImage("game/otikawa/ochikawa2.png");
    otikawa_sakurasyako1=loadImage("game/otikawa/sakuragaokasyako.png");
    otikawa_sakurasyako2=loadImage("game/otikawa/sakuragaokasyako2.png");
    otikawa_mogusa1=loadImage("game/otikawa/mogusaenneki.png");
    otikawa_mogusa2=loadImage("game/otikawa/mogusaenneki2.png");
    otikawa_hoiku1=loadImage("game/otikawa/misawahoikuennkita1.png");
    otikawa_hoiku2=loadImage("game/otikawa/misawahoikuennkita2.png");
    otikawa_hoiku3=loadImage("game/kyotsu/game_sentaku.png");
    otikawa_hoiku4=loadImage("game/otikawa/misawahoikuennkita3.png");
    otikawa_hoiku5=loadImage("game/otikawa/misawahoikuennkita4.png");
    //平山-----------------------------------------------------------------------
    hirayama1=loadImage("game/仮/hirayama1.jpg");
    //川辺----------------------------------------------------------------------
    kawabe1=loadImage("game/仮/kawabe1.jpg");
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
  else if(window.sceneNumber == sinai_sentaku){
    //市内路線
    drawSceneNumbersinai_sentaku();
  }
  else if(window.sceneNumber == sinai_nai){
    //市内路線
    drawSceneNumbersinai_nai();
  }
  else if(window.sceneNumber == sinai_modoru){
    //市内路線
    drawSceneNumbersinai_modoru();
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
  else if(window.sceneNumber == sinai_furusato1){
    //市内路線
    drawSceneNumbersinai_furusato1();
  }
  else if(window.sceneNumber == sinai_furusato2){
    //市内路線
    drawSceneNumbersinai_furusato2();
  }
  else if(window.sceneNumber == sinai_honmati1){
    //市内路線
    drawSceneNumbersinai_honmati1();
  }
  else if(window.sceneNumber == sinai_honmati2){
    //市内路線
    drawSceneNumbersinai_honmati2();
  }
  else if(window.sceneNumber == sinai_honmati3){
    //市内路線
    drawSceneNumbersinai_honmati3();
  }
  else if(window.sceneNumber == sinai_honmati4){
    //市内路線
    drawSceneNumbersinai_honmati4();
  }
  else if(window.sceneNumber == sinai_honmati5){
    //市内路線
    drawSceneNumbersinai_honmati5();
  }
  else if(window.sceneNumber == sinai_honmati6){
    //市内路線
    drawSceneNumbersinai_honmati6();
  }
  else if(window.sceneNumber == sinai_honmati7){
    //市内路線
    drawSceneNumbersinai_honmati7();
  }
  else if(window.sceneNumber == sinai_honmati8){
    //市内路線
    drawSceneNumbersinai_honmati8();
  }
  else if(window.sceneNumber == sinai_mangan1){
    //市内路線
    drawSceneNumbersinai_mangan1();
  }
  else if(window.sceneNumber == sinai_mangan2){
    //市内路線
    drawSceneNumbersinai_mangan2();
  }
  else if(window.sceneNumber == minami1){
    //南平路線
    drawSceneNumberminami1();
  }
  else if(window.sceneNumber == misawa_sentaku){
    drawSceneNumbermisawa_sentaku();
  }
  else if(window.sceneNumber == misawa_nai){
    drawSceneNumbermisawa_nai();
  }
  else if(window.sceneNumber == misawa_modoru){
    drawSceneNumbermisawa_modoru();
  }
  else if(window.sceneNumber == misawa1){
    //三沢台路線
    drawSceneNumbermisawa1();
  }
  else if(window.sceneNumber == misawa2){
    //三沢台路線
    drawSceneNumbermisawa2();
  }
  else if(window.sceneNumber == misawa3){
    //三沢台路線
    drawSceneNumbermisawa3();
  }
  else if(window.sceneNumber == misawa4){
    //三沢台路線
    drawSceneNumbermisawa4();
  }
  else if(window.sceneNumber == misawa_ichi1){
    //三沢台路線
    drawSceneNumbermisawa_ichi1();
  }
  else if(window.sceneNumber == misawa_ichi2){
    //三沢台路線
    drawSceneNumbermisawa_ichi2();
  }
  else if(window.sceneNumber == misawa_sakura1){
    //三沢台路線
    drawSceneNumbermisawa_sakura1();
  }
  else if(window.sceneNumber == misawa_sakura2){
    //三沢台路線
    drawSceneNumbermisawa_sakura2();
  }
  else if(window.sceneNumber == misawa_seiseki1){
    //三沢台路線
    drawSceneNumbermisawa_seiseki1();
  }
  else if(window.sceneNumber == misawa_seiseki2){
    //三沢台路線
    drawSceneNumbermisawa_seiseki2();
  }
  else if(window.sceneNumber == misawa_takahata1){
    //三沢台路線
    drawSceneNumbermisawa_takahata1();
  }
  else if(window.sceneNumber == misawa_takahata2){
    //三沢台路線
    drawSceneNumbermisawa_takahata2();
  }
  else if(window.sceneNumber == asahi1){
    //旭が丘路線
    drawSceneNumberasahi1();
  }
  else if(window.sceneNumber == asahi2){
    //旭が丘路線
    drawSceneNumberasahi2();
  }
  else if(window.sceneNumber == asahi3){
    //旭が丘路線
    drawSceneNumberasahi3();
  }
  else if(window.sceneNumber == asahi4){
    //旭が丘路線
    drawSceneNumberasahi4();
  }
  else if(window.sceneNumber == asahi_asahi1){
    //旭が丘路線
    drawSceneNumberasahi_asahi1();
  }
  else if(window.sceneNumber == asahi_asahi2){
    //旭が丘路線
    drawSceneNumberasahi_asahi2();
  }
  else if(window.sceneNumber == asahi_asahi3){
    //旭が丘路線
    drawSceneNumberasahi_asahi3();
  }
  else if(window.sceneNumber == asahi_asahi4){
    //旭が丘路線
    drawSceneNumberasahi_asahi4();
  }
  else if(window.sceneNumber == asahi_asahi5){
    //旭が丘路線
    drawSceneNumberasahi_asahi5();
  }
  else if(window.sceneNumber == asahi_asahi6){
    //旭が丘路線
    drawSceneNumberasahi_asahi6();
  }
  else if(window.sceneNumber == asahi_asahi7){
    //旭が丘路線
    drawSceneNumberasahi_asahi7();
  }
  else if(window.sceneNumber == asahi_asahi8){
    //旭が丘路線
    drawSceneNumberasahi_asahi8();
  }
  else if(window.sceneNumber == asahi_syuto1){
    //旭が丘路線
    drawSceneNumberasahi_syuto1();
  }
  else if(window.sceneNumber == asahi_syuto2){
    //旭が丘路線
    drawSceneNumberasahi_syuto2();
  }
  else if(window.sceneNumber == asahi_syuto3){
    //旭が丘路線
    drawSceneNumberasahi_syuto3();
  }
  else if(window.sceneNumber == asahi_syuto4){
    //旭が丘路線
    drawSceneNumberasahi_syuto4();
  }
  else if(window.sceneNumber == asahi_syuto5){
    //旭が丘路線
    drawSceneNumberasahi_syuto5();
  }
  else if(window.sceneNumber == asahi_sentaku){
    drawSceneNumberasahi_sentaku();
  }
  else if(window.sceneNumber == asahi_nai){
    drawSceneNumberasahi_nai();
  }
  else if(window.sceneNumber == asahi_modoru){
    drawSceneNumberasahi_modoru();
  }
  else if(window.sceneNumber == otikawa_sentaku){
    drawSceneNumberotikawa_sentaku();
  }
  else if(window.sceneNumber == otikawa_nai){
    drawSceneNumberotikawa_nai();
  }
  else if(window.sceneNumber == otikawa_modoru){
    drawSceneNumbersinai_modoru();
  }
  else if(window.sceneNumber == otikawa1){
    //落川路線
    drawSceneNumberotikawa1();
  }
  else if(window.sceneNumber == otikawa2){
    //落川路線
    drawSceneNumberotikawa2();
  }
  else if(window.sceneNumber == otikawa3){
    //落川路線
    drawSceneNumberotikawa3();
  }
  else if(window.sceneNumber == otikawa_sakurasyako1){
    //落川路線
    drawSceneNumberotikawa_sakurasyako1();
  }
  else if(window.sceneNumber == otikawa_sakurasyako2){
    //落川路線
    drawSceneNumberotikawa_sakurasyako2();
  }
  else if(window.sceneNumber == otikawa_mogusa1){
    //落川路線
    drawSceneNumberotikawa_mogusa1();
  }
  else if(window.sceneNumber == otikawa_mogusa2){
    //落川路線
    drawSceneNumberotikawa_mogusa2();
  }
  else if(window.sceneNumber == otikawa_hoiku1){
    //落川路線
    drawSceneNumberotikawa_hoiku1();
  }
  else if(window.sceneNumber == otikawa_hoiku2){
    //落川路線
    drawSceneNumberotikawa_hoiku2();
  }
  else if(window.sceneNumber == otikawa_hoiku3){
    //落川路線
    drawSceneNumberotikawa_hoiku3();
  }
  else if(window.sceneNumber == otikawa_hoiku4){
    //落川路線
    drawSceneNumberotikawa_hoiku4();
  }
  else if(window.sceneNumber == otikawa_hoiku5){
    //落川路線
    drawSceneNumberotikawa_hoiku5();
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

function drawSceneNumbersinai_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_sentaku,0,0);
}

function drawSceneNumbersinai_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_modoru,0,0);
}

function drawSceneNumbersinai_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_nai,0,0);
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

function drawSceneNumbersinai_furusato1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_furusato1,0,0);
}

function drawSceneNumbersinai_furusato2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_furusato2,0,0);
}

function drawSceneNumbersinai_honmati1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati1,0,0);
}

function drawSceneNumbersinai_honmati2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati2,0,0);
}

function drawSceneNumbersinai_honmati3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati3,0,0);
}

function drawSceneNumbersinai_honmati4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati4,0,0);
}

function drawSceneNumbersinai_honmati5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati5,0,0);
}

function drawSceneNumbersinai_honmati6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati6,0,0);
}

function drawSceneNumbersinai_honmati7(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati7,0,0);
}

function drawSceneNumbersinai_honmati8(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_honmati8,0,0);
}

function drawSceneNumbersinai_mangan1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_mangan1,0,0);
}

function drawSceneNumbersinai_mangan2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(sinai_mangan2,0,0);
}

function drawSceneNumberminami1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami1,0,0);
}

function drawSceneNumbermisawa_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_sentaku,0,0);
}

function drawSceneNumbermisawa_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_modoru,0,0);
}

function drawSceneNumbermisawa_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_nai,0,0);
}

function drawSceneNumbermisawa1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa1,0,0);
}

function drawSceneNumbermisawa2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa2,0,0);
}

function drawSceneNumbermisawa3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa3,0,0);
}

function drawSceneNumbermisawa4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa4,0,0);
}

function drawSceneNumbermisawa_ichi1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_ichi1,0,0);
}

function drawSceneNumbermisawa_ichi2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_ichi2,0,0);
}

function drawSceneNumbermisawa_sakura1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_sakura1,0,0);
}

function drawSceneNumbermisawa_sakura2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_sakura2,0,0);
}

function drawSceneNumbermisawa_seiseki1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_seiseki1,0,0);
}

function drawSceneNumbermisawa_seiseki2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_seiseki2,0,0);
}

function drawSceneNumbermisawa_takahata1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_takahata1,0,0);
}

function drawSceneNumbermisawa_takahata2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(misawa_takahata2,0,0);
}

function drawSceneNumberasahi1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi1,0,0);
}

function drawSceneNumberasahi2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi2,0,0);
}

function drawSceneNumberasahi3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi3,0,0);
}

function drawSceneNumberasahi4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi4,0,0);
}

function drawSceneNumberasahi_asahi1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi1,0,0);
}

function drawSceneNumberasahi_asahi2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi2,0,0);
}

function drawSceneNumberasahi_asahi3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi3,0,0);
}

function drawSceneNumberasahi_asahi4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi4,0,0);
}

function drawSceneNumberasahi_asahi5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi5,0,0);
}

function drawSceneNumberasahi_asahi6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi6,0,0);
}

function drawSceneNumberasahi_asahi7(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi7,0,0);
}

function drawSceneNumberasahi_asahi8(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_asahi8,0,0);
}

function drawSceneNumberasahi_syuto1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_syuto1,0,0);
}

function drawSceneNumberasahi_syuto2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_syuto2,0,0);
}

function drawSceneNumberasahi_syuto3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_syuto3,0,0);
}

function drawSceneNumberasahi_syuto4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_syuto4,0,0);
}

function drawSceneNumberasahi_syuto5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_syuto5,0,0);
}

function drawSceneNumberasahi_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_sentaku,0,0);
}

function drawSceneNumberasahi_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_modoru,0,0);
}

function drawSceneNumberasahi_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(asahi_nai,0,0);
}

function drawSceneNumberotikawa_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_sentaku,0,0);
}

function drawSceneNumberotikawa_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_modoru,0,0);
}

function drawSceneNumberotikawa_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_nai,0,0);
}

function drawSceneNumberotikawa1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa1,0,0);
}

function drawSceneNumberotikawa2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa2,0,0);
}

function drawSceneNumberotikawa3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa3,0,0);
}

function drawSceneNumberotikawa_hoiku1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_hoiku1,0,0);
}

function drawSceneNumberotikawa_hoiku2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_hoiku2,0,0);
}

function drawSceneNumberotikawa_hoiku3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_hoiku3,0,0);
}

function drawSceneNumberotikawa_hoiku4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_hoiku4,0,0);
}

function drawSceneNumberotikawa_hoiku5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_hoiku5,0,0);
}

function drawSceneNumberotikawa_sakurasyako1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_sakurasyako1,0,0);
}

function drawSceneNumberotikawa_sakurasyako2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_sakurasyako2,0,0);
}

function drawSceneNumberotikawa_mogusa1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_mogusa1,0,0);
}

function drawSceneNumberotikawa_mogusa2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(otikawa_mogusa2,0,0);
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
  if(mouseX>211&&mouseX<413&&mouseY>263&&mouseY<364&&window.sceneNumber==0){
  window.sceneNumber=1;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==1){
  window.sceneNumber=2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==2){
  window.sceneNumber=3;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==3){
  window.sceneNumber=sinai1;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==3){
  window.sceneNumber=minami1;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==3){
  window.sceneNumber=misawa1;
  }
  else if(mouseX>456&&mouseX<538&&mouseY>30&&mouseY<137&&window.sceneNumber==3){
  window.sceneNumber=asahi1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==3){
  window.sceneNumber=otikawa1;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==3){
  window.sceneNumber=hirayama1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==3){
  window.sceneNumber=kawabe1;
  }
  //市内路線全体ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //ここから市内のバス停一覧---------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai1){
  window.sceneNumber=sinai2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai4;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai5;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai2;
  }
  //市内の未開拓地---------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai2){
  window.sceneNumber=sinai_nai;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_furusato1;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai3){
  window.sceneNumber=sinai_nai;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_honmati1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_furusato1;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_mangan1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==sinai4){
  window.sceneNumber=sinai_nai;
  }
  //4page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai_nai;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_nai){
  window.sceneNumber=sinai2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_nai){
  window.sceneNumber=sinai2;
  }
  //ここから市内の情報ありスポット---------------------------------------------------------------------------
  //日野市役所
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_furusato1){
  window.sceneNumber=sinai_furusato2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_furusato2){
  window.sceneNumber=sinai_sentaku;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_sentaku){
  window.sceneNumber=sinai2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_sentaku){
  window.sceneNumber=sinai_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_modoru){
  window.sceneNumber=sinai2;
  }
  //万願寺
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_mangan1){
  window.sceneNumber=sinai_mangan2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_mangan2){
  window.sceneNumber=sinai_sentaku;
  }
  //日野本町
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati1){
  window.sceneNumber=sinai_honmati2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati2){
  window.sceneNumber=sinai_honmati3;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_honmati3){
  window.sceneNumber=sinai_honmati4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_honmati3){
  window.sceneNumber=sinai_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati4){
  window.sceneNumber=sinai_honmati5;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati5){
  window.sceneNumber=sinai_honmati6;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_honmati6){
  window.sceneNumber=sinai_honmati7;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==sinai_honmati6){
  window.sceneNumber=sinai_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati7){
  window.sceneNumber=sinai_honmati8;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==sinai_honmati8){
  window.sceneNumber=sinai_modoru;
  }
  //市内路線全体ここまで～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //落川路線全体ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //落川路線のバス停一覧ここから--------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa1){
  window.sceneNumber=otikawa2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa2;
  }
  //落川の未開拓地----------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_sakurasyako1;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_mogusa1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa2){
  window.sceneNumber=otikawa_nai;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_hoiku1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==otikawa3){
  window.sceneNumber=otikawa_nai;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_nai){
  window.sceneNumber=otikawa2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_nai){
  window.sceneNumber=otikawa2;
  }
  //情報アリ-------------------------------------------------------------------------------------------
  //桜ヶ丘車庫
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_sakurasyako1){
  window.sceneNumber=otikawa_sakurasyako2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_sakurasyako2){
  window.sceneNumber=otikawa_sentaku;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_sentaku){
  window.sceneNumber=otikawa2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_sentaku){
  window.sceneNumber=otikawa_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_modoru){
  window.sceneNumber=otikawa2;
  }
  //百草園
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_mogusa1){
  window.sceneNumber=otikawa_mogusa2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_mogusa2){
  window.sceneNumber=otikawa_sentaku;
  }
  //保育園北
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_hoiku1){
  window.sceneNumber=otikawa_hoiku2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_hoiku2){
  window.sceneNumber=otikawa_hoiku3;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_hoiku3){
  window.sceneNumber=otikawa_hoiku4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==otikawa_hoiku3){
  window.sceneNumber=otikawa_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_hoiku4){
  window.sceneNumber=otikawa_hoiku5;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==otikawa_hoiku5){
  window.sceneNumber=otikawa_sentaku;
  }
  //落川全体終わり～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //旭が丘循環路線全体ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //バス停------------------------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi1){
  window.sceneNumber=asahi2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi4;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==asahi4){
  window.sceneNumber=asahi2;
  }
  //未開拓ここから------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_asahi1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_syuto1;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi2){
  window.sceneNumber=asahi_nai;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==asahi3){
  window.sceneNumber=asahi_nai;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi4){
  window.sceneNumber=asahi_nai;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_nai){
  window.sceneNumber=asahi2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_nai){
  window.sceneNumber=asahi2;
  }
  //情報アリスポット-----------------------------------------------------------------------------
  //旭が丘
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi1){
  window.sceneNumber=asahi_asahi2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi2){
  window.sceneNumber=asahi_asahi3;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_asahi3){
  window.sceneNumber=asahi_asahi4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_asahi3){
  window.sceneNumber=asahi_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi4){
  window.sceneNumber=asahi_asahi5;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi5){
  window.sceneNumber=asahi_asahi6;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_asahi6){
  window.sceneNumber=asahi_asahi7;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_asahi6){
  window.sceneNumber=asahi_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi7){
  window.sceneNumber=asahi_asahi8;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_asahi8){
  window.sceneNumber=asahi_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_modoru){
  window.sceneNumber=asahi2;
  }
  //首都大前
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_syuto1){
  window.sceneNumber=asahi_syuto2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_syuto2){
  window.sceneNumber=asahi_syuto3;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_syuto3){
  window.sceneNumber=asahi_syuto4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_syuto3){
  window.sceneNumber=asahi_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_syuto4){
  window.sceneNumber=asahi_syuto5;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==asahi_syuto5){
  window.sceneNumber=asahi_sentaku;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_sentaku){
  window.sceneNumber=asahi2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==asahi_sentaku){
  window.sceneNumber=asahi_modoru;
  }
  //旭が丘循環全部ここまで～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //ここから三沢台全体～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //バス停----------------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa1){
  window.sceneNumber=misawa2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa4;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa2;
  }
  //未開拓---------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_seiseki1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_sakura1;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_ichi1;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa2){
  window.sceneNumber=misawa_nai;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa3){
  window.sceneNumber=misawa_nai;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==misawa4){
  window.sceneNumber=misawa_takahata1;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==misawa_nai){
  window.sceneNumber=misawa2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==misawa_nai){
  window.sceneNumber=misawa2;
  }
  //一宮
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_ichi1){
  window.sceneNumber=misawa_ichi2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_ichi2){
  window.sceneNumber=misawa_sentaku;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==misawa_sentaku){
  window.sceneNumber=misawa2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==misawa_sentaku){
  window.sceneNumber=misawa_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_modoru){
  window.sceneNumber=misawa2;
  }
  //聖蹟桜ヶ丘
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_seiseki1){
  window.sceneNumber=misawa_seiseki2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_seiseki2){
  window.sceneNumber=misawa_sentaku;
  }
  //桜ヶ丘
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_sakura1){
  window.sceneNumber=misawa_sakura2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_sakura2){
  window.sceneNumber=misawa_sentaku;
  }
  //高幡不動
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_takahata1){
  window.sceneNumber=misawa_takahata2;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==misawa_takahata2){
  window.sceneNumber=misawa_sentaku;
  }
}
