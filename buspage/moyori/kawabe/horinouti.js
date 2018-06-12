// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_horinouti = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.664218+35.664568)/2, lng:(139.396212+139.395176)/2},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const map_horinouti =
    new google.maps.Map(document.getElementById('map_horinouti'), mapElement_horinouti);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_horinouti = [
    {lat:35.664218, lng:139.396212},//堀之内緑道(bus)
    {lat:35.664328, lng:139.396324},//
    {lat:35.664437, lng:139.395964},//
    {lat:35.664464, lng:139.395306},//
    {lat:35.664568, lng:139.395176}//堀之内緑道
  ];

  // Polylineのパラメータを作る
  const routeElements_horinouti = {
    path: routeCoodinates_horinouti, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_horinouti = new google.maps.Polyline(routeElements_horinouti);
  // 地図に表示する
  routePolyline_horinouti.setMap(map_horinouti);

});
