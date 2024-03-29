// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_furusato = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.672233, lng:139.395713},
    // ズームレベル
    zoom: 17.5
  };

  // 地図の作成
  const map_furusato =
    new google.maps.Map(document.getElementById('map'), mapElement_furusato);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_furusato = [
    {lat:35.670966, lng:139.394791},
    {lat:35.671474, lng:139.394137},
    {lat:35.672672, lng:139.396648},
    {lat:35.673156, lng:139.396326},
    {lat:35.673310, lng:139.396638},
    {lat:35.673528, lng:139.396525}
  ];

  // Polylineのパラメータを作る
  const routeElements_furusato = {
    path: routeCoodinates_furusato, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_furusato = new google.maps.Polyline(routeElements_furusato);
  // 地図に表示する
  routePolyline_furusato.setMap(map_furusato);

  // routePolyline.setMap(null); を実行すると，地図上から消える
});
