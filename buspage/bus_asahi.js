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

    const MarkerElement = new Array();
    const Marker = new Array();

    // 日野キャンパス1号館にマーカを表示するためのパラメータのconstオブジェクト
    MarkerElement[0] = {
      position: {lat:35.659055, lng:139.371251},
      map: myMap
    };

    MarkerElement[1] = {
      position: {lat:35.659113, lng:139.370752},
      map: myMap
    };

    MarkerElement[2] = {
      position: {lat:35.658407, lng:139.368288},
      map: myMap
    };

    MarkerElement[3]={
      position:{lat:35.659715, lng:139.367973},
      map: myMap
    };

    MarkerElement[4]={
      position:{lat:35.657864, lng:139.371923},
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

const InfoWindowElement = new Array();
const InfoWindow = new Array();
window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content:
      '<p><b>勝っちゃんらーめん</b></p><p>あっさりとした味が特徴のラーメン屋！</p><p><img src="img/asahi/kattyan1.jpg"width="220px" height="160px" class="maru"/></p>'
    };
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>中華そば珉珉</b></p><p>もちもち食感の八王子ラーメンが食べられるお店</p><p><img src="img/asahi/minmin2.jpg"width="220px" height="160px" class="maru"/></p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>Kitchen&Cafe Canaan</b></p><p>オシャレな雰囲気の健康にやさしいキッチンカフェ</p><p><img src="img/asahi/canan2.jpg"width="220px" height="160px" class="maru"/></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>中華そば専門店あさひ軒</b></p><p>王道八王子ラーメンが楽しめる中華そば専門店！</p><p><img src="img/asahi/asahi1.jpg"width="220px" height="160px" class="maru"/></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  InfoWindowElement[4] =
    {content: '<p><b>里やま</b></p><p>和食を中心とした幅広い一品料理を扱う居酒屋さん</p><p><img src="img/asahi/satoyama3.jpg"width="220px" height="160px" class="maru"/></p>'};
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

  //ここまで旭が丘路線ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  const mapElement_kattyan = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658959, lng:139.371403},
    // ズームレベル
    zoom: 20
  };

  // 地図の作成
  const map_kattyan =
    new google.maps.Map(document.getElementById('map_kattyan'), mapElement_kattyan);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_kattyan = [
    {lat:35.659055, lng:139.371251},
    {lat:35.659003, lng:139.371269},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_kattyan = {
    path: routeCoodinates_kattyan, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_kattyan = new google.maps.Polyline(routeElements_kattyan);
  // 地図に表示する
  routePolyline_kattyan.setMap(map_kattyan);

  const mapElement_minmin = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658982, lng:139.371161},
    // ズームレベル
    zoom: 19
  };

  // 地図の作成
  const map_minmin =
    new google.maps.Map(document.getElementById('map_minmin'), mapElement_minmin);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_minmin = [
    {lat:35.659113, lng:139.370752},
    {lat:35.659032, lng:139.370748},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_minmin = {
    path: routeCoodinates_minmin, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_minmin = new google.maps.Polyline(routeElements_minmin);
  // 地図に表示する
  routePolyline_minmin.setMap(map_minmin);

  const mapElement_satoyama = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658519, lng:139.371818},
    // ズームレベル
    zoom: 17.5
  };

  // 地図の作成
  const map_satoyama =
    new google.maps.Map(document.getElementById('map_satoyama'), mapElement_satoyama);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_satoyama = [
    {lat:35.657864, lng:139.371923},
    {lat:35.657961, lng:139.371917},
    {lat:35.657946, lng:139.372070},
    {lat:35.658944, lng:139.372151},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_satoyama = {
    path: routeCoodinates_satoyama, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_satoyama = new google.maps.Polyline(routeElements_satoyama);
  // 地図に表示する
  routePolyline_satoyama.setMap(map_satoyama);

  const mapElement_asahi = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.660069, lng:139.368074},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_asahi =
    new google.maps.Map(document.getElementById('map_asahi'), mapElement_asahi);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_asahi = [
    {lat:35.659715, lng:139.367973},
    {lat:35.659744, lng:139.368058},
    {lat:35.660347, lng:139.368073}
  ];

  // Polylineのパラメータを作る
  const routeElements_asahi = {
    path: routeCoodinates_asahi, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_asahi = new google.maps.Polyline(routeElements_asahi);
  // 地図に表示する
  routePolyline_asahi.setMap(map_asahi);

  const mapElement_canan = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.659311, lng:139.368127},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_canan =
    new google.maps.Map(document.getElementById('map_canan'), mapElement_canan);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_canan = [
    {lat:35.658407, lng:139.368288},
    {lat:35.658426, lng:139.368159},
    {lat:35.659043, lng:139.368191},
    {lat:35.659054, lng:139.368019},
    {lat:35.660347, lng:139.368073}
  ];

  // Polylineのパラメータを作る
  const routeElements_canan = {
    path: routeCoodinates_canan, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_canan = new google.maps.Polyline(routeElements_canan);
  // 地図に表示する
  routePolyline_canan.setMap(map_canan);

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
