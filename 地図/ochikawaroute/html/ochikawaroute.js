// ochikawaroute.js

window.addEventListener('load', () => {
  //地図表示に必要なパラメータを保持するconstオブジェクト
  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.657382, lng:139.431354},
    // ズームレベル
    zoom: 14
  };

  // 地図を保持するためのオブジェクトの作成
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される



  // KMLを表示するためのレイヤーのプロパティ
    const kmlLayerElements = {
      // KMLファイルのURL
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/ochikawaroute.kml',
      // インターネットから探せるサーバ上においておき，そのURLを記述する．
      //ルートの場合関係ないが，レイヤ上のオブジェクトの方がInfoWindowよりも上にくる（抑制する）
      suppressInfoWindows: true,
      // 地図オブジェクト
      map: myMap
    };
    // KMLを表示するためのレイヤーのコンストラクタを実行する．
    // これを実行すると，Googleのシステムが上記KMLファイルを読み込んで来て，表示してくれる
    // もちろん複数作ることもできる．
    const kmlLayer = new google.maps.KmlLayer(kmlLayerElements);



  // 日野キャンパス1号館にマーカを表示するためのパラメータオブジェクト
  const firstMarkerElement = {

    title: '落川１',
    position: {lat:35.661665, lng:139.413104},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: '落川２',
    position: {lat:35.662945, lng:139.418003},
    map: myMap
  };

  const thirdMarkerElement = {
    title: '落川３',
    position: {lat:35.662067, lng:139.419497},
    map: myMap
  };

  const fourthMarkerElement = {
    title: '落川４',
    position: {lat:35.661644, lng:139.422200},
    map: myMap
  };

  const fifthMarkerElement = {
    title: '落川５',
    position: {lat:35.662284, lng:139.424900},
    map: myMap
  };

  const　sixthMarkerElement = {
    title: '落川６',
    position: {lat:35.662834, lng:139.426302},
    map: myMap
  };

  const　seventhMarkerElement = {
    title: '落川７',
    position: {lat:35.660814, lng:139.426700},
    map: myMap
  };

  const　eighthMarkerElement = {
    title: '落川８',
    position: {lat:35.660367, lng:139.425800},
    map: myMap
  };

  const　ninthMarkerElement = {
    title: '落川９',
    position: {lat:35.660125, lng:139.426897},
    map: myMap
  };

  const　tenthMarkerElement = {
    title: '落川１０',
    position: {lat:35.657961, lng:139.430700},
    map: myMap
  };

  const　eleventhMarkerElement = {
    title: '落川１１',
    position: {lat:35.656979, lng:139.431395},
    map: myMap
  };

  const　twelfthMarkerElement = {
    title: '落川１２',
    position: {lat:35.653207, lng:139.435905},
    map: myMap
  };

  const　thirteenthMarkerElement = {
    title: '落川１３',
    position: {lat:35.651229, lng:139.439900},
    map: myMap
  };

  const　fourteenthMarkerElement = {
    title: '落川１４',
    position: {lat:35.650584, lng:139.444101},
    map: myMap
  };

  const　fifteenthMarkerElement = {
    title: '落川１５',
    position: {lat:35.651425, lng:139.446701},
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
  const seventhMarker =
    new google.maps.Marker(seventhMarkerElement);
  const eighthMarker =
    new google.maps.Marker(eighthMarkerElement);
  const ninthMarker =
    new google.maps.Marker(ninthMarkerElement);
  const tenthMarker =
    new google.maps.Marker(tenthMarkerElement);
  const eleventhMarker =
    new google.maps.Marker(eleventhMarkerElement);
  const twelfthMarker =
    new google.maps.Marker(twelfthMarkerElement);
  const thirteenthMarker =
    new google.maps.Marker(thirteenthMarkerElement);
  const fourteenthMarker =
    new google.maps.Marker(fourteenthMarkerElement);
  const fifteenthMarker =
    new google.maps.Marker(fifteenthMarkerElement);

  // 情報ウィンドウを二つ作成
  const firstInfoWindowElement =
    {content: '<p>高幡不動駅（落川１）</p>'};
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);
  // 2つめのマーカオブジェクトの作成
  const secondInfoWindowElement =
    {content: '<p>高幡北（落川２）</p>'};
  const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(secondInfoWindow)

  const thirdInfoWindowElement =
    {content: '<p>ねんも公園北（落川３）</p>'};
  const thirdInfoWindow = new google.maps.InfoWindow(thirdInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(thirdInfoWindow)

  const fourthInfoWindowElement =
    {content: '<p>第八小学校西（落川４）</p>'};
  const fourthInfoWindow = new google.maps.InfoWindow(fourthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fourthInfoWindow)

  const fifthInfoWindowElement =
    {content: '<p>みさわ保育園北（落川５）</p>'};
  const fifthInfoWindow = new google.maps.InfoWindow(fifthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fifthInfoWindow)

  const sixthInfoWindowElement =
    {content: '<p>落川通り西（落川６）</p>'};
  const sixthInfoWindow = new google.maps.InfoWindow(sixthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(sixthInfoWindow)

  const seventhInfoWindowElement =
    {content: '<p>金田公園（落川７）</p>'};
  const seventhInfoWindow = new google.maps.InfoWindow(seventhInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(seventhInfoWindow)

  const eighthInfoWindowElement =
    {content: '<p>金田（落川８）</p>'};
  const eighthInfoWindow = new google.maps.InfoWindow(eighthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(eighthInfoWindow)

  const ninthInfoWindowElement =
    {content: '<p>落川（落川９）</p>'};
  const ninthInfoWindow = new google.maps.InfoWindow(ninthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(ninthInfoWindow)

  const tenthInfoWindowElement =
    {content: '<p>百草園駅北（落川１０）</p>'};
  const tenthInfoWindow = new google.maps.InfoWindow(tenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(tenthInfoWindow)

  const eleventhInfoWindowElement =
    {content: '<p>百草園駅（落川１１）</p>'};
  const eleventhInfoWindow = new google.maps.InfoWindow(eleventhInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(eleventhInfoWindow)

  const twelfthInfoWindowElement =
    {content: '<p>桜ヶ丘車庫（落川１２）</p>'};
  const twelfthInfoWindow = new google.maps.InfoWindow(twelfthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twelfthInfoWindow)

  const thirteenthInfoWindowElement =
    {content: '<p>一の宮ストア（落川１３）</p>'};
  const thirteenthInfoWindow = new google.maps.InfoWindow(thirteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(thirteenthInfoWindow)

  const fourteenthInfoWindowElement =
    {content: '<p>桜ヶ丘診療所（落川１４）</p>'};
  const fourteenthInfoWindow = new google.maps.InfoWindow(fourteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fourteenthInfoWindow)

  const fifteenthInfoWindowElement =
    {content: '<p>聖蹟桜ヶ丘駅（落川１５）</p>'};
  const fifteenthInfoWindow = new google.maps.InfoWindow(fifteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fifteenthInfoWindow)


  firstMarker.addListener('click', ()=> { //関数オブジェクトを記述開始
    //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
      // 配列に登録されている全ての情報ウィンドウを一度閉じる
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      // 全部閉じ終わったら，あらてめて最初のマーカに登録されている情報ウィンドウを開く
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

  thirdMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    thirdInfoWindow.open(myMap, thirdMarker);
  });

  fourthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fourthInfoWindow.open(myMap, fourthMarker);
  });

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

  seventhMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    seventhInfoWindow.open(myMap, seventhMarker);
  });

  eighthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    eighthInfoWindow.open(myMap, eighthMarker);
  });

  ninthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    ninthInfoWindow.open(myMap, ninthMarker);
  });

  tenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    tenthInfoWindow.open(myMap, tenthMarker);
  });

  eleventhMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    eleventhInfoWindow.open(myMap, eleventhMarker);
  });

  twelfthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twelfthInfoWindow.open(myMap, twelfthMarker);
  });

  thirteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    thirteenthInfoWindow.open(myMap, thirteenthMarker);
  });

  fourteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fourteenthInfoWindow.open(myMap, fourteenthMarker);
  });

  fifteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    fifteenthInfoWindow.open(myMap, fifteenthMarker);
  });

}); // window.addEventListenerに登録する関数オブジェクトここまで
