// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hirayamapark = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.640587, lng:139.383680},
    // ズームレベル
    zoom: 16.5
  };

  // 地図の作成
  const map_hirayamapark =
    new google.maps.Map(document.getElementById('map_hirayamapark'), mapElement_hirayamapark);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hirayamapark = [
    {lat:35.641266, lng:139.386714},
    {lat:35.641200, lng:139.386395},
    {lat:35.640882, lng:139.386124},
    {lat:35.640865, lng:139.385947},
    {lat:35.641085, lng:139.385058},
    {lat:35.641076, lng:139.384589},
    {lat:35.641139, lng:139.384034},
    {lat:35.640901, lng:139.383068},
    {lat:35.640923, lng:139.382435},
    {lat:35.641241, lng:139.382025},
    {lat:35.641450, lng:139.381990},
    {lat:35.641474, lng:139.381805},
    {lat:35.641273, lng:139.381638},
    {lat:35.641031, lng:139.381579},
    {lat:35.640652, lng:139.380764},
    {lat:35.640619, lng:139.380493},
    {lat:35.640443, lng:139.379949},
    {lat:35.640324, lng:139.380060},
    {lat:35.640204, lng:139.380430},
    {lat:35.640189, lng:139.380538},
    {lat:35.639953, lng:139.381051},
    {lat:35.639954, lng:139.381609},
    {lat:35.639921, lng:139.381929},
    {lat:35.639960, lng:139.381935}
  ];

  // Polylineのパラメータを作る
  const routeElements_hirayamapark = {
    path: routeCoodinates_hirayamapark, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_hirayamapark = new google.maps.Polyline(routeElements_hirayamapark);
  // 地図に表示する
  routePolyline_hirayamapark.setMap(map_hirayamapark);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
