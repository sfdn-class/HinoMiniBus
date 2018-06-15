// misawadairoute.js

window.addEventListener('load', () => {

  const mapElement = {
    center: {lat:35.657382, lng:139.431354},
    zoom: 14
  };

  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);


    const kmlLayerElements = {
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/misawadairoute.kml',
      suppressInfoWindows: true,
      map: myMap
    };

    const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);

  const BusStop = new Array();
  const BusStopMarker = new Array();

  BusStop[0] = {
    title: '三沢台１',
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
    title: '三沢台２',
    position: {lat:35.659087, lng:139.418102},
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
    title: '三沢台３',
    position: {lat:35.658753, lng:139.423500},
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
    title: '三沢台４',
    position: {lat:35.657673, lng:139.424500},
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
    title: '三沢台５',
    position: {lat:35.655923, lng:139.424801},
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
    title: '三沢台６',
    position: {lat:35.653753, lng:139.423199},
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
    title: '三沢台７',
    position: {lat:35.652223, lng:139.421899},
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
    title: '三沢台８',
    position: {lat:35.650612, lng:139.420899},
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
    title: '三沢台９',
    position: {lat:35.650003, lng:139.423300},
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
    title: '三沢台１０',
    position: {lat:35.649722, lng:139.424398},
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
    title: '三沢台１１',
    position: {lat:35.648612, lng:139.427100},
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
    title: '三沢台１２',
    position: {lat:35.647581, lng:139.429394},
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
    title: '三沢台１３',
    position: {lat:35.647246, lng:139.431989},
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
    title: '三沢台１４',
    position: {lat:35.645733, lng:139.432200},
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
    title: '三沢台１５',
    position: {lat:35.644283, lng:139.433500},
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

  BusStop[15] = {
    title: '三沢台１６',
    position: {lat:35.645584, lng:139.435098},
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

  BusStop[16] = {
    title: '三沢台１７',
    position: {lat:35.648653, lng:139.436900},
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

  BusStop[17] = {
    title: '三沢台１８',
    position: {lat:35.651202, lng:139.437401},
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

  BusStop[18] = {
    title: '三沢台１９',
    position: {lat:35.651223, lng:139.439899},
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

  BusStop[19] = {
    title: '三沢台２０',
    position: {lat:35.650582, lng:139.444100},
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

  BusStop[20] = {
    title: '三沢台２１',
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

  for(i=0;i<=20;i++){

    BusStopMarker[i] =
      new google.maps.Marker(BusStop[i]);

  }

  const MarkerElement = new Array();
  const Marker = new Array();

  MarkerElement[0] = {
    title: '観光地１',
    position: {lat:35.650680, lng:139.442858},
    map: myMap
  };

  MarkerElement[1] = {
    title: '観光地２',
    position: {lat:35.662021, lng:139.412141},
    map: myMap
  };

  MarkerElement[2] = {
    title: '観光地３',
    position: {lat:35.650391, lng:139.447989},
    map: myMap
  };

  MarkerElement[3] = {
    title: '観光地４',
    position: {lat:35.653331, lng:139.436061},
    map: myMap
  };

  for(i=0;i<=4;i++){
  Marker[i] =
    new google.maps.Marker(MarkerElement[i]);
}

  const InfoWindowElement = new Array();
  const InfoWindow = new Array();
  window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content: '<p><b>イノウエベーカリー</b></p><p>並んでも食べたい！本格パン屋</p><p><img src="img/misawadai/inouebakery.jpg" width="220px" height="160px" class="maru"></p>'};
    InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>Cafe De Dango</b></p><p>地球を味わうカフェ</p><p><img src="img/misawadai/cafededango.jpg" width="220px" height="160px" class="maru"></p>'};
    InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>ぱくぱく くもくま堂</b></p><p>思わず写真を撮りたくなるかき氷</p><p><img src="img/misawadai/pakupakukumokumadou.jpg" width="160px" height="200px" class="maru"></p>'};
    InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>ARTIGIANO GELATERIA</b></p><p>地元素材を使ったイタリアンジェラート</p><p><img src="img/misawadai/artigianogelateria.jpg" width="220px" height="160px" class="maru"></p>'};
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

  const mapElement_inouebakery = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.650729, lng:139.443448},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_inouebakery =
    new google.maps.Map(document.getElementById('map_inouebakery'), mapElement_inouebakery);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_inouebakery = [
    {lat:35.650672, lng:139.442847},
    {lat:35.650838, lng:139.442890},
    {lat:35.650637, lng:139.444081}
  ];

  // Polylineのパラメータを作る
  const routeElements_inouebakery = {
    path: routeCoodinates_inouebakery, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_inouebakery = new google.maps.Polyline(routeElements_inouebakery);
  // 地図に表示する
  routePolylines_inouebakery.setMap(map_inouebakery);

  const mapElement_cafededango = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661891, lng:139.412685},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_cafededango =
    new google.maps.Map(document.getElementById('map_cafededango'), mapElement_cafededango);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_cafededango = [
    {lat:35.662017, lng:139.412132},
    {lat:35.661939, lng:139.412127},
    {lat:35.661887, lng:139.412763},
    {lat:35.661652, lng:139.413101}
  ];

  // Polylineのパラメータを作る
  const routeElements_cafededango = {
    path: routeCoodinates_cafededango, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_cafededango = new google.maps.Polyline(routeElements_cafededango);
  // 地図に表示する
  routePolylines_cafededango.setMap(map_cafededango);

  const mapElement_pakupakukumokumadou = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.651140, lng:139.447696},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_pakupakukumokumadou =
    new google.maps.Map(document.getElementById('map_pakupakukumokumadou'), mapElement_pakupakukumokumadou);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_pakupakukumokumadou = [
    {lat:35.651767, lng:139.446899},
    {lat:35.651680, lng:139.447231},
    {lat:35.651758, lng:139.447263},
    {lat:35.651292, lng:139.447816},
    {lat:35.650499, lng:139.448116},
    {lat:35.650390, lng:139.447990}
  ];

  // Polylineのパラメータを作る
  const routeElements_pakupakukumokumadou = {
    path: routeCoodinates_pakupakukumokumadou, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_pakupakukumokumadou = new google.maps.Polyline(routeElements_pakupakukumokumadou);
  // 地図に表示する
  routePolylines_pakupakukumokumadou.setMap(map_pakupakukumokumadou);

  const mapElement_artigianogelateria = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.652118, lng:139.436813},
    // ズームレベル
    zoom: 16.5
  };

  // 地図の作成
  const map_artigianogelateria =
    new google.maps.Map(document.getElementById('map_artigianogelateria'), mapElement_artigianogelateria);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_artigianogelateria = [
    {lat:35.650940, lng:139.437435},
    {lat:35.651707, lng:139.437539},
    {lat:35.652657, lng:139.436289},
    {lat:35.653215, lng:139.435817},
    {lat:35.653333, lng:139.436053}
  ];

  // Polylineのパラメータを作る
  const routeElements_artigianogelateria = {
    path: routeCoodinates_artigianogelateria, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_artigianogelateria = new google.maps.Polyline(routeElements_artigianogelateria);
  // 地図に表示する
  routePolylines_artigianogelateria.setMap(map_artigianogelateria);

}); // window.addEventListenerに登録する関数オブジェクトここまで
