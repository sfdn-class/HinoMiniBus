// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_tokotoko = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661971, lng:139.424946},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_tokotoko =
    new google.maps.Map(document.getElementById('map_tokotoko'), mapElement_tokotoko);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_tokotoko = [
    {lat:35.662306, lng:139.424917},
    {lat:35.661646, lng:139.424984},
    {lat:35.661655, lng:139.425153}
  ];

  // Polylineのパラメータを作る
  const routeElements_tokotoko = {
    path: routeCoodinates_tokotoko, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_tokotoko = new google.maps.Polyline(routeElements_tokotoko);
  // 地図に表示する
  routePolylines_tokotoko.setMap(map_tokotoko);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
