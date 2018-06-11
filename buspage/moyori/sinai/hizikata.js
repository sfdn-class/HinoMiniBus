// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_hizikata = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.670483, lng:139.420025},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const hizikata =
    new google.maps.Map(document.getElementById('map_hizikata'), mapElement_hizikata);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates = [
    {lat:35.669770, lng:139.419518},
    {lat:35.669741, lng:139.419315},
    {lat:35.670011, lng:139.419202},
    {lat:35.670179, lng:139.419881},
    {lat:35.670393, lng:139.420541},
    {lat:35.671170, lng:139.420058},
    {lat:35.671153, lng:139.419988}
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
  routePolyline.setMap(hizikata);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
