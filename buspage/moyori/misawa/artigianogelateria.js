// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_artigianogelateria = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.652118, lng:139.436813},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_artigianogelateria =
    new google.maps.Map(document.getElementById('map_artigianogelateria'), mapElement_artigianogelateria);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_artigianogelateria = [
    {lat:35.650940, lng:139.437435},
    {lat:35.651707, lng:139.437539},
    {lat:35.652657, lng:139.436289},
    {lat:35.653215, lng:139.435817},
    {lat:35.653333, lng:139.436053}
  ];

  // Polylineのパラメータを作る
  const routeElements_artigianogelateria = {
    path: routeCoodinates_artigianogelateria, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_artigianogelateria = new google.maps.Polyline(routeElements_artigianogelateria);
  // 地図に表示する
  routePolylines_artigianogelateria.setMap(map_artigianogelateria);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
