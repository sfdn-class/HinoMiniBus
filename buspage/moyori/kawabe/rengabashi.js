// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_renga = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.663159+35.660585)/2, lng:(139.391074+139.390997)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_renga =
    new google.maps.Map(document.getElementById('map_renga'), mapElement_renga);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_renga = [
    {lat:35.663159, lng:139.391074},//レンガ橋
    {lat:35.662404, lng:139.390629},
    {lat:35.661759, lng:139.390608},
    {lat:35.661088, lng:139.391531},
    {lat:35.660585, lng:139.390997}//一番橋西
  ];

  // Polylineのパラメータを作る
  const routeElements_renga = {
    path: routeCoodinates_renga, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_renga = new google.maps.Polyline(routeElements_renga);
  // 地図に表示する
  routePolyline_renga.setMap(map_renga);

});
