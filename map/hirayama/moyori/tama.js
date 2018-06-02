// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.646831, lng:139.397406},
    // ズームレベル
    zoom: 15.5
  };

  // 地図の作成
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates = [
    {lat:35.645709, lng:139.390383},
    {lat:35.643895, lng:139.394617},
    {lat:35.643786, lng:139.395448},
    {lat:35.644135, lng:139.397293},
    {lat:35.644070, lng:139.398736},
    {lat:35.644785, lng:139.400007},
    {lat:35.647430, lng:139.403141},
    {lat:35.647545, lng:139.403431},
    {lat:35.648452, lng:139.403798},
    {lat:35.649023, lng:139.403884},
    {lat:35.649215, lng:139.403648},
    {lat:35.649450, lng:139.403138},
    {lat:35.649515, lng:139.402248}
  ];

  // Polylineのパラメータを作る
  const routeElements = {
    path: routeCoodinates, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline = new google.maps.Polyline(routeElements);
  // 地図に表示する
  routePolyline.setMap(myMap);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
