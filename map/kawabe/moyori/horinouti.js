// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.664218+35.664568)/2, lng:(139.396212+139.395176)/2},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates = [
    {lat:35.664218, lng:139.396212},//堀之内緑道(bus)
    {lat:35.664328, lng:139.396324},//
    {lat:35.664437, lng:139.395964},//
    {lat:35.664464, lng:139.395306},//
    {lat:35.664568, lng:139.395176}//堀之内緑道
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
    title: '堀之内緑道',
    // 1号館の緯度経度
    position:{lat:35.664568, lng:139.395176},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: '堀之内緑道(バス)',
    position:{lat:35.664218, lng:139.396212},
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
    {content: '<p>堀之内緑道</p>'};
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);
  // 2つめのマーカオブジェクトの作成
  const secondInfoWindowElement =
    {content: '<p>堀之内緑道(バス)</p>'};
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
