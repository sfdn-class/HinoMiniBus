// ochikawaroute.js

window.addEventListener('load', () => {
  const mapElement = {
    center: {lat:35.657382, lng:139.431354},
    zoom: 14
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

}); // window.addEventListenerに登録する関数オブジェクトここまで
