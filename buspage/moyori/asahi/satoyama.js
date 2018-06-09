// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_satoyama = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.658519, lng:139.371818},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_satoyama =
    new google.maps.Map(document.getElementById('map_satoyama'), mapElement_satoyama);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_satoyama = [
    {lat:35.657864, lng:139.371923},
    {lat:35.657961, lng:139.371917},
    {lat:35.657946, lng:139.372070},
    {lat:35.658944, lng:139.372151},
    {lat:35.658979, lng:139.371575},
    {lat:35.658941, lng:139.371583}
  ];

  // Polylineのパラメータを作る
  const routeElements_satoyama = {
    path: routeCoodinates_satoyama, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_satoyama = new google.maps.Polyline(routeElements_satoyama);
  // 地図に表示する
  routePolyline_satoyama.setMap(map_satoyama);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
