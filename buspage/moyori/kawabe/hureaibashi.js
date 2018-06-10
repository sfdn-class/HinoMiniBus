// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_fureai = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.666341+35.665476)/2, lng:(139.413669+139.406911)/2},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const map_fureai =
    new google.maps.Map(document.getElementById('map_fureai'), mapElement_fureai);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_fureai = [
    {lat:35.665476, lng:139.406911},//高幡橋西
    {lat:35.665369, lng:139.408170},
    {lat:35.665369, lng:139.408170},
    {lat:35.666938, lng:139.413127},
    {lat:35.666341, lng:139.413669}//ふれあい場所
  ];

  // Polylineのパラメータを作る
  const routeElements_fureai = {
    path: routeCoodinates_fureai, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_fureai = new google.maps.Polyline(routeElements_fureai);
  // 地図に表示する
  routePolyline_fureai.setMap(map_fureai);

});
