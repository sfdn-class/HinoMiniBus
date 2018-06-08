window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  const mapElement = {
    center: {lat:(35.661707+35.654540+35.660719+35.662657+35.661930)/5, lng:(139.406823+139.397083+139.400892+139.388994+139.366485)/5},
    zoom: 16
  };

  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  const kmlLayerElements = {
    url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/minamidairaroute.kml',
    suppressInfoWindows: true,
    map: myMap
  };

  const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);

  /*const latlng =[
    {lat:35.661707, lng:139.406823},//'獨地蔵尊'
    {lat:35.654540, lng:139.397083},//'熊野神社'
    {lat:35.660719, lng:139.400892},//'壽徳寺',
    {lat:35.662657,lng:139.388994 },//'善生寺'
    {lat:35.661930, lng:139.366485},
      {lat:35.661707+35.654540+35.660719+35.662657+35.661930, lng:139.406823+139.397083+139.400892+139.388994+139.366485}//真ん中
  ];*/

  const BusStop = new Array();
  const BusStopMarker = new Array();

  BusStop[0]={
    title: '豊田駅北口',
   position:{lat:35.660029, lng:139.381349},
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
    title: 'イオンモール多摩平の森',
    position:{lat:35.662245, lng:139.379635},
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
    title: '第二中学校［日野市］',
    position:{lat:35.663784, lng:139.379112},
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
    title: '市立病院入口',
    position:{lat:35.667125, lng:139.377474},
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
      title: '日野市立病院',
      position:{lat:35.667489, lng:139.378475},
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
    title: '多摩平第一公園',
    position:{lat:35.667746, lng:139.380443},
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
    title: '第五小学校入口',
    position:{lat:35.668071, lng:139.383061},
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
    title: '泉塚',
    position:{lat:35.668420, lng:139.385665},
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
    title: '多摩平七丁目',
    position:{lat:35.668927, lng:139.389544},
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
    title: '神明野鳥の森公園',
    position:{lat:35.668910, lng:139.391504},
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
    title: '神明二丁目',
    position:{lat:35.668785, lng:139.394387},
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
    title: '日野市役所',
    position:{lat:35.671040, lng:139.394751},
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
    title: '消防署前［日野市］',
    position:{lat:35.669682, lng:139.392795},
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
    title: '吹上',
    position:{lat:35.666112, lng:139.391184},
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
    title: '東豊田',
    position:{lat:35.663656, lng:139.389931},
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
    title: '一番橋',
    position:{lat:35.660720, lng:139.392012},
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
    title: '七生中学校',
    position:{lat:35.659028, lng:139.394300},
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
    title: '一番橋通り',
    position:{lat:35.657189, lng:139.396524},
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
    title: '北野街道口',
    position:{lat:35.657045, lng:139.398243},
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
    title: '南平二丁目',
    position:{lat:35.657560, lng:139.402503},
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
    title: '南平台',
    position:{lat:35.655523, lng:139.399056},
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
    title: 'みなみが丘',
    position:{lat:35.655521, lng:139.399927},
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
    title: 'みなみが丘上',
    position:{lat:35.656127, lng:139.402155},
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
    title: '鹿島台上',
    position:{lat:35.655878, lng:139.405073},
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
    title: '鹿島台',
    position:{lat:35.658845, lng:139.405586},
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
    title: '南平一丁目',
    position:{lat:35.660947, lng:139.407031},
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
    title: '南平',
    position:{lat:35.663546, lng:139.407781},
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
    title: '高幡不動駅',
    position:{lat:35.661717, lng:139.413254},
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

  for(i=0;i<=27;i++){
  BusStopMarker[i] =
    new google.maps.Marker(BusStop[i]);
  }

  const MarkerElement = new Array();
  const Marker = new Array();

  MarkerElement[0] = {
    title: '獨地蔵尊',
    position: {lat:35.661707, lng:139.406823},
    map: myMap
  };
  MarkerElement[1] = {
    title: '熊野神社',
    position:{lat:35.654540, lng:139.397083},
    map: myMap
  };
  MarkerElement[2] = {
    title: '壽徳寺',
    position: {lat:35.660719, lng:139.400892},
    map: myMap
  };
  MarkerElement[3] = {
    title: '善生寺',
    position:{lat:35.662657,lng:139.388994 },
    map: myMap
  };
  MarkerElement[4] = {
    title: '若宮神社',
    position:{lat:35.663101, lng:139.387797},
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
    {content: '<p><b>獨地蔵尊</b><p>今もなお信仰される正徳２年（1711）建立された地蔵尊</p><p><img src="img/minami/Jizouson.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[0] = new google.maps.InfoWindow(InfoWindowElement[0]);

  InfoWindowElement[1] =
    {content: '<p><b>熊野神社</b><p>養蚕が盛んだった村の姿が浮かばれる小さな祠が祀られている神社</p><p><img src="img/minami/Kumano.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[1] = new google.maps.InfoWindow(InfoWindowElement[1]);

  InfoWindowElement[2] =
    {content: '<p><b>壽徳寺</b><p>平家の一族がに発願して開いたお寺</p><p><img src="img/minami/Jutokuji.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[2] = new google.maps.InfoWindow(InfoWindowElement[2]);

  InfoWindowElement[3] =
    {content: '<p><b>善生寺</b><p>青銅製の大仏さまのあるお寺</p><p><img src="img/minami/Zenseiji.jpg" width="220px" height="160px" class="maru"></p>'};
  InfoWindow[3] = new google.maps.InfoWindow(InfoWindowElement[3]);

  InfoWindowElement[4] =
    {content: '<p><b>若宮神社</b><p>祭りや初詣で賑わう地域に大切にされている神社</p><p><img src="img/minami/Wakamiya.jpg" width="220px" height="160px" class="maru"></p>'};
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

  // 同様に2つ目も設定する
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

}); // window.addEventListenerに登録する関数オブジェクトここまで
