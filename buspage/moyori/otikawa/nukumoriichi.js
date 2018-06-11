// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_nukumoriichi = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.652341, lng:139.436332},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_nukumoriichi =
    new google.maps.Map(document.getElementById('map_nukumoriichi'), mapElement_nukumoriichi);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_nukumoriichi = [
    {lat:35.653042, lng:139.435945},
    {lat:35.651867, lng:139.437309},
    {lat:35.651496, lng:139.437148},
    {lat:35.651465, lng:139.437244}
  ];

  // Polylineのパラメータを作る
  const routeElements_nukumoriichi = {
    path: routeCoodinates_nukumoriichi, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_nukumoriichi = new google.maps.Polyline(routeElements_nukumoriichi);
  // 地図に表示する
  routePolylines_nukumoriichi.setMap(map_nukumoriichi);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
