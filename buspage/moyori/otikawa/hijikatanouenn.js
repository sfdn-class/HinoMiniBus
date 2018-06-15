// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hijikatanouenn = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.662413, lng:139.425065},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_hijikatanouenn =
    new google.maps.Map(document.getElementById('map_hijikatanouenn'), mapElement_hijikatanouenn);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_tokotoko = [
    {lat:35.662287, lng:139.424926},
    {lat:35.662440, lng:139.424913},
    {lat:35.662425, lng:139.425275}
  ];

  // Polylineのパラメータを作る
  const routeElements_hijikatanouenn = {
    path: routeCoodinates_hijikatanouenn, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_hijikatanouenn = new google.maps.Polyline(routeElements_hijikatanouenn);
  // 地図に表示する
  routePolylines_hijikatanouenn.setMap(map_hijikatanouenn);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
