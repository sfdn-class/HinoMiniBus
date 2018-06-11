// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_inouebakery = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.650729, lng:139.443448},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_inouebakery =
    new google.maps.Map(document.getElementById('map_inouebakery'), mapElement_inouebakery);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_inouebakery = [
    {lat:35.650672, lng:139.442847},
    {lat:35.650838, lng:139.442890},
    {lat:35.650637, lng:139.444081}
  ];

  // Polylineのパラメータを作る
  const routeElements_inouebakery = {
    path: routeCoodinates_inouebakery, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_inouebakery = new google.maps.Polyline(routeElements_inouebakery);
  // 地図に表示する
  routePolylines_inouebakery.setMap(map_inouebakery);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
