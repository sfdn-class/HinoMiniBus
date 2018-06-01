window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.666341+35.663159+35.659860+35.664091+35.655892+35.664568)/6, lng:(139.413669+139.391074+139.393383+139.397401+139.382337+139.395176)/6},
    zoom: 16
  };

  const myMap =
    new google.maps.Map(document.getElementById('mapKawabe'), mapElement);

  // KMLを表示するためのレイヤーのプロパティ
  const kmlLayerElements = {
    // KMLファイルのURL
    url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/kawabehorinouchiroute.kml',
    // インターネットから探せるサーバ上においておき，そのURLを記述する．
    //ルートの場合関係ないが，レイヤ上のオブジェクトの方がInfoWindowよりも上にくる（抑制する）
    suppressInfoWindows: true,
    // 地図オブジェクト
    map: myMap
  };

  const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);


  const firstMarkerElement = {
    //タイトルをつける
    title: 'ふれあい橋',
    // 1号館の緯度経度
    position: {lat:35.666341, lng:139.413669},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: 'レンガ橋',
    position:{lat:35.663159, lng:139.391074},
    map: myMap
  };
  const thirdMarkerElement = {
    title: '市営向川団地浅川堤',
    position: {lat:35.659860, lng:139.393383},
    map: myMap
  };
  const fourthMarkerElement = {
    title: '日枝神社',
    position:{lat:35.664091, lng:139.397401},
    map: myMap
  };
  const fifthMarkerElement = {
    title: '中央図書館下湧水',
    position:{lat:35.655892, lng:139.382337},
    map: myMap

  };
  const sixthMarkerElement = {
    title: '堀之内緑道',
    position:{lat:35.664568, lng:139.395176},
    map: myMap
  };

  //情報ウィンドウオブジェクトを格納する配列を，グローバルに作っておく
  //要素数ゼロの配列を作る
  window.infoWindowArray = new Array();

  // マーカオブジェクト2つを作成
  const firstMarker =
    new google.maps.Marker(firstMarkerElement);
  const secondMarker =
    new google.maps.Marker(secondMarkerElement);
  const thirdMarker =
    new google.maps.Marker(thirdMarkerElement);
  const fourthMarker =
    new google.maps.Marker(fourthMarkerElement);
  const fifthMarker =
    new google.maps.Marker(fifthMarkerElement);
  const sixthMarker =
    new google.maps.Marker(sixthMarkerElement);

  const firstcontentTitle='<a href=#hureaibashi>ふれあい橋</a>';
  const firstcontentsecondTitle='<p>富士山のビュースポット</p>';
  const firstcontentImg='<img src="img/Hureaibashi.jpg">';
  const contentfirstHTML=firstcontentTitle+firstcontentsecondTitle+firstcontentImg;
  // 情報ウィンドウを二つ作成
  const firstInfoWindowElement =
    {content: contentfirstHTML,maxWidth: 400 };
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);

  // 2つめのマーカオブジェクトの作成
  const secondcontentTitle='<a href=#Rengabasi>レンガ橋</a>';
  const secondcontentsecondTitle='<p>豊田用水に架けられた小さなレンガでできた丸橋</p>';
  const secondcontentImg='<img src="img/Rengabasi.jpg">';
  const contentsecondHTML=secondcontentTitle+secondcontentsecondTitle+secondcontentImg;
  // 情報ウィンドウを二つ作成
  const secondInfoWindowElement =
    {content: contentsecondHTML,maxWidth: 400 };
  const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(secondInfoWindow);

  const thirdcontentTitle='<a href=#Asakawatei>市営向川団地浅川堤</a>';
  const thirdcontentsecondTitle='<p>大正時代に八王子市北野まで続いていた桜並木</p>';
  const thirdcontentImg='<img src="img/AsakawaSakura.jpg">';
  const contentthirdHTML=thirdcontentTitle+thirdcontentsecondTitle+thirdcontentImg;
  // 情報ウィンドウを二つ作成
  const thirdInfoWindowElement =
    {content: contentthirdHTML,maxWidth: 400 };
  const thirdInfoWindow = new google.maps.InfoWindow(thirdInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(thirdInfoWindow);

  const fourthcontentTitle='<a href=#Hieda>日枝神社</a>';
  const fourthcontentsecondTitle='<p>日野市の天然記念物の樹歴３００年以上のムクノキがある神社</p>';
  const fourthcontentImg='<img src="img/Hiedajinja.jpg">';
  const contentfourthHTML=fourthcontentTitle+fourthcontentsecondTitle+fourthcontentImg;
  // 情報ウィンドウを二つ作成
  const fourthInfoWindowElement =
    {content: contentfourthHTML,maxWidth: 400 };
  const fourthInfoWindow = new google.maps.InfoWindow(fourthInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(fourthInfoWindow);

  const fifthcontentTitle='<a href=#Wakimizu>中央図書館下湧水</a>';
  const fifthcontentsecondTitle='<p>東京の名湧水５７選に指定される湧水</p>';
  const fifthcontentImg='<img src="img/Hinotosyowakimizu.jpg" Height="300">';
  const contentfifthHTML=fifthcontentTitle+fifthcontentsecondTitle+fifthcontentImg;
  // 情報ウィンドウを二つ作成
  const fifthInfoWindowElement =
    {content: contentfifthHTML,maxWidth: 400 };
  const fifthInfoWindow = new google.maps.InfoWindow(fifthInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(fifthInfoWindow);

  const sixthcontentTitle='<a href=#HorinoutiRyokudou>堀之内緑道</a>';
  const sixthcontentsecondTitle='<p>豊田用水に沿って歩く道</p>';
  const sixthcontentImg='<img src="img/HorinoutiRyokudou.jpg">';
  const contentsixthHTML=sixthcontentTitle+sixthcontentsecondTitle+sixthcontentImg;
  // 情報ウィンドウを二つ作成
  const sixthInfoWindowElement =
    {content: contentsixthHTML,maxWidth: 400 };
  const sixthInfoWindow = new google.maps.InfoWindow(sixthInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(sixthInfoWindow);


  firstMarker.addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      firstInfoWindow.open(myMap, firstMarker);
    }
  );

  // 同様に2つ目も設定する
  secondMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    secondInfoWindow.open(myMap, secondMarker);
  });

  thirdMarker.addListener('click', ()=> {
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      thirdInfoWindow.open(myMap, thirdMarker);
    }
  );

  // 同様に2つ目も設定する
  fourthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fourthInfoWindow.open(myMap, fourthMarker);
  });
  // 同様に2つ目も設定する
  fifthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fifthInfoWindow.open(myMap, fifthMarker);
  });

  sixthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    sixthInfoWindow.open(myMap, sixthMarker);
  });

}); // window.addEventListenerに登録する関数オブジェクトここまで
