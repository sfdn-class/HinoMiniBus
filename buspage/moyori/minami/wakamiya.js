// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_wakamiya = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.663837+35.662657)/2, lng:(139.390100+139.388994)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_wakamiya =
    new google.maps.Map(document.getElementById('map_wakamiya'), mapElement_wakamiya);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_wakamiya = [
    {lat:35.663837, lng:139.390100},//東豊田
    {lat:35.663163, lng:139.389267},
    {lat:35.663512, lng:139.388613},
    {lat:35.663338, lng:139.387680},
    {lat:35.663101, lng:139.387797}//若宮神社
  ];

  // Polylineのパラメータを作る
  const routeElements_wakamiya = {
    path: routeCoodinates_wakamiya, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_wakamiya = new google.maps.Polyline(routeElements_wakamiya);
  // 地図に表示する
  routePolyline_wakamiya.setMap(map_wakamiya);

});
