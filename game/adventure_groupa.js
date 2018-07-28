window.canvas;
window.sceneNumber = 0;

var gazou0;
var gazou1;
var gazou2;
var gazou3;
var gazou4;
var gazou5;
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
var minami2;
var minami3;
var minami4;
var minami5;
var minami_sentaku;
var minami_modoru;
var minami_nai;
var minami_higasi1;
var minami_higasi2;
var minami_higasi3;
var minami_higasi4;
var minami_higasi5;
var minami_higasi6;
var minami_kita1;
var minami_kita2;
var minami_kita3;
var minami_minami1;
var minami_minami2;
var minami_minami3;
var minami_minamidai1;
var minami_minamidai2;
var minami_minamidai3;
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
var hirayana2;
var hirayama3;
var hirayama4;
var hirayama_sentaku;
var hirayama_modoru;
var hirayama0;
var hirayama_tyoume1;
var hirayama_tyoume2;
var hirayama_tyoume3;
var hirayama_tyoume4;
var hirayama_tyoume5;
var hirayama_tyoume6;
var hirayama_tyoume7;
var hirayama_tyoume8;
var hirayama_tyoume9;
var hirayama_hirayama1;
var hirayama_hirayama2;
var hirayama_hirayama3;
//川辺---------------------------------
var kawabe1;
var kawabe2;
var kawabe3;
var kawabe_sentaku;
var kawabe_modoru;
var kawabe_nai;
var kawabe_hori1;
var kawabe_hori2;
var kawabe_hori3;
var kawabe_hino1;
var kawabe_hino2;
var kawabe_hino3;
var kawabe_itiban1;
var kawabe_itiban2;
var kawabe_itiban3;
var kawabe_itiban4;
var kawabe_itiban5;
var kawabe_itiban6;


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
    gazou4=loadImage("game/kyotsu/saigo.png");
    gazou5=loadImage("game/kyotsu/saigo2.png");
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
    minami_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    minami_modoru=loadImage("game/kyotsu/bus_modoru.png");
    minami_nai=loadImage("game/kyotsu/game5.png");
    hirayama_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    hirayama_modoru=loadImage("game/kyotsu/bus_modoru.png");
    hirayama0=loadImage("game/kyotsu/game5.png");
    kawabe_sentaku=loadImage("game/kyotsu/game_zyouhou.png");
    kawabe_modoru=loadImage("game/kyotsu/bus_modoru.png");
    kawabe_nai=loadImage("game/kyotsu/game5.png");
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
    minami1=loadImage("game/minami/1.png");
    minami2=loadImage("game/minami/minamidaira1.png");
    minami3=loadImage("game/minami/minamidaira2.png");
    minami4=loadImage("game/minami/minamidaira3.png");
    minami5=loadImage("game/minami/minamidaira4.png");
    minami_higasi1=loadImage("game/minami/higashitoyoda1_1.png");
    minami_higasi2=loadImage("game/minami/higashitoyoda1_2.png");
    minami_higasi3=loadImage("game/minami/higashitoyoda1_3.png");
    minami_higasi4=loadImage("game/minami/higashitoyoda2_1.png");
    minami_higasi5=loadImage("game/minami/higashitoyoda2_2.png");
    minami_higasi6=loadImage("game/minami/higashitoyoda2_3.png");
    minami_kita1=loadImage("game/minami/kitanokaidou1.png");
    minami_kita2=loadImage("game/minami/kitanokaidou2.png");
    minami_kita3=loadImage("game/minami/kitanokaidou3.png");
    minami_minami1=loadImage("game/minami/minamidaira1tyoume1.png");
    minami_minami2=loadImage("game/minami/minamidaira1tyoume2.png");
    minami_minami3=loadImage("game/minami/minamidaira1tyoume3.png");
    minami_minamidai1=loadImage("game/minami/minamidairadai1.png");
    minami_minamidai2=loadImage("game/minami/minamidairadai2.png");
    minami_minamidai3=loadImage("game/minami/minamidairadai3.png");
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
    hirayama1=loadImage("game/hirayama/1.png");
    hirayama2=loadImage("game/hirayama/hirayama1.png");
    hirayama3=loadImage("game/hirayama/hirayama2.png");
    hirayama4=loadImage("game/hirayama/hirayama3.png");
    hirayama_tyoume1=loadImage("game/hirayama/hirayama1tyoume1_1.png");
    hirayama_tyoume2=loadImage("game/hirayama/hirayama1tyoume1_2.png");
    hirayama_tyoume3=loadImage("game/hirayama/hirayama1tyoume1_3.png");
    hirayama_tyoume4=loadImage("game/hirayama/hirayama1tyoume2_1.png");
    hirayama_tyoume5=loadImage("game/hirayama/hirayama1tyoume2_2.png");
    hirayama_tyoume6=loadImage("game/hirayama/hirayama1tyoume2_3.png");
    hirayama_tyoume7=loadImage("game/hirayama/hirayama1tyoume3_1.png");
    hirayama_tyoume8=loadImage("game/hirayama/hirayama1tyoume3_2.png");
    hirayama_tyoume9=loadImage("game/hirayama/hirayama1tyoume3_3.png");
    hirayama_hirayama1=loadImage("game/hirayama/hirayamakenkosiminsiensenta1.png");
    hirayama_hirayama2=loadImage("game/hirayama/hirayamakenkosiminsiensenta2.png");
    hirayama_hirayama3=loadImage("game/hirayama/hirayamakenkosiminsiensenta3.png");
    //川辺----------------------------------------------------------------------
    kawabe1=loadImage("game/kawabe/1.png");
    kawabe2=loadImage("game/kawabe/kawabe1.png");
    kawabe3=loadImage("game/kawabe/kawabe2.png");
    kawabe_hori1=loadImage("game/kawabe/horinouchiryokudou1.png");
    kawabe_hori2=loadImage("game/kawabe/horinouchiryokudou2.png");
    kawabe_hori3=loadImage("game/kawabe/horinouchiryokudou3.png");
    kawabe_hino1=loadImage("game/kawabe/hinosiminpuru1.png");
    kawabe_hino2=loadImage("game/kawabe/hinosiminpuru2.png");
    kawabe_hino3=loadImage("game/kawabe/hinosiminpuru3.png");
    kawabe_itiban1=loadImage("game/kawabe/itibannhashi1_1.png");
    kawabe_itiban2=loadImage("game/kawabe/itibannhashi1_2.png");
    kawabe_itiban3=loadImage("game/kawabe/itibannhashi1_3.png");
    kawabe_itiban4=loadImage("game/kawabe/itibannhashi2_1.png");
    kawabe_itiban5=loadImage("game/kawabe/itibannhashi2_2.png");
    kawabe_itiban6=loadImage("game/kawabe/itibannhashi2_3.png");

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
  else if(window.sceneNumber==4){
    drawSceneNumber4();
  }
  else if(window.sceneNumber==5){
    drawSceneNumber5();
  }
  //市内-------------------------------------------------------------------------------
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
  //南平-------------------------------------------------------------------------------
  else if(window.sceneNumber == minami_sentaku){
    //南平路線
    drawSceneNumberminami_sentaku();
  }
  else if(window.sceneNumber == minami_modoru){
    //南平路線
    drawSceneNumberminami_modoru();
  }
  else if(window.sceneNumber == minami_nai){
    //南平路線
    drawSceneNumberminami_nai();
  }
  else if(window.sceneNumber == minami1){
    //南平路線
    drawSceneNumberminami1();
  }
  else if(window.sceneNumber == minami2){
    //南平路線
    drawSceneNumberminami2();
  }
  else if(window.sceneNumber == minami3){
    //南平路線
    drawSceneNumberminami3();
  }
  else if(window.sceneNumber == minami4){
    //南平路線
    drawSceneNumberminami4();
  }
  else if(window.sceneNumber == minami5){
    //南平路線
    drawSceneNumberminami5();
  }
  else if(window.sceneNumber == minami_higasi1){
    //南平路線
    drawSceneNumberminami_higasi1();
  }
  else if(window.sceneNumber == minami_higasi2){
    //南平路線
    drawSceneNumberminami_higasi2();
  }
  else if(window.sceneNumber == minami_higasi3){
    //南平路線
    drawSceneNumberminami_higasi3();
  }
  else if(window.sceneNumber == minami_higasi4){
    //南平路線
    drawSceneNumberminami_higasi4();
  }
  else if(window.sceneNumber == minami_higasi5){
    //南平路線
    drawSceneNumberminami_higasi5();
  }
  else if(window.sceneNumber == minami_higasi6){
    //南平路線
    drawSceneNumberminami_higasi6();
  }
  else if(window.sceneNumber == minami_kita1){
    //南平路線
    drawSceneNumberminami_kita1();
  }
  else if(window.sceneNumber == minami_kita2){
    //南平路線
    drawSceneNumberminami_kita2();
  }
  else if(window.sceneNumber == minami_kita3){
    //南平路線
    drawSceneNumberminami_kita3();
  }
  else if(window.sceneNumber == minami_minami1){
    //南平路線
    drawSceneNumberminami_minami1();
  }
  else if(window.sceneNumber == minami_minami2){
    //南平路線
    drawSceneNumberminami_minami2();
  }
  else if(window.sceneNumber == minami_minami3){
    //南平路線
    drawSceneNumberminami_minami3();
  }
  else if(window.sceneNumber == minami_minamidai1){
    //南平路線
    drawSceneNumberminami_minamidai1();
  }
  else if(window.sceneNumber == minami_minamidai2){
    //南平路線
    drawSceneNumberminami_minamidai2();
  }
  else if(window.sceneNumber == minami_minamidai3){
    //南平路線
    drawSceneNumberminami_minamidai3();
  }
  //三沢台--------------------------------------------------------------------------------
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
  //旭が丘---------------------------------------------------------------------------------
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
  //落川--------------------------------------------------------------------------------
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
  //平山-------------------------------------------------------------------------------------
  else if(window.sceneNumber == hirayama1){
    //平山路線
    drawSceneNumberhirayama1();
  }
  else if(window.sceneNumber == hirayama2){
    //平山路線
    drawSceneNumberhirayama2();
  }
  else if(window.sceneNumber == hirayama3){
    //平山路線
    drawSceneNumberhirayama3();
  }
  else if(window.sceneNumber == hirayama4){
    //平山路線
    drawSceneNumberhirayama4();
  }
  else if(window.sceneNumber == hirayama_sentaku){
    //平山路線
    drawSceneNumberhirayama_sentaku();
  }
  else if(window.sceneNumber == hirayama_modoru){
    //平山路線
    drawSceneNumberhirayama_modoru();
  }
  else if(window.sceneNumber == hirayama0){
    //平山路線
    drawSceneNumberhirayama0();
  }
  else if(window.sceneNumber == hirayama_tyoume1){
    //平山路線
    drawSceneNumberhirayama_tyoume1();
  }
  else if(window.sceneNumber == hirayama_tyoume2){
    //平山路線
    drawSceneNumberhirayama_tyoume2();
  }
  else if(window.sceneNumber == hirayama_tyoume3){
    //平山路線
    drawSceneNumberhirayama_tyoume3();
  }
  else if(window.sceneNumber == hirayama_tyoume4){
    //平山路線
    drawSceneNumberhirayama_tyoume4();
  }
  else if(window.sceneNumber == hirayama_tyoume5){
    //平山路線
    drawSceneNumberhirayama_tyoume5();
  }
  else if(window.sceneNumber == hirayama_tyoume6){
    //平山路線
    drawSceneNumberhirayama_tyoume6();
  }
  else if(window.sceneNumber == hirayama_tyoume7){
    //平山路線
    drawSceneNumberhirayama_tyoume7();
  }
  else if(window.sceneNumber == hirayama_tyoume8){
    //平山路線
    drawSceneNumberhirayama_tyoume8();
  }
  else if(window.sceneNumber == hirayama_tyoume9){
    //平山路線
    drawSceneNumberhirayama_tyoume9();
  }
  else if(window.sceneNumber == hirayama_hirayama1){
    //平山路線
    drawSceneNumberhirayama_hirayama1();
  }
  else if(window.sceneNumber == hirayama_hirayama2){
    //平山路線
    drawSceneNumberhirayama_hirayama2();
  }
  else if(window.sceneNumber == hirayama_hirayama3){
    //平山路線
    drawSceneNumberhirayama_hirayama3();
  }
  //川辺---------------------------------------------------------------------------------------
  else if(window.sceneNumber == kawabe1){
    //川辺堀之内路線
    drawSceneNumberkawabe1();
  }
  else if(window.sceneNumber == kawabe2){
    //川辺堀之内路線
    drawSceneNumberkawabe2();
  }
  else if(window.sceneNumber == kawabe3){
    //川辺堀之内路線
    drawSceneNumberkawabe3();
  }
  else if(window.sceneNumber == kawabe_sentaku){
    //川辺堀之内路線
    drawSceneNumberkawabe_sentaku();
  }
  else if(window.sceneNumber == kawabe_modoru){
    //川辺堀之内路線
    drawSceneNumberkawabe_modoru();
  }
  else if(window.sceneNumber == kawabe_nai){
    //川辺堀之内路線
    drawSceneNumberkawabe_nai();
  }
  else if(window.sceneNumber == kawabe_hori1){
    //川辺堀之内路線
    drawSceneNumberkawabe_hori1();
  }
  else if(window.sceneNumber == kawabe_hori2){
    //川辺堀之内路線
    drawSceneNumberkawabe_hori2();
  }
  else if(window.sceneNumber == kawabe_hori3){
    //川辺堀之内路線
    drawSceneNumberkawabe_hori3();
  }
  else if(window.sceneNumber == kawabe_hino1){
    //川辺堀之内路線
    drawSceneNumberkawabe_hino1();
  }
  else if(window.sceneNumber == kawabe_hino2){
    //川辺堀之内路線
    drawSceneNumberkawabe_hino2();
  }
  else if(window.sceneNumber == kawabe_hino3){
    //川辺堀之内路線
    drawSceneNumberkawabe_hino3();
  }
  else if(window.sceneNumber == kawabe_itiban1){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban1();
  }
  else if(window.sceneNumber == kawabe_itiban2){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban2();
  }
  else if(window.sceneNumber == kawabe_itiban3){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban3();
  }
  else if(window.sceneNumber == kawabe_itiban4){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban4();
  }
  else if(window.sceneNumber == kawabe_itiban5){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban5();
  }
  else if(window.sceneNumber == kawabe_itiban6){
    //川辺堀之内路線
    drawSceneNumberkawabe_itiban6();
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

function drawSceneNumber4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou4,0,0);
}

function drawSceneNumber5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(gazou5,0,0);
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

function drawSceneNumberminami2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami2,0,0);
}

function drawSceneNumberminami3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami3,0,0);
}

function drawSceneNumberminami4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami4,0,0);
}

function drawSceneNumberminami5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami5,0,0);
}

function drawSceneNumberminami_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_sentaku,0,0);
}

function drawSceneNumberminami_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_modoru,0,0);
}

function drawSceneNumberminami_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_nai,0,0);
}

function drawSceneNumberminami_higasi1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi1,0,0);
}

function drawSceneNumberminami_higasi2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi2,0,0);
}

function drawSceneNumberminami_higasi3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi3,0,0);
}

function drawSceneNumberminami_higasi4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi4,0,0);
}

function drawSceneNumberminami_higasi5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi5,0,0);
}

function drawSceneNumberminami_higasi6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_higasi6,0,0);
}

function drawSceneNumberminami_kita1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_kita1,0,0);
}

function drawSceneNumberminami_kita2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_kita2,0,0);
}

function drawSceneNumberminami_kita3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_kita3,0,0);
}

function drawSceneNumberminami_minami1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minami1,0,0);
}

function drawSceneNumberminami_minami2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minami2,0,0);
}

function drawSceneNumberminami_minami3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minami3,0,0);
}

function drawSceneNumberminami_minamidai1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minamidai1,0,0);
}

function drawSceneNumberminami_minamidai2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minamidai2,0,0);
}

function drawSceneNumberminami_minamidai3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(minami_minamidai3,0,0);
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

function drawSceneNumberhirayama_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_sentaku,0,0);
}

function drawSceneNumberhirayama_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_modoru,0,0);
}

function drawSceneNumberhirayama0(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama0,0,0);
}

function drawSceneNumberhirayama1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama1,0,0);
}

function drawSceneNumberhirayama2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama2,0,0);
}

function drawSceneNumberhirayama3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama3,0,0);
}

function drawSceneNumberhirayama4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama4,0,0);
}

function drawSceneNumberhirayama_tyoume1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume1,0,0);
}

function drawSceneNumberhirayama_tyoume2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume2,0,0);
}

function drawSceneNumberhirayama_tyoume3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume3,0,0);
}

function drawSceneNumberhirayama_tyoume4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume4,0,0);
}

function drawSceneNumberhirayama_tyoume5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume5,0,0);
}

function drawSceneNumberhirayama_tyoume6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume6,0,0);
}

function drawSceneNumberhirayama_tyoume7(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume7,0,0);
}

function drawSceneNumberhirayama_tyoume8(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume8,0,0);
}

function drawSceneNumberhirayama_tyoume9(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_tyoume9,0,0);
}

function drawSceneNumberhirayama_hirayama1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_hirayama1,0,0);
}

function drawSceneNumberhirayama_hirayama2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_hirayama2,0,0);
}

function drawSceneNumberhirayama_hirayama3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(hirayama_hirayama3,0,0);
}

function drawSceneNumberkawabe1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe1,0,0);
}

function drawSceneNumberkawabe2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe2,0,0);
}

function drawSceneNumberkawabe3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe3,0,0);
}

function drawSceneNumberkawabe_sentaku(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_sentaku,0,0);
}

function drawSceneNumberkawabe_modoru(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_modoru,0,0);
}

function drawSceneNumberkawabe_nai(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_nai,0,0);
}

function drawSceneNumberkawabe_itiban1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban1,0,0);
}

function drawSceneNumberkawabe_itiban2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban2,0,0);
}

function drawSceneNumberkawabe_itiban3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban3,0,0);
}

function drawSceneNumberkawabe_itiban4(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban4,0,0);
}

function drawSceneNumberkawabe_itiban5(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban5,0,0);
}

function drawSceneNumberkawabe_itiban6(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_itiban6,0,0);
}

function drawSceneNumberkawabe_hori1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hori1,0,0);
}

function drawSceneNumberkawabe_hori2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hori2,0,0);
}

function drawSceneNumberkawabe_hori3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hori3,0,0);
}

function drawSceneNumberkawabe_hino1(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hino1,0,0);
}

function drawSceneNumberkawabe_hino2(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hino2,0,0);
}

function drawSceneNumberkawabe_hino3(){
  noStroke();
  fill(255, 255, 255, 0);
  rect(0, 0, width, height);
  image(kawabe_hino3,0,0);
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
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==4){
    window.sceneNumber=5;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==5){
    window.sceneNumber=0;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==sinai2){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==sinai3){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==sinai4){
  window.sceneNumber=4;
  }
  //4page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==sinai5){
  window.sceneNumber=sinai_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==sinai5){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==otikawa2){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==otikawa3){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==asahi2){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==asahi3){
  window.sceneNumber=4;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==asahi4){
  window.sceneNumber=asahi_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==asahi4){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==misawa2){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==misawa3){
  window.sceneNumber=4;
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
  else if(mouseX>441&&mouseX<591&&mouseY>399&&mouseY<429&&window.sceneNumber==misawa4){
  window.sceneNumber=4;
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
  //三沢台全体終わり～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //バス停----------------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami1){
  window.sceneNumber=minami2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==minami2){
  window.sceneNumber=minami3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==minami3){
  window.sceneNumber=minami4;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==minami4){
  window.sceneNumber=minami5;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==minami5){
  window.sceneNumber=minami2;
  }
  //未開拓---------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==minami2){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==minami2){
  window.sceneNumber=4;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==minami3){
  window.sceneNumber=minami_higasi1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==minami3){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==minami3){
  window.sceneNumber=4;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==minami4){
  window.sceneNumber=minami_kita1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==minami4){
  window.sceneNumber=minami_minami1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==minami4){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==minami4){
  window.sceneNumber=4;
  }
  //4page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==minami5){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==minami5){
  window.sceneNumber=minami_minamidai1;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==minami5){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==minami5){
  window.sceneNumber=minami_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==minami5){
  window.sceneNumber=4;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_nai){
  window.sceneNumber=minami2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_nai){
  window.sceneNumber=minami2;
  }
  //情報アリ---------------------------------------------------------------------------------
  //東豊田
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_higasi1) {
    window.sceneNumber=minami_higasi2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_higasi2) {
    window.sceneNumber=minami_higasi3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_higasi3) {
    window.sceneNumber=minami_higasi4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_higasi3){
  window.sceneNumber=minami_modoru;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_higasi4) {
    window.sceneNumber=minami_higasi5;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_higasi5) {
    window.sceneNumber=minami_higasi6;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_higasi6) {
    window.sceneNumber=minami_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_higasi6){
  window.sceneNumber=minami_modoru;
  }
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_sentaku){
  window.sceneNumber=minami2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_sentaku){
  window.sceneNumber=minami_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_modoru){
  window.sceneNumber=minami2;
  }
  //北野
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_kita1) {
    window.sceneNumber=minami_kita2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_kita2) {
    window.sceneNumber=minami_kita3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_kita3) {
    window.sceneNumber=minami_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_kita3){
  window.sceneNumber=minami_modoru;
  }
  //南平一
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_minami1) {
    window.sceneNumber=minami_minami2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_minami2) {
    window.sceneNumber=minami_minami3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_minami3) {
    window.sceneNumber=minami_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_minami3){
  window.sceneNumber=minami_modoru;
  }
  //南平台
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_minamidai1) {
    window.sceneNumber=minami_minamidai2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==minami_minamidai2) {
    window.sceneNumber=minami_minamidai3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_minamidai3) {
    window.sceneNumber=minami_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==minami_minamidai3){
  window.sceneNumber=minami_modoru;
  }
  //南平全体ここまで～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //平山ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //バス停----------------------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama1){
  window.sceneNumber=hirayama2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama4;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama2;
  }
  //未開拓---------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama2){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==hirayama2){
  window.sceneNumber=4;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama_hirayama1;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama3){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==hirayama3){
  window.sceneNumber=4;
  }
  //3page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama_tyoume1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==hirayama4){
  window.sceneNumber=hirayama0;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==hirayama4){
  window.sceneNumber=4;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama0){
  window.sceneNumber=hirayama2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama0){
  window.sceneNumber=hirayama2;
  }
  //情報アリ---------------------------------------------------------------------------------
  //一丁目
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume1) {
    window.sceneNumber=hirayama_tyoume2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume2) {
    window.sceneNumber=hirayama_tyoume3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_tyoume3) {
    window.sceneNumber=hirayama_tyoume4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_tyoume3){
  window.sceneNumber=hirayama_modoru;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume4) {
    window.sceneNumber=hirayama_tyoume5;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume5) {
    window.sceneNumber=hirayama_tyoume6;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_tyoume6) {
    window.sceneNumber=hirayama_tyoume7;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_tyoume6){
  window.sceneNumber=hirayama_modoru;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume7) {
    window.sceneNumber=hirayama_tyoume8;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume8) {
    window.sceneNumber=hirayama_tyoume9;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_tyoume6) {
    window.sceneNumber=hirayama_tyoume7;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_tyoume9) {
    window.sceneNumber=hirayama_sentaku;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_sentaku) {
    window.sceneNumber=hirayama2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_sentaku){
  window.sceneNumber=hirayama_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_modoru){
  window.sceneNumber=hirayama2;
  }
  //平山センター
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_hirayama1) {
    window.sceneNumber=hirayama_hirayama2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==hirayama_hirayama2) {
    window.sceneNumber=hirayama_hirayama3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_hirayama3) {
    window.sceneNumber=hirayama_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==hirayama_hirayama3){
  window.sceneNumber=hirayama_modoru;
  }
  //平山ここまで～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //川辺ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
  //バス停----------------------------------------------------------------------------------
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe1){
  window.sceneNumber=kawabe2;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe3;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>360&&mouseY<389&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe2;
  }
  //未開拓---------------------------------------------------------------------------------------
  //1page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_itiban1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe2){
  window.sceneNumber=kawabe_hori1;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==kawabe2){
  window.sceneNumber=4;
  }
  //2page
  else if(mouseX>27&&mouseX<155&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_hino1;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>307&&mouseX<435&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>456&&mouseX<583&&mouseY>30&&mouseY<137&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>27&&mouseX<155&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>163&&mouseX<292&&mouseY>162&&mouseY<270&&window.sceneNumber==kawabe3){
  window.sceneNumber=kawabe_nai;
  }
  else if(mouseX>441&&mouseX<591&&mouseY>414&&mouseY<444&&window.sceneNumber==kawabe3){
  window.sceneNumber=4;
  }
  //未開拓ページ
  else if(mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_nai){
  window.sceneNumber=kawabe2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_nai){
  window.sceneNumber=kawabe2;
  }
  //一番橋
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_itiban1) {
    window.sceneNumber=kawabe_itiban2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_itiban2) {
    window.sceneNumber=kawabe_itiban3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_itiban3) {
    window.sceneNumber=kawabe_itiban4;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_itiban3){
  window.sceneNumber=kawabe_modoru;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_itiban4) {
    window.sceneNumber=kawabe_itiban5;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_itiban5) {
    window.sceneNumber=kawabe_itiban6;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_itiban6) {
    window.sceneNumber=kawabe_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_itiban6){
  window.sceneNumber=kawabe_modoru;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_sentaku) {
    window.sceneNumber=kawabe2;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_sentaku){
  window.sceneNumber=kawabe_modoru;
  }
  else if(mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_modoru){
  window.sceneNumber=kawabe2;
  }
  //堀之内
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_hori1) {
    window.sceneNumber=kawabe_hori2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_hori2) {
    window.sceneNumber=kawabe_hori3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_hori3) {
    window.sceneNumber=kawabe_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_hori3){
  window.sceneNumber=kawabe_modoru;
  }
  //日野
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_hino1) {
    window.sceneNumber=kawabe_hino2;
  }
  else if (mouseX>0&&mouseX<640&&mouseY>0&&mouseY<480&&window.sceneNumber==kawabe_hino2) {
    window.sceneNumber=kawabe_hino3;
  }
  else if (mouseX>90&&mouseX<290&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_hino3) {
    window.sceneNumber=kawabe_sentaku;
  }
  else if(mouseX>320&&mouseX<520&&mouseY>224&&mouseY<254&&window.sceneNumber==kawabe_hino3){
  window.sceneNumber=kawabe_modoru;
  }
}
