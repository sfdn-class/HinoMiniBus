// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.659311, lng:139.368127},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates = [
    {lat:35.658407, lng:139.368288},
    {lat:35.658426, lng:139.368159},
    {lat:35.659043, lng:139.368191},
    {lat:35.659054, lng:139.368019},
    {lat:35.660347, lng:139.368073}
  ];

  // Polylineのパラメータを作る
  const routeElements = {
    path: routeCoodinates, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline = new google.maps.Polyline(routeElements);
  // 地図に表示する
  routePolyline.setMap(myMap);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
