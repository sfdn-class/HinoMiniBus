// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_minmin = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658982, lng:139.371161},
    // ズームレベル
    zoom: 19
  };

  // 地図の作成
  const map_minmin =
    new google.maps.Map(document.getElementById('map_minmin'), mapElement_minmin);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_minmin = [
    {lat:35.659113, lng:139.370752},
    {lat:35.659032, lng:139.370748},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_minmin = {
    path: routeCoodinates_minmin, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_minmin = new google.maps.Polyline(routeElements_minmin);
  // 地図に表示する
  routePolyline_minmin.setMap(map_minmin);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});