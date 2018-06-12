// draw_figure_polyline.js
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement_jizouson = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.661707+35.660691)/2, lng:(139.406823+139.407201)/2},
    // ズームレベル
    zoom: 18
  };

  // 地図の作成
  const map_jizouson =
    new google.maps.Map(document.getElementById('map_jizouson'), mapElement_jizouson);

  // 線の座標の配列を作る
  // 日野キャンパスから豊田駅まで
  const routeCoodinates_jizouson = [
    {lat:35.661707, lng:139.406823},//獨地蔵尊
    {lat:35.661566, lng:139.406723},

    {lat:35.660691, lng:139.407201}//南平一丁目
  ];

  // Polylineのパラメータを作る
  const routeElements_jizouson = {
    path: routeCoodinates_jizouson, //作った線の座標の配列
    geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
    strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
    strokeOpacity: 0.5, //透過の設定．0.0〜1.0
    strokeWeight: 5 //線の太さ
  };
  // 線のオブジェクトを作る
  const routePolyline_jizouson = new google.maps.Polyline(routeElements_jizouson);
  // 地図に表示する
  routePolyline_jizouson.setMap(map_jizouson);

});
