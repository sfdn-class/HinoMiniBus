// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hieda = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.665032+35.664091)/2, lng:(139.398596+139.397401)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_hieda =
    new google.maps.Map(document.getElementById('map_hieda'), mapElement_hieda);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hieda = [
    {lat:35.665032, lng:139.398596},//日野市民プール
    {lat:35.664943, lng:139.397951},
    {lat:35.664572, lng:139.398171},
    {lat:35.664091, lng:139.397401}//日枝神社
  ];

  // Polylineのパラメータを作る
  const routeElements_hieda = {
    path: routeCoodinates_hieda, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_hieda = new google.maps.Polyline(routeElements_hieda);
  // 地図に表示する
  routePolyline_hieda.setMap(map_hieda);

});
