window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.661707+35.654540+35.660719+35.662657+35.661930)/5, lng:(139.406823+139.397083+139.400892+139.388994+139.366485)/5},
    zoom: 16
  };

  const myMap =
    new google.maps.Map(document.getElementById('mapMinami'), mapElement);

  // KMLを表示するためのレイヤーのプロパティ
  const kmlLayerElements = {
    // KMLファイルのURL
    url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/minamidairaroute.kml',
    // インターネットから探せるサーバ上においておき，そのURLを記述する．
    //ルートの場合関係ないが，レイヤ上のオブジェクトの方がInfoWindowよりも上にくる（抑制する）
    suppressInfoWindows: true,
    // 地図オブジェクト
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

  const firstMarkerElement = {
    //タイトルをつける
    title: '獨地蔵尊',
    // 1号館の緯度経度
    position: {lat:35.661707, lng:139.406823},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: '熊野神社',
    position:{lat:35.654540, lng:139.397083},
    map: myMap
  };
  const thirdMarkerElement = {
    title: '壽徳寺',
    position: {lat:35.660719, lng:139.400892},
    map: myMap
  };
  const fourthMarkerElement = {
    title: '善生寺',
    position:{lat:35.662657,lng:139.388994 },
    map: myMap
  };
  const fifthMarkerElement = {
    title: '若宮神社',
    position:{lat:35.663101, lng:139.387797},
    map: myMap
  };

  //情報ウィンドウオブジェクトを格納する配列を，グローバルに作っておく
  //要素数ゼロの配列を作る
  window.infoWindowArray = new Array();

  // マーカオブジェクト2つを作成
  const firstMarker =
    new google.maps.Marker(firstMarkerElement);
  const secondMarker =
    new google.maps.Marker(secondMarkerElement);
  const thirdMarker =
    new google.maps.Marker(thirdMarkerElement);
  const fourthMarker =
    new google.maps.Marker(fourthMarkerElement);
  const fifthMarker =
    new google.maps.Marker(fifthMarkerElement);

  const firstcontentTitle='<a href=#jizou>獨地蔵尊</a>';
  const firstcontentsecondTitle='<p>今もなお信仰される正徳２年（1711）建立された地蔵尊</p>';
  const firstcontentImg='<img src="img/Jizouson.jpg">';
  const contentfirstHTML=firstcontentTitle+firstcontentsecondTitle+firstcontentImg;
  // 情報ウィンドウを二つ作成
  const firstInfoWindowElement =
    {content: contentfirstHTML,maxWidth: 400 };
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);

  // 2つめのマーカオブジェクトの作成
  const secondcontentTitle='<a href=#kumano>熊野神社</a>';
  const secondcontentsecondTitle='<p>養蚕が盛んだった村の姿が浮かばれる小さな祠が祀られている神社</p>';
  const secondcontentImg='<img src="img/Kumano.jpg">';
  const contentsecondHTML=secondcontentTitle+secondcontentsecondTitle+secondcontentImg;
  // 情報ウィンドウを二つ作成
  const secondInfoWindowElement =
    {content: contentsecondHTML,maxWidth: 400 };
  const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(secondInfoWindow);

  const thirdcontentTitle='<a href=#jutoku>壽徳寺</a>';
  const thirdcontentsecondTitle='<p>平家の一族がに発願して開いたお寺</p>';
  const thirdcontentImg='<img src="img/Jutokuji.jpg">';
  const contentthirdHTML=thirdcontentTitle+thirdcontentsecondTitle+thirdcontentImg;
  // 情報ウィンドウを二つ作成
  const thirdInfoWindowElement =
    {content: contentthirdHTML,maxWidth: 400 };
  const thirdInfoWindow = new google.maps.InfoWindow(thirdInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(thirdInfoWindow);

  const fourthcontentTitle='<a href=#zenseiji>善生寺</a>';
  const fourthcontentsecondTitle='<p>青銅製の大仏さまのあるお寺</p>';
  const fourthcontentImg='<img src="img/Zenseiji.jpg">';
  const contentfourthHTML=fourthcontentTitle+fourthcontentsecondTitle+fourthcontentImg;
  // 情報ウィンドウを二つ作成
  const fourthInfoWindowElement =
    {content: contentfourthHTML,maxWidth: 400 };
  const fourthInfoWindow = new google.maps.InfoWindow(fourthInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(fourthInfoWindow);

  const fifthcontentTitle='<a href=#wakamiya>若宮神社</a>';
  const fifthcontentsecondTitle='<p>祭りや初詣で賑わう地域に大切にされている神社</p>';
  const fifthcontentImg='<img src="img/Wakamiya.jpg">';
  const contentfifthHTML=fifthcontentTitle+fifthcontentsecondTitle+fifthcontentImg;
  // 情報ウィンドウを二つ作成
  const fifthInfoWindowElement =
    {content: contentfifthHTML,maxWidth: 400 };
  const fifthInfoWindow = new google.maps.InfoWindow(fifthInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(fifthInfoWindow);


  firstMarker.addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      firstInfoWindow.open(myMap, firstMarker);
    }
  );

  // 同様に2つ目も設定する
  secondMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    secondInfoWindow.open(myMap, secondMarker);
  });

  thirdMarker.addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      thirdInfoWindow.open(myMap, thirdMarker);
    }
  );

  // 同様に2つ目も設定する
  fourthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fourthInfoWindow.open(myMap, fourthMarker);
  });
  // 同様に2つ目も設定する
  fifthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fifthInfoWindow.open(myMap, fifthMarker);
  });

}); // window.addEventListenerに登録する関数オブジェクトここまで
