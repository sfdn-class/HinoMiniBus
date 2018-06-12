// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_pakupakukumokumadou = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.651140, lng:139.447696},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_pakupakukumokumadou =
    new google.maps.Map(document.getElementById('map_pakupakukumokumadou'), mapElement_pakupakukumokumadou);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_pakupakukumokumadou = [
    {lat:35.651767, lng:139.446899},
    {lat:35.651680, lng:139.447231},
    {lat:35.651758, lng:139.447263},
    {lat:35.651292, lng:139.447816},
    {lat:35.650499, lng:139.448116},
    {lat:35.650390, lng:139.447990}
  ];

  // Polylineのパラメータを作る
  const routeElements_pakupakukumokumadou = {
    path: routeCoodinates_pakupakukumokumadou, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolylines_pakupakukumokumadou = new google.maps.Polyline(routeElements_pakupakukumokumadou);
  // 地図に表示する
  routePolylines_pakupakukumokumadou.setMap(map_pakupakukumokumadou);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
