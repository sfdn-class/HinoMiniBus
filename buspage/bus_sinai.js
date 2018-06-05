// display_marker.js

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始

//市内路線MAP－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

  const mapElement_sinai = {
    center: {lat:35.670511, lng:139.400045},
    zoom: 14
  };

  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement_sinai);

  const kmlLayerElements = {
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/siei.kml',
      suppressInfoWindows: true,
      map: myMap
    };

    const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);


    const MarkerElement = new Array();
    const Marker = new Array();

    MarkerElement[0] = {
      position: {lat:35.670039, lng:139.419473},
      map: myMap
    };

    MarkerElement[1] = {
      position: {lat:35.680146, lng:139.397152},
      map: myMap
    };

    MarkerElement[2] = {
      position: {lat:35.677395, lng:139.399853},
      map: myMap
    };

    MarkerElement[3] = {
      position: {lat:35.673531, lng:139.396519},
      map: myMap
    };

    MarkerElement[4] = {
      position: {lat:35.678115, lng:139.399633},
      map: myMap
    };

    for(i=0;i<=4;i++){
    Marker[i] =
      new google.maps.Marker(MarkerElement[i]);
  }



  const BusStop = new Array();
  const BusStopMarker = new Array();

 BusStop[0]={
  position:{lat:35.660092, lng:139.381289},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[1]={
  position:{lat:35.662248, lng:139.379689},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[2]={
  position:{lat:35.663745, lng:139.379165},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[3]={
  position:{lat:35.667109, lng:139.377534},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[4]={
  position:{lat:35.667320, lng:139.378765},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[5]={
  position:{lat:35.667741, lng:139.380369},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[6]={
  position:{lat:35.668074, lng:139.383070},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[7]={
  position:{lat:35.668420, lng:139.385749},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[8]={
  position:{lat:35.668917, lng:139.389528},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[9]={
  position:{lat:35.668900, lng:139.391499},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[10]={
  position:{lat:35.668795, lng:139.394390},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[11]={
  position:{lat:35.671026, lng:139.394788},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[12]={
  position:{lat:35.673262, lng:139.388836},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[13]={
  position:{lat:35.674975, lng:139.388753},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[14]={
  position:{lat:35.676491, lng:139.390789},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[15]={
  position:{lat:35.679114, lng:139.393147},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[16]={
  position:{lat:35.678831, lng:139.398204},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[17]={
  position:{lat:35.676086, lng:139.400658},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[18]={
  position:{lat:35.674991, lng:139.403928},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[19]={
  position:{lat:35.675031, lng:139.409046},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[20]={
  position:{lat:35.676312, lng:139.412467},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[21]={
  position:{lat:35.673856, lng:139.416387},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[22]={
  position:{lat:35.671375, lng:139.419922},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[23]={
  position:{lat:35.669207, lng:139.420730},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[24]={
  position:{lat:35.665282, lng:139.418627},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[25]={
  position:{lat:35.661693, lng:139.413192},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[26]={
  position:{lat:35.673383, lng:139.414297},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[27]={
  position:{lat:35.674428, lng:139.409219},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[28]={
  position:{lat:35.674494, lng:139.403750},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

BusStop[29]={
  position:{lat:35.672560, lng:139.389837},
  icon: {
    fillColor: "#0000ff",                //塗り潰し色
    fillOpacity: 1,                    //塗り潰し透過率
    path: google.maps.SymbolPath.CIRCLE, //円を指定
    scale: 5,                           //円のサイズ
    strokeColor: "#ffffff",              //枠の色
    strokeWeight: 1.0                    //枠の透過率
  },
  map:myMap
};

for(i=0;i<=29;i++){

  BusStopMarker[i] =
    new google.maps.Marker(BusStop[i]);

}

const InfoWindowElement = new Array();
const InfoWindow = new Array();
window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content:
      '<p><b>土方歳三資料館</b></p><p>土方歳三について知るならココ！</p><p><img src="img/sinai/hizikata2.jpg"width="220px" height="160px"/></p>'
    };
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>井上源三郎資料館</b></p><p>新撰組六番隊隊長井上源三郎についてがわかる！</p><p><img src="img/sinai/inoue1.jpg"width="220px" height="160px"/></p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>佐藤彦五郎新選組資料館</b></p><p>日野宿名主を努めた佐藤彦五郎の新撰組の資料が見られる資料館</p><p><img src="img/sinai/satou1.jpg"width="220px" height="160px"/></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>日野市立新選組のふるさと歴史館</b></p><p>新撰組の誕生を感じられる歴史観</p><p><img src="img/sinai/furusato2.jpg"width="220px" height="160px"/></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  InfoWindowElement[4] =
    {content: '<p><b>日野宿本陣</b></p><p>都内で唯一残る江戸時代に建てられた本陣建物！</p><p><img src="img/sinai/hinozyuku1.jpg"width="220px" height="160px"/></p>'};
  InfoWindow[4] = new google.maps.InfoWindow(InfoWindowElement[4]);

  for(i=0;i<=4;i++){
    window.infoWindowArray.push(InfoWindow[i]);
  }

  Marker[0].addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      InfoWindow[0].open(myMap, Marker[0]);
    }
  );

  Marker[1].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[1].open(myMap, Marker[1]);
  });

  Marker[2].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[2].open(myMap, Marker[2]);
  });

  Marker[3].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[3].open(myMap, Marker[3]);
  });

  Marker[4].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[4].open(myMap, Marker[4]);
  });

//市内路線MAPここまで－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
