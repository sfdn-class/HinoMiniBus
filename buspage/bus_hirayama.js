// display_marker.js

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.650699, lng:139.386032},
    // ズームレベル
    zoom: 14
  };

  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

  const kmlLayerElements = {
      // KMLファイルのURL
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/hirayamajyunkanroute.kml',
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
    position: {lat:35.649661, lng:139.402271},
    map: myMap
  };

  MarkerElement[1] = {
    position: {lat:35.639961, lng:139.381925},
    map: myMap
  };

  MarkerElement[2] = {
    position: {lat:35.648909, lng:139.404515},
    map: myMap
  };

  MarkerElement[3]={
    position:{lat:35.646324, lng:139.400737},
    map: myMap
  };

  for(i=0;i<=3;i++){
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
  position:{lat:35.654882, lng:139.378952},
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
  position:{lat:35.652436, lng:139.376105},
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
  position:{lat:35.649740, lng:139.371823},
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
  position:{lat:35.648792, lng:139.369790},
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
  position:{lat:35.646909, lng:139.3700690},
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
  position:{lat:35.646301, lng:139.372512},
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
  position:{lat:35.647131, lng:139.375825},
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
  position:{lat:35.648953, lng:139.378437},
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
  position:{lat:35.649258, lng:139.376688},
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
  position:{lat:35.647514, lng:139.380443},
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
  position:{lat:35.646818, lng:139.383407},
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
  position:{lat:35.645541, lng:139.384990},
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
  position:{lat:35.643968, lng:139.386900},
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
  position:{lat:35.641921, lng:139.387857},
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
  position:{lat:35.641269, lng:139.386735},
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
  position:{lat:35.644425, lng:139.386673},
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
  position:{lat:35.645754, lng:139.390320},
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
  position:{lat:35.646816, lng:139.391890},
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
  position:{lat:35.648541, lng:139.390622},
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
  position:{lat:35.649487, lng:139.393543},
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
  position:{lat:35.648785, lng:139.391907},
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
  position:{lat:35.650716, lng:139.388171},
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
  position:{lat:35.651424, lng:139.389483},
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
  position:{lat:35.648823, lng:139.387425},
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

for(i=0;i<=24;i++){

  BusStopMarker[i] =
    new google.maps.Marker(BusStop[i]);

}

const InfoWindowElement = new Array();
const InfoWindow = new Array();
window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content:
      '<p><b>多摩動物公園</b></p><p>日野市が誇る日本有数の動物園</p><p><img src="img/hirayama/tama1.jpg"width="220px" height="160px" class="maru"/></p>'
    };
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>都立平山城址公園</b></p><p>お花見時には桜の名所に！まったりお散歩スポット</p><p><img src="img/hirayama/hirayama1.jpg"width="300px" height="160px" class="maru"/></p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>京王れーるランド</b></p><p>乗り物展示や運転体験ができる遊べる施設！</p><p><img src="img/hirayama/keiou1.jpg"width="220px" height="160px" class="maru"/></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>都立七生公園</b></p><p>ハイキングに最適！自然が楽しめる公園</p><p><img src="img/hirayama/nanao1.jpg"width="220px" height="160px" class="maru"/></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  for(i=0;i<=3;i++){
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

  const mapElement_hirayamapark = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.640587, lng:139.383680},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const map_hirayamapark =
    new google.maps.Map(document.getElementById('map_hirayamapark'), mapElement_hirayamapark);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hirayamapark = [
    {lat:35.641266, lng:139.386714},
    {lat:35.641200, lng:139.386395},
    {lat:35.640882, lng:139.386124},
    {lat:35.640865, lng:139.385947},
    {lat:35.641085, lng:139.385058},
    {lat:35.641076, lng:139.384589},
    {lat:35.641139, lng:139.384034},
    {lat:35.640901, lng:139.383068},
    {lat:35.640923, lng:139.382435},
    {lat:35.641241, lng:139.382025},
    {lat:35.641450, lng:139.381990},
    {lat:35.641474, lng:139.381805},
    {lat:35.641273, lng:139.381638},
    {lat:35.641031, lng:139.381579},
    {lat:35.640652, lng:139.380764},
    {lat:35.640619, lng:139.380493},
    {lat:35.640443, lng:139.379949},
    {lat:35.640324, lng:139.380060},
    {lat:35.640204, lng:139.380430},
    {lat:35.640189, lng:139.380538},
    {lat:35.639953, lng:139.381051},
    {lat:35.639954, lng:139.381609},
    {lat:35.639921, lng:139.381929},
    {lat:35.639960, lng:139.381935}
  ];

  // Polylineのパラメータを作る
  const routeElements_hirayamapark = {
    path: routeCoodinates_hirayamapark, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_hirayamapark = new google.maps.Polyline(routeElements_hirayamapark);
  // 地図に表示する
  routePolyline_hirayamapark.setMap(map_hirayamapark);

  const mapElement_keiou = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.647238, lng:139.397212},
    // ズームレベル
    zoom: 14.5
  };

  // 地図の作成
  const map_keiou =
    new google.maps.Map(document.getElementById('map_keiou'), mapElement_keiou);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_keiou = [
    {lat:35.645709, lng:139.390383},
    {lat:35.643895, lng:139.394617},
    {lat:35.643786, lng:139.395448},
    {lat:35.644135, lng:139.397293},
    {lat:35.644070, lng:139.398736},
    {lat:35.644785, lng:139.400007},
    {lat:35.647430, lng:139.403141},
    {lat:35.647545, lng:139.403431},
    {lat:35.648452, lng:139.403798},
    {lat:35.649023, lng:139.403884},
    {lat:35.649215, lng:139.403648},
    {lat:35.649285, lng:139.404013},
    {lat:35.649129, lng:139.404337},
    {lat:35.648911, lng:139.404513}
  ];

  // Polylineのパラメータを作る
  const routeElements_keiou = {
    path: routeCoodinates_keiou, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_keiou = new google.maps.Polyline(routeElements_keiou);
  // 地図に表示する
  routePolyline_keiou.setMap(map_keiou);

  const mapElement_nanao = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.644611, lng:139.396535},
    // ズームレベル
    zoom: 15
  };

  // 地図の作成
  const map_nanao =
    new google.maps.Map(document.getElementById('map_nanao'), mapElement_nanao);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_nanao = [
    {lat:35.645709, lng:139.390383},
    {lat:35.643895, lng:139.394617},
    {lat:35.643786, lng:139.395448},
    {lat:35.644135, lng:139.397293},
    {lat:35.644070, lng:139.398736},
    {lat:35.644785, lng:139.400007},
    {lat:35.645807, lng:139.401208},
    {lat:35.646221, lng:139.400736}
  ];

  // Polylineのパラメータを作る
  const routeElements_nanao = {
    path: routeCoodinates_nanao, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_nanao = new google.maps.Polyline(routeElements_nanao);
  // 地図に表示する
  routePolyline_nanao.setMap(map_nanao);

  const mapElement_tama = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.646831, lng:139.397406},
    // ズームレベル
    zoom: 15
  };

  // 地図の作成
  const map_tama =
    new google.maps.Map(document.getElementById('map_tama'), mapElement_tama);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_tama = [
    {lat:35.645709, lng:139.390383},
    {lat:35.643895, lng:139.394617},
    {lat:35.643786, lng:139.395448},
    {lat:35.644135, lng:139.397293},
    {lat:35.644070, lng:139.398736},
    {lat:35.644785, lng:139.400007},
    {lat:35.647430, lng:139.403141},
    {lat:35.647545, lng:139.403431},
    {lat:35.648452, lng:139.403798},
    {lat:35.649023, lng:139.403884},
    {lat:35.649215, lng:139.403648},
    {lat:35.649450, lng:139.403138},
    {lat:35.649515, lng:139.402248}
  ];

  // Polylineのパラメータを作る
  const routeElements_tama = {
    path: routeCoodinates_tama, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_tama = new google.maps.Polyline(routeElements_tama);
  // 地図に表示する
  routePolyline_tama.setMap(map_tama);

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
