// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.657252+35.655892)/2, lng:(139.383899+139.382337)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates = [
    {lat:35.657252, lng:139.383899},//豊田駅南入口
    {lat:35.657145, lng:139.383984},
    {lat:35.656724, lng:139.382462},
    {lat:35.656526, lng:139.382814},
    {lat:35.656377, lng:139.382792},
    {lat:35.655892, lng:139.382337}//中央図書館下湧水
  ];

  // Polylineのパラメータを作る
  const routeElements = {
    path: routeCoodinates, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 2 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline = new google.maps.Polyline(routeElements);
  // 地図に表示する
  routePolyline.setMap(myMap);

  // routePolyline.setMap(null); を実行すると，地図上から消える

  const firstMarkerElement = {
    //タイトルをつける
    title: '中央図書館下湧水（日野市）',
    // 1号館の緯度経度
    position:{lat:35.655892, lng:139.382337},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: '豊田駅南入口',
    position:{lat:35.657252, lng:139.383899},
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

  // 情報ウィンドウを二つ作成
  const firstInfoWindowElement =
    {content: '<p>中央図書館下湧水</p>'};
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);
  // 2つめのマーカオブジェクトの作成
  const secondInfoWindowElement =
    {content: '<p>豊田駅南入口</p>'};
  const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(secondInfoWindow)

  firstMarker.addListener('click', ()=> { //関数オブジェクトを記述開始
    //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
      // 配列に登録されている全ての情報ウィンドウを一度閉じる
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      // 全部閉じ終わったら，あらてめて最初のマーカに登録されている情報ウィンドウを開く
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
});
