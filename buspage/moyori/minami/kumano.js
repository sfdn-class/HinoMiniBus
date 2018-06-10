// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_kumano = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.654540+35.656946)/2, lng:(139.398387+139.397083)/2},
    // ズームレベル
    zoom: 17
  };

  // 地図の作成
  const map_kumano =
    new google.maps.Map(document.getElementById('map_kumano'), mapElement_kumano);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_kumano = [
    {lat:35.656946, lng:139.398387},//北野街道口
    {lat:35.656223, lng:139.398728},
    {lat:35.654880, lng:139.397043},
    {lat:35.654645, lng:139.397258},
    {lat:35.654540, lng:139.397083}//熊野神社
  ];

  // Polylineのパラメータを作る
  const routeElements_kumano = {
    path: routeCoodinates_kumano, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_kumano = new google.maps.Polyline(routeElements_kumano);
  // 地図に表示する
  routePolyline_kumano.setMap(map_kumano);

});
