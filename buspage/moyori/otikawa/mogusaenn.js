// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_mogusaenn = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.654938, lng:139.428429},
    // ズームレベル
    zoom: 17
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

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
