// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_asahi = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.660069, lng:139.368074},
    // ズームレベル
    zoom: 19
  };

  // 地図の作成
  const map_asahi =
    new google.maps.Map(document.getElementById('map_asahi'), mapElement_asahi);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_asahi = [
    {lat:35.659715, lng:139.367973},
    {lat:35.659744, lng:139.368058},
    {lat:35.660347, lng:139.368073}
  ];

  // Polylineのパラメータを作る
  const routeElements_asahi = {
    path: routeCoodinates_asahi, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_asahi = new google.maps.Polyline(routeElements_asahi);
  // 地図に表示する
  routePolyline_asahi.setMap(map_asahi);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
