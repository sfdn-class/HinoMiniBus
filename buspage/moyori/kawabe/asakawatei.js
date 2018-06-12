// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_asakawa = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.659860+35.660585)/2, lng:(139.393383+139.390997)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_asakawa =
    new google.maps.Map(document.getElementById('map_asakawa'), mapElement_asakawa);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_asakawa = [
    {lat:35.660585, lng:139.390997},//一番橋西
    {lat:35.661081, lng:139.391506},
    {lat:35.659717, lng:139.393394},
    {lat:35.659860, lng:139.393383}//市営向川団地浅川堤
  ];

  // Polylineのパラメータを作る
  const routeElements_asakawa = {
    path: routeCoodinates_asakawa, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_asakawa = new google.maps.Polyline(routeElements_asakawa);
  // 地図に表示する
  routePolyline_asakawa.setMap(map_asakawa);

});
