// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_nanao = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.644611, lng:139.396535},
    // ズームレベル
    zoom: 16
  };

  // 地図の作成
  const map_nanao =
    new google.maps.Map(document.getElementById('map_nanao'), mapElement_nanao);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_nanao = [
    {lat:35.645709, lng:139.390383},
    {lat:35.643895, lng:139.394617},
    {lat:35.643786, lng:139.395448},
    {lat:35.644135, lng:139.397293},
    {lat:35.644070, lng:139.398736},
    {lat:35.644785, lng:139.400007},
    {lat:35.645807, lng:139.401208},
    {lat:35.646221, lng:139.400736}
  ];

  // Polylineのパラメータを作る
  const routeElements_nanao = {
    path: routeCoodinates_nanao, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_nanao = new google.maps.Polyline(routeElements_nanao);
  // 地図に表示する
  routePolyline_nanao.setMap(map_nanao);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
