// display_marker.js

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.670511, lng:139.400045},
    // ズームレベル
    zoom: 14
  };

  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

  // 日野キャンパス1号館にマーカを表示するためのパラメータのconstオブジェクト

  // 同様にコンストラクタが実行されると表示される

  const kmlLayerElements = {
      // KMLファイルのURL
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/siei.kml',
      // インターネットから探せるサーバ上においておき，そのURLを記述する．
      //ルートの場合関係ないが，レイヤ上のオブジェクトの方がInfoWindowよりも上にくる（抑制する）
      suppressInfoWindows: true,
      // 地図オブジェクト
      map: myMap
    };
    // KMLを表示するためのレイヤーのコンストラクタを実行する．
    // これを実行すると，Googleのシステムが上記KMLファイルを読み込んで来て，表示してくれる
    // もちろん複数作ることもできる．
    const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);


    const MarkerElement = new Array();
    const Marker = new Array();

    // 日野キャンパス1号館にマーカを表示するためのパラメータのconstオブジェクト
    MarkerElement[0] = {
      // 1号館の緯度経度
      position: {lat:35.670039, lng:139.419473},
      // どのマップオブジェクトに表示するか
      map: myMap
    };
    // マーカのコンストラクタに，先に定義したマーカのパラメータのオブジェクトを食わせて
    // オブジェクトを取り出す

    MarkerElement[1] = {
      // 1号館の緯度経度
      position: {lat:35.680146, lng:139.397152},
      // どのマップオブジェクトに表示するか
      map: myMap
    };

    MarkerElement[2] = {
      // 1号館の緯度経度
      position: {lat:35.677395, lng:139.399853},
      // どのマップオブジェクトに表示するか
      map: myMap
    };

    MarkerElement[3] = {
      // 1号館の緯度経度
      position: {lat:35.673531, lng:139.396519},
      // どのマップオブジェクトに表示するか
      map: myMap
    };

    MarkerElement[4] = {
      // 1号館の緯度経度
      position: {lat:35.678115, lng:139.399633},
      // どのマップオブジェクトに表示するか
      map: myMap
    };

    for(i=0;i<=4;i++){
    Marker[i] =
      new google.maps.Marker(MarkerElement[i]);
    // 同様にコンストラクタが実行されると表示される
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

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
