// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hinozyuku = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.678637, lng:139.399089},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_hinozyuku =
    new google.maps.Map(document.getElementById('map_hinozyuku'), mapElement_hinozyuku);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_hinozyuku = [
    {lat:35.678864, lng:139.398097},
    {lat:35.678493, lng:139.399742},
    {lat:35.678114, lng:139.399645}
  ];

  // Polylineのパラメータを作る
  const routeElements_hinozyuku = {
    path: routeCoodinates, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_hinozyuku = new google.maps.Polyline(routeElements_hinozyuku);
  // 地図に表示する
  routePolyline_hinozyuku.setMap(map_hinozyuku);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
