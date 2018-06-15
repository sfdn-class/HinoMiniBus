// ochikawaroute.js

window.addEventListener('load', () => {
  const mapElement = {
    center: {lat:35.657382, lng:139.431354},
    zoom: 17
  };

  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);


    const kmlLayerElements = {
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/ochikawaroute.kml',
      suppressInfoWindows: true,
      map: myMap
    };

    const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);

    const BusStop = new Array();
    const BusStopMarker = new Array();

  BusStop[0] = {
    title: '落川１',
    position: {lat:35.661665, lng:139.413104},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };
  BusStop[1] = {
    title: '落川２',
    position: {lat:35.662945, lng:139.418003},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[2] = {
    title: '落川３',
    position: {lat:35.662067, lng:139.419497},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[3] = {
    title: '落川４',
    position: {lat:35.661644, lng:139.422200},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[4] = {
    title: '落川５',
    position: {lat:35.662284, lng:139.424900},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[5] = {
    title: '落川６',
    position: {lat:35.662834, lng:139.426302},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[6] = {
    title: '落川７',
    position: {lat:35.660814, lng:139.426700},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[7] = {
    title: '落川８',
    position: {lat:35.660367, lng:139.425800},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[8] = {
    title: '落川９',
    position: {lat:35.660125, lng:139.426897},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[9] = {
    title: '落川１０',
    position: {lat:35.657961, lng:139.430700},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[10] = {
    title: '落川１１',
    position: {lat:35.656979, lng:139.431395},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[11] = {
    title: '落川１２',
    position: {lat:35.653207, lng:139.435905},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[12] = {
    title: '落川１３',
    position: {lat:35.651229, lng:139.439900},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[13] = {
    title: '落川１４',
    position: {lat:35.650584, lng:139.444101},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  BusStop[14] = {
    title: '落川１５',
    position: {lat:35.651425, lng:139.446701},
    icon: {
      fillColor: "#0000ff",
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: "#ffffff",
      strokeWeight: 1.0
    },
    map: myMap
  };

  for(i=0;i<=14;i++){

    BusStopMarker[i] =
      new google.maps.Marker(BusStop[i]);

  }

  const MarkerElement = new Array();
  const Marker = new Array();

  MarkerElement[0] = {
    title: '観光地１',
    position: {lat:35.653821, lng:139.427498},
    map: myMap
  };

  MarkerElement[1] = {
    title: '観光地２',
    position: {lat:35.662462, lng:139.425292},
    map: myMap
  };

  MarkerElement[2] = {
    title: '観光地３',
    position: {lat:35.651459, lng:139.437263},
    map: myMap
  };

  MarkerElement[3] = {
    title: '観光地４',
    position: {lat:35.661658, lng:139.425155},
    map: myMap
  };

  for(i=0;i<=3;i++){
  Marker[i] =
    new google.maps.Marker(MarkerElement[i]);
  }


  const InfoWindowElement = new Array();
  const InfoWindow = new Array();
  window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content: '<p><b>京王百草園</b><p>四季折々の草花に癒される日本庭園</p><p><img src="img/otikawa/mogusaenn.png" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>土方農園</b><p>都内で気軽にブルーベリー狩りを楽しもう</p><p><img src="img/otikawa/hijikatanouenn.jpg"width="220px" height="160px" class="maru"></p><p>※イメージ画像</p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>株式会社　温市</b><p>温りのある食卓と畑の架け橋日野の小さな市場</p><p><img src="img/otikawa/nukumoriichi.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>とことこ</b><p>散歩しながら「とことこ」と<br>寄りたくなるお店</p><p><img src="img/otikawa/tokotoko.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  for(i=0;i<=3;i++){
    window.infoWindowArray.push(InfoWindow[i]);
  }

  Marker[0].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[0].open(myMap, Marker[0]);
  });

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

  const mapElement_tokotoko = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661971, lng:139.424946},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_tokotoko =
    new google.maps.Map(document.getElementById('map_tokotoko'), mapElement_tokotoko);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_tokotoko = [
    {lat:35.662306, lng:139.424917},
    {lat:35.661646, lng:139.424984},
    {lat:35.661655, lng:139.425153}
  ];

  // Polylineのパラメータを作る
  const routeElements_tokotoko = {
    path: routeCoodinates_tokotoko, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_tokotoko = new google.maps.Polyline(routeElements_tokotoko);
  // 地図に表示する
  routePolyline_tokotoko.setMap(map_tokotoko);

  const mapElement_hijikatanouenn = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.662413, lng:139.425065},
    // ズームレベル
    zoom: 19
  };

  // 地図の作成
  const map_hijikatanouenn =
    new google.maps.Map(document.getElementById('map_hijikatanouenn'), mapElement_hijikatanouenn);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hijikatanouenn = [
    {lat:35.662287, lng:139.424926},
    {lat:35.662440, lng:139.424913},
    {lat:35.662425, lng:139.425275}
  ];

  // Polylineのパラメータを作る
  const routeElements_hijikatanouenn = {
    path: routeCoodinates_hijikatanouenn, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_hijikatanouenn = new google.maps.Polyline(routeElements_hijikatanouenn);
  // 地図に表示する
  routePolylines_hijikatanouenn.setMap(map_hijikatanouenn);

  const mapElement_mogusaenn = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.654938, lng:139.428429},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const map_mogusaenn =
    new google.maps.Map(document.getElementById('map_mogusaenn'), mapElement_mogusaenn);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_mogusaenn = [
    {lat:35.653831, lng:139.427496},
    {lat:35.653757, lng:139.427434},
    {lat:35.653491, lng:139.427860},
    {lat:35.653596, lng:139.427863},
    {lat:35.653777, lng:139.427761},
    {lat:35.654106, lng:139.427938},
    {lat:35.654409, lng:139.428051},
    {lat:35.654538, lng:139.427957},
    {lat:35.654922, lng:139.427893},
    {lat:35.655027, lng:139.427727},
    {lat:35.655197, lng:139.427743},
    {lat:35.655166, lng:139.428446},
    {lat:35.656081, lng:139.428776},
    {lat:35.656290, lng:139.428728},
    {lat:35.656604, lng:139.429039},
    {lat:35.656759, lng:139.429044},
    {lat:35.656722, lng:139.430125},
    {lat:35.656757, lng:139.430412},
    {lat:35.657036, lng:139.431147},
    {lat:35.656955, lng:139.431388}
  ];

  // Polylineのパラメータを作る
  const routeElements_mogusaenn = {
    path: routeCoodinates_mogusaenn, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_mogusaenn = new google.maps.Polyline(routeElements_mogusaenn);
  // 地図に表示する
  routePolylines_mogusaenn.setMap(map_mogusaenn);

  const mapElement_nukumoriichi = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.652341, lng:139.436332},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_nukumoriichi =
    new google.maps.Map(document.getElementById('map_nukumoriichi'), mapElement_nukumoriichi);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_nukumoriichi = [
    {lat:35.653042, lng:139.435945},
    {lat:35.651867, lng:139.437309},
    {lat:35.651496, lng:139.437148},
    {lat:35.651465, lng:139.437244}
  ];

  // Polylineのパラメータを作る
  const routeElements_nukumoriichi = {
    path: routeCoodinates_nukumoriichi, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_nukumoriichi = new google.maps.Polyline(routeElements_nukumoriichi);
  // 地図に表示する
  routePolylines_nukumoriichi.setMap(map_nukumoriichi);

}); // window.addEventListenerに登録する関数オブジェクトここまで
