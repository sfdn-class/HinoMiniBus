// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_kattyan = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658959, lng:139.371403},
    // ズームレベル
    zoom: 20
  };

  // 地図の作成
  const map_kattyan =
    new google.maps.Map(document.getElementById('map_kattyan'), mapElement_kattyan);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_kattyan = [
    {lat:35.659055, lng:139.371251},
    {lat:35.659003, lng:139.371269},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_kattyan = {
    path: routeCoodinates_kattyan, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_kattyan = new google.maps.Polyline(routeElements_kattyan);
  // 地図に表示する
  routePolyline_kattyan.setMap(map_kattyan);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
