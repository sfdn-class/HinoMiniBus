// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_inoue = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.679463, lng:139.397515},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_inoue =
    new google.maps.Map(document.getElementById('map_inoue'), mapElement_inoue);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_inoue = [
    {lat:35.680096, lng:139.397161},
    {lat:35.680120, lng:139.397016},
    {lat:35.679978, lng:139.396981},
    {lat:35.679815, lng:139.397525},
    {lat:35.679547, lng:139.397504},
    {lat:35.679272, lng:139.397571},
    {lat:35.679006, lng:139.397512},
    {lat:35.678864, lng:139.398097}
  ];

  // Polylineのパラメータを作る
  const routeElements_inoue = {
    path: routeCoodinates_inoue, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_inoue = new google.maps.Polyline(routeElements_inoue);
  // 地図に表示する
  routePolyline_inoue.setMap(map_inoue);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});