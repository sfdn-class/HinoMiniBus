// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_jutoku = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.660719+35.656946)/2, lng:(139.400892+39.398387)/2},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_jutoku =
    new google.maps.Map(document.getElementById('map_jutoku'), mapElement_jutoku);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_jutoku = [
    {lat:35.660719, lng:139.400892},//壽徳寺
    {lat:35.660192, lng:139.401155},
    {lat:35.657525, lng:139.397668},
    {lat:35.656946, lng:139.398387}//北野街道口
  ];

  // Polylineのパラメータを作る
  const routeElements_jutoku = {
    path: routeCoodinates_jutoku, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_jutoku = new google.maps.Polyline(routeElements_jutoku);
  // 地図に表示する
  routePolyline_jutoku.setMap(map_jutoku);

});
