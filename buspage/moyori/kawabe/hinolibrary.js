// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hinolibrary = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.657252+35.655892)/2, lng:(139.383899+139.382337)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_hinolibrary =
    new google.maps.Map(document.getElementById('map_hinolibrary'), mapElement_hinolibrary);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hinolibrary = [
    {lat:35.657252, lng:139.383899},//豊田駅南入口
    {lat:35.657145, lng:139.383984},
    {lat:35.656724, lng:139.382462},
    {lat:35.656526, lng:139.382814},
    {lat:35.656377, lng:139.382792},
    {lat:35.655892, lng:139.382337}//中央図書館下湧水
  ];

  // Polylineのパラメータを作る
  const routeElements_hinolibrary = {
    path: routeCoodinates_hinolibrary, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_hinolibrary = new google.maps.Polyline(routeElements_hinolibrary);
  // 地図に表示する
  routePolyline_hinolibrary.setMap(map_hinolibrary);

});
