// misawadairoute.js

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
      url: 'http://cad.lolipop.jp/data/hino_mini_bus/route/misawadairoute.kml',
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

    title: '三沢台１',
    position: {lat:35.661665, lng:139.413104},
    // どのマップオブジェクトに表示するか
    map: myMap
  };
  // ダイレックスにマーカを表示するためのパラメータ
  const secondMarkerElement = {
    title: '三沢台２',
    position: {lat:35.659087, lng:139.418102},
    map: myMap
  };

  const thirdMarkerElement = {
    title: '三沢台３',
    position: {lat:35.658753, lng:139.423500},
    map: myMap
  };

  const fourthMarkerElement = {
    title: '三沢台４',
    position: {lat:35.657673, lng:139.424500},
    map: myMap
  };

  const fifthMarkerElement = {
    title: '三沢台５',
    position: {lat:35.655923, lng:139.424801},
    map: myMap
  };

  const　sixthMarkerElement = {
    title: '三沢台６',
    position: {lat:35.653753, lng:139.423199},
    map: myMap
  };

  const　seventhMarkerElement = {
    title: '三沢台７',
    position: {lat:35.652223, lng:139.421899},
    map: myMap
  };

  const　eighthMarkerElement = {
    title: '三沢台８',
    position: {lat:35.650612, lng:139.420899},
    map: myMap
  };

  const　ninthMarkerElement = {
    title: '三沢台９',
    position: {lat:35.650003, lng:139.423300},
    map: myMap
  };

  const　tenthMarkerElement = {
    title: '三沢台１０',
    position: {lat:35.649722, lng:139.424398},
    map: myMap
  };

  const　eleventhMarkerElement = {
    title: '三沢台１１',
    position: {lat:35.648612, lng:139.427100},
    map: myMap
  };

  const　twelfthMarkerElement = {
    title: '三沢台１２',
    position: {lat:35.647581, lng:139.429394},
    map: myMap
  };

  const　thirteenthMarkerElement = {
    title: '三沢台１３',
    position: {lat:35.647246, lng:139.431989},
    map: myMap
  };

  const　fourteenthMarkerElement = {
    title: '三沢台１４',
    position: {lat:35.645733, lng:139.432200},
    map: myMap
  };

  const　fifteenthMarkerElement = {
    title: '三沢台１５',
    position: {lat:35.644283, lng:139.433500},
    map: myMap
  };

  const　sixteenthMarkerElement = {
    title: '三沢台１６',
    position: {lat:35.645584, lng:139.435098},
    map: myMap
  };

  const　seventeenthMarkerElement = {
    title: '三沢台１７',
    position: {lat:35.648653, lng:139.436900},
    map: myMap
  };

  const　eighteenthMarkerElement = {
    title: '三沢台１８',
    position: {lat:35.651202, lng:139.437401},
    map: myMap
  };

  const　nineteenthMarkerElement = {
    title: '三沢台１９',
    position: {lat:35.651223, lng:139.439899},
    map: myMap
  };

  const　twentiethMarkerElement = {
    title: '三沢台２０',
    position: {lat:35.650582, lng:139.444100},
    map: myMap
  };

  const　twenty_firstMarkerElement = {
    title: '三沢台２１',
    position: {lat:35.651425, lng:139.446701},
    map: myMap
  };

  const　twenty_secondMarkerElement = {
    title: '観光地１',
    position: {lat:35.650680, lng:139.442858},
    map: myMap
  };

  const　twenty_thirdMarkerElement = {
    title: '観光地２',
    position: {lat:35.662021, lng:139.412141},
    map: myMap
  };

  const　twenty_fourthMarkerElement = {
    title: '観光地３',
    position: {lat:35.650391, lng:139.447989},
    map: myMap
  };

  const　twenty_fifthMarkerElement = {
    title: '観光地４',
    position: {lat:35.653331, lng:139.436061},
    map: myMap
  };

  /*const　twenty_secondMarkerElement = {
    title: '観光地１',
    position: {lat:35.647830, lng:139.429384},
    map: myMap
  };*/

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
  const sixteenthMarker =
    new google.maps.Marker(sixteenthMarkerElement);
  const seventeenthMarker =
    new google.maps.Marker(seventeenthMarkerElement);
  const eighteenthMarker =
    new google.maps.Marker(eighteenthMarkerElement);
  const nineteenthMarker =
    new google.maps.Marker(nineteenthMarkerElement);
  const twentiethMarker =
    new google.maps.Marker(twentiethMarkerElement);
  const twenty_firstMarker =
    new google.maps.Marker(twenty_firstMarkerElement);
  const twenty_secondMarker =
    new google.maps.Marker(twenty_secondMarkerElement);
  const twenty_thirdMarker =
    new google.maps.Marker(twenty_thirdMarkerElement);
  const twenty_fourthMarker =
    new google.maps.Marker(twenty_fourthMarkerElement);
  const twenty_fifthMarker =
    new google.maps.Marker(twenty_fifthMarkerElement);

  // 情報ウィンドウを二つ作成
  const firstInfoWindowElement =
    {content: '<p>高幡不動駅（三沢台１）</p>'};
  const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
  //配列に追加する
  window.infoWindowArray.push(firstInfoWindow);
  // 2つめのマーカオブジェクトの作成
  const secondInfoWindowElement =
    {content: '<p>三沢（三沢台２）</p>'};
  const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(secondInfoWindow)

  const thirdInfoWindowElement =
    {content: '<p>変電所前（三沢台３）</p>'};
  const thirdInfoWindow = new google.maps.InfoWindow(thirdInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(thirdInfoWindow)

  const fourthInfoWindowElement =
    {content: '<p>三沢台下（三沢台４）</p>'};
  const fourthInfoWindow = new google.maps.InfoWindow(fourthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fourthInfoWindow)

  const fifthInfoWindowElement =
    {content: '<p>三沢台（三沢台５）</p>'};
  const fifthInfoWindow = new google.maps.InfoWindow(fifthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fifthInfoWindow)

  const sixthInfoWindowElement =
    {content: '<p>七生緑小学校（三沢台６）</p>'};
  const sixthInfoWindow = new google.maps.InfoWindow(sixthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(sixthInfoWindow)

  const seventhInfoWindowElement =
    {content: '<p>百草台公園（三沢台７）</p>'};
  const seventhInfoWindow = new google.maps.InfoWindow(seventhInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(seventhInfoWindow)

  const eighthInfoWindowElement =
    {content: '<p>百草園住宅（三沢台８）</p>'};
  const eighthInfoWindow = new google.maps.InfoWindow(eighthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(eighthInfoWindow)

  const ninthInfoWindowElement =
    {content: '<p>百草園住宅中央（三沢台９）</p>'};
  const ninthInfoWindow = new google.maps.InfoWindow(ninthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(ninthInfoWindow)

  const tenthInfoWindowElement =
    {content: '<p>百草園住宅東（三沢台１０）</p>'};
  const tenthInfoWindow = new google.maps.InfoWindow(tenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(tenthInfoWindow)

  const eleventhInfoWindowElement =
    {content: '<p>南百草（三沢台１１）</p>'};
  const eleventhInfoWindow = new google.maps.InfoWindow(eleventhInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(eleventhInfoWindow)

  const twelfthInfoWindowElement =
    {content: '<p>倉沢（三沢台１２）</p>'};
  const twelfthInfoWindow = new google.maps.InfoWindow(twelfthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twelfthInfoWindow)

  const thirteenthInfoWindowElement =
    {content: '<p>北和田（三沢台１３）</p>'};
  const thirteenthInfoWindow = new google.maps.InfoWindow(thirteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(thirteenthInfoWindow)

  const fourteenthInfoWindowElement =
    {content: '<p>並木橋（三沢台１４）</p>'};
  const fourteenthInfoWindow = new google.maps.InfoWindow(fourteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fourteenthInfoWindow)

  const fifteenthInfoWindowElement =
    {content: '<p>多摩第二小学校（三沢台１５）</p>'};
  const fifteenthInfoWindow = new google.maps.InfoWindow(fifteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(fifteenthInfoWindow)

  const sixteenthInfoWindowElement =
    {content: '<p>和田（三沢台１６）</p>'};
  const sixteenthInfoWindow = new google.maps.InfoWindow(sixteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(sixteenthInfoWindow)

  const seventeenthInfoWindowElement =
    {content: '<p>宝蔵橋（三沢台１７）</p>'};
  const seventeenthInfoWindow = new google.maps.InfoWindow(seventeenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(seventeenthInfoWindow)

  const eighteenthInfoWindowElement =
    {content: '<p>一の宮（三沢台１８）</p>'};
  const eighteenthInfoWindow = new google.maps.InfoWindow(eighteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(eighteenthInfoWindow)

  const nineteenthInfoWindowElement =
    {content: '<p>一の宮ストア（三沢台１９）</p>'};
  const nineteenthInfoWindow = new google.maps.InfoWindow(nineteenthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(nineteenthInfoWindow)

  const twentiethInfoWindowElement =
    {content: '<p>桜ヶ丘診療所（三沢台２０）</p>'};
  const twentiethInfoWindow = new google.maps.InfoWindow(twentiethInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twentiethInfoWindow)

  const twenty_firstInfoWindowElement =
    {content: '<p>聖蹟桜ヶ丘駅（三沢台２１）</p>'};
  const twenty_firstInfoWindow = new google.maps.InfoWindow(twenty_firstInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twenty_firstInfoWindow)

  const twenty_secondInfoWindowElement =
    {content: '<p><font size="4">イノウエベーカリー</font><br><font size="2">並んでも食べたい！本格パン屋</font></p><img src="../images/inouebakery.jpg" height= "100" >'};
  const twenty_secondInfoWindow = new google.maps.InfoWindow(twenty_secondInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twenty_secondInfoWindow)

  const twenty_thirdInfoWindowElement =
    {content: '<p><font size="4">Cafe De Dango</font><br><font size="2">地球を味わうカフェ</font></p><img src="../images/cafededango.jpg" height= "100" >'};
  const twenty_thirdInfoWindow = new google.maps.InfoWindow(twenty_thirdInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twenty_thirdInfoWindow)

  const twenty_fourthInfoWindowElement =
    {content: '<p><font size="4">ぱくぱく くもくま堂</font><br><font size="2">思わず写真を撮りたくなるかき氷</font></p><img src="../images/pakupakukumokumadou.jpg" height= "100" >'};
  const twenty_fourthInfoWindow = new google.maps.InfoWindow(twenty_fourthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twenty_fourthInfoWindow)

  const twenty_fifthInfoWindowElement =
    {content: '<p><font size="4">ARTIGIANO GELATERIA</font><br><font size="2">地元素材を使ったイタリアンジェラート</font></p><img src="../images/artigianogelateria.jpg" height= "100" >'};
  const twenty_fifthInfoWindow = new google.maps.InfoWindow(twenty_fifthInfoWindowElement);
  // 同様に配列に追加する
  window.infoWindowArray.push(twenty_fifthInfoWindow)


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

  sixteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    sixteenthInfoWindow.open(myMap, sixteenthMarker);
  });

  seventeenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    seventeenthInfoWindow.open(myMap, seventeenthMarker);
  });

  eighteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    eighteenthInfoWindow.open(myMap, eighteenthMarker);
  });

  nineteenthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    nineteenthInfoWindow.open(myMap, nineteenthMarker);
  });

  twentiethMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twentiethInfoWindow.open(myMap, twentiethMarker);
  });

  twenty_firstMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twenty_firstInfoWindow.open(myMap, twenty_firstMarker);
  });

  twenty_secondMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twenty_secondInfoWindow.open(myMap, twenty_secondMarker);
  });

  twenty_thirdMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twenty_thirdInfoWindow.open(myMap, twenty_thirdMarker);
  });

  twenty_fourthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twenty_fourthInfoWindow.open(myMap, twenty_fourthMarker);
  });

  twenty_fifthMarker.addListener('click', ()=>{
    window.infoWindowArray.forEach((val, index, array) => {
      val.close();
    });
    twenty_fifthInfoWindow.open(myMap, twenty_fifthMarker);
  });

}); // window.addEventListenerに登録する関数オブジェクトここまで
