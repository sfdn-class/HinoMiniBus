window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  const mapElement = {
    center: {lat:(35.666341+35.663159+35.659860+35.664091+35.655892+35.664568)/6, lng:(139.413669+139.391074+139.393383+139.397401+139.382337+139.395176)/6},
    zoom: 16
  };

  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  const kmlLayerElements = {
    url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/kawabehorinouchiroute.kml',
    suppressInfoWindows: true,
    map: myMap
  };

  const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);

  const BusStop = new Array();
  const BusStopMarker = new Array();

  BusStop[0]={
    title: '豊田駅南口',
   position:{lat:35.659192, lng:139.381394},
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
    title: '豊田駅南入口',
    position:{lat:35.656552, lng:139.384655},
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
    title: '豊田一丁目',
    position:{lat:35.657450, lng:139.387053},
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
    title: '豊田小学校入口',
    position:{lat:35.659069, lng:139.389068},
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
      title: '一番橋西',
      position:{lat:35.660808, lng:139.391150},
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
    title: '東豊田一丁目',
    position:{lat:35.662466, lng:139.393151},
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
    title: '第一住宅［日野市］',
    position:{lat:35.663673, lng:139.394948},
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
    title: '堀之内緑道',
    position:{lat:35.664218, lng:139.396091},
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
    title: '日野市民プール',
    position:{lat:35.665057, lng:139.398574},
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
    title: '川辺堀之内',
    position:{lat:35.665454, lng:139.400441},
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
    title: '駒形公園',
    position:{lat:35.665676, lng:139.401458},
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
    title: '高幡橋西',
    position:{lat:35.665458, lng:139.407026},
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
    title: '南平',
    position:{lat:35.663627, lng:139.406692},
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
    title: '高幡不動駅',
    position:{lat:35.661729, lng:139.413207},
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

  for(i=0;i<=13;i++){
  BusStopMarker[i] =
    new google.maps.Marker(BusStop[i]);
  }

  const MarkerElement = new Array();
  const Marker = new Array();

  MarkerElement[0] = {
    title: 'ふれあい橋',
    position: {lat:35.666341, lng:139.413669},
    map: myMap
  };

  MarkerElement[1] = {
    title: 'レンガ橋',
    position:{lat:35.663159, lng:139.391074},
    map: myMap
  };
  MarkerElement[2] = {
    title: '市営向川団地浅川堤',
    position: {lat:35.659860, lng:139.393383},
    map: myMap
  };
  MarkerElement[3] = {
    title: '日枝神社',
    position:{lat:35.664091, lng:139.397401},
    map: myMap
  };
  MarkerElement[4] = {
    title: '中央図書館下湧水',
    position:{lat:35.655892, lng:139.382337},
    map: myMap

  };
  MarkerElement[5] = {
    title: '堀之内緑道',
    position:{lat:35.664568, lng:139.395176},
    map: myMap
  };

  for(i=0;i<=5;i++){
  Marker[i] =
    new google.maps.Marker(MarkerElement[i]);
  }

  const InfoWindowElement = new Array();
  const InfoWindow = new Array();
  window.infoWindowArray = new Array();

  InfoWindowElement[0] =
    {content: '<p><b>ふれあい橋</b><p>富士山のビュースポット</p><p><img src="img/kawabe/Hureaibashi.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>レンガ橋</b><p>豊田用水に架けられた小さなレンガでできた丸橋</p><p><img src="img/kawabe/Rengabasi.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>市営向川団地浅川堤</b><p>大正時代に八王子市北野まで続いていた桜並木</p><p><img src="img/kawabe/AsakawaSakura.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>日枝神社</b><p>日野市の天然記念物の樹歴３００年以上のムクノキがある神社</p><p><img src="img/kawabe/Hiedajinja.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  InfoWindowElement[4] =
    {content: '<p><b>中央図書館下湧水</b><p>東京の名湧水５７選に指定される湧水</p><p><img src="img/kawabe/Hinotosyowakimizu.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[4] = new google.maps.InfoWindow(InfoWindowElement[4]);

  InfoWindowElement[5] =
    {content: '<p><b>堀之内緑道</b><p>豊田用水に沿って歩く道</p><p><img src="img/kawabe/HorinoutiRyokudou.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[5] = new google.maps.InfoWindow(InfoWindowElement[5]);

  for(i=0;i<=5;i++){
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

  Marker[2].addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      InfoWindow[2].open(myMap, Marker[2]);
    }
  );

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

  Marker[5].addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    InfoWindow[5].open(myMap, Marker[5]);
  });

}); // window.addEventListenerに登録する関数オブジェクトここまで
