// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_cafededango = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661891, lng:139.412685},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_cafededango =
    new google.maps.Map(document.getElementById('map_cafededango'), mapElement_cafededango);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_cafededango = [
    {lat:35.662017, lng:139.412132},
    {lat:35.661939, lng:139.412127},
    {lat:35.661887, lng:139.412763},
    {lat:35.661652, lng:139.413101}
  ];

  // Polylineのパラメータを作る
  const routeElements_cafededango = {
    path: routeCoodinates_cafededango, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_cafededango = new google.maps.Polyline(routeElements_cafededango);
  // 地図に表示する
  routePolylines_cafededango.setMap(map_cafededango);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
