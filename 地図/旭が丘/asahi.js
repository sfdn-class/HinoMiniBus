// display_marker.js

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658905, lng:139.371699},
    // ズームレベル
    zoom: 15
  };

  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

  // 日野キャンパス1号館にマーカを表示するためのパラメータのconstオブジェクト

  const kmlLayerElements = {
      // KMLファイルのURL
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/asahigaokaroute.kml',
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
  position:{lat:35.661786, lng:139.374991},
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
  position:{lat:35.658944, lng:139.371563},
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
  position:{lat:35.660339, lng:139.368131},
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
  position:{lat:35.662852, lng:139.367336},
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
  position:{lat:35.661407, lng:139.364270},
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
  position:{lat:35.660076, lng:139.362124},
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
  position:{lat:35.658234, lng:139.359855},
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
  position:{lat:35.656940, lng:139.362244},
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
  position:{lat:35.655786, lng:139.364319},
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
  position:{lat:35.653787, lng:139.362883},
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
  position:{lat:35.656606, lng:139.363580},
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
  position:{lat:35.658609, lng:139.361856},
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
  position:{lat:35.659348, lng:139.365249},
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
  position:{lat:35.653661, lng:139.361660},
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


for(i=0;i<=16;i++){

  BusStopMarker[i] =
    new google.maps.Marker(BusStop[i]);

}

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
