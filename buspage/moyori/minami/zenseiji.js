// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_zenseiji = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.663837+35.662657)/2, lng:(139.390100+139.388994)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_zenseiji =
    new google.maps.Map(document.getElementById('map_zenseiji'), mapElement_zenseiji);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_zenseiji = [
    {lat:35.663837, lng:139.390100},//東豊田
    {lat:35.663115, lng:139.389297},
    {lat:35.662871, lng:139.389404},
    {lat:35.662657, lng:139.388994}//善生寺
  ];

  // Polylineのパラメータを作る
  const routeElements_zenseiji = {
    path: routeCoodinates_zenseiji, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_zenseiji = new google.maps.Polyline(routeElements_zenseiji);
  // 地図に表示する
  routePolyline_zenseiji.setMap(map_zenseiji);

});
