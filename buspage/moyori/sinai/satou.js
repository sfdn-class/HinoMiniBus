// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_satou = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.678032, lng:139.399084},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_satou =
    new google.maps.Map(document.getElementById('map_satou'), mapElement_satou);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_satou = [
    {lat:35.678864, lng:139.398097},
    {lat:35.678834, lng:139.398207},
    {lat:35.677880, lng:139.398040},
    {lat:35.677708, lng:139.398493},
    {lat:35.677612, lng:139.398571},
    {lat:35.677228, lng:139.399793},
    {lat:35.677407, lng:139.399849}
  ];

  // Polylineのパラメータを作る
  const routeElements_satou = {
    path: routeCoodinates_satou, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_satou = new google.maps.Polyline(routeElements_satou);
  // 地図に表示する
  routePolyline_satou.setMap(map_satou);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
