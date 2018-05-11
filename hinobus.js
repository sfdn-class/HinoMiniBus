window.addEventListener('load', () => {
  const mapElement = {
    //聖蹟桜ヶ丘(35.650842, 139.447080)
    //平山台健康･市民支援センター(35.640750, 139.386954)
    //日野駅(35.679400, 139.394035)一番北35.691884, 139.376645
    //北八王子駅(35.669293, 139.363405)
    //(35.650842+35.640750+35.679400+35.669293)/4
    //(139.447080+139.386954+139.394035+139.363405)/4
    center: {lat:(35.650842+35.640750+35.691884+35.669293)/4, lng:(139.447080+139.386954+139.376645+139.363405)/4},
    zoom: 14
  };
//全路線map
  const myMap =new google.maps.Map(document.getElementById('map'), mapElement);
    //市内路線のルート
    const routeCoodinates = [
        {lat:35.661498, lng:139.413393},
        {lat:35.659554, lng:139.413983},
        {lat:35.665691, lng:139.419004},
        {lat:35.668959, lng:139.420774},
        {lat:35.669988,  lng:139.420602},
        {lat:35.671112,  lng:139.420066},
        {lat:35.672080, lng:139.419315},
        {lat:35.674224, lng:139.415721},
        {lat:35.673552, lng:139.415066},
        {lat:35.672899, lng:139.412105},
        {lat:35.674581, lng:139.411762},
        {lat:35.674537, lng:139.402406,},
        {lat:35.674816, lng:139.402288,},
        {lat:35.675043, lng:139.401301,},
        {lat:35.676821, lng:139.400218},
        {lat:35.678285, lng:139.400443},
        {lat:35.679488, lng:139.392772},
        {lat:35.679226, lng:139.391688},
        {lat:35.678817, lng:139.393287},
        {lat:35.677518, lng:139.392557},
        {lat:35.677161, lng:139.391752},
        {lat:35.675444, lng:139.388759},
        {lat:35.674171, lng:139.388781},
        {lat:35.673858, lng:139.388974},
        {lat:35.672725, lng: 139.388770},
        {lat:35.672332, lng:139.391066},
        {lat:35.671626, lng:139.393630},
        {lat:35.671435, lng:139.394242},
        {lat:35.669970, lng:139.395508},
        {lat:35.669787, lng:139.395368},
        {lat:35.670118, lng:139.392954},
        {lat:35.668794, lng:139.395143},
        {lat:35.668977, lng:139.390111},
        {lat:35.667329, lng:139.377236},
        {lat:35.666214, lng:139.378127},
        {lat:35.661010, lng:139.380455},
        {lat:35.659920, lng:139.381635}

    ];

    // Polylineのパラメータを作る
    const routeElements = {
      path: routeCoodinates, //作った線の座標の配列
      geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
      strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
      strokeOpacity: 0.5, //透過の設定．0.0〜1.0
      strokeWeight: 2 //線の太さ
    };
    // 線のオブジェクトを作る
    const routePolyline = new google.maps.Polyline(routeElements);
    // 地図に表示する
    routePolyline.setMap(myMap);

});

window.addEventListener('load', () => {
  const mapElement = {
    //聖蹟桜ヶ丘(35.650842, 139.447080)
    //平山台健康･市民支援センター(35.640750, 139.386954)
    //日野駅(35.679400, 139.394035)一番北35.691884, 139.376645
    //北八王子駅(35.669293, 139.363405)
    //(35.650842+35.640750+35.679400+35.669293)/4
    //(139.447080+139.386954+139.394035+139.363405)/4
    center: {lat:(35.650842+35.640750+35.691884+35.669293)/4, lng:(139.447080+139.386954+139.376645+139.363405)/4},
    zoom: 14
  };
//市内路線map
  const myMap_Shinai =new google.maps.Map(document.getElementById('map_Shinai'), mapElement);
    //市内路線のルート
    const routeCoodinates = [
        {lat:35.661498, lng:139.413393},
        {lat:35.659554, lng:139.413983},
        {lat:35.665691, lng:139.419004},
        {lat:35.668959, lng:139.420774},
        {lat:35.669988, lng:139.420602},
        {lat:35.671112, lng:139.420066},
        {lat:35.672080, lng:139.419315},
        {lat:35.674224, lng:139.415721},
        {lat:35.673552, lng:139.415066},
        {lat:35.672899, lng:139.412105},
        {lat:35.674581, lng:139.411762},
        {lat:35.674537, lng:139.402406},
        {lat:35.674816, lng:139.402288},
        {lat:35.675043, lng:139.401301},
        {lat:35.676821, lng:139.400218},
        {lat:35.678285, lng:139.400443},
        {lat:35.679365, lng:139.395775},//追加
        {lat:35.679488, lng:139.392772},
        {lat:35.679226, lng:139.391688},
        {lat:35.678817, lng:139.393287},
        {lat:35.677518, lng:139.392557},
        {lat:35.677161, lng:139.391752},
        {lat:35.675444, lng:139.388759},
        {lat:35.674171, lng:139.388781},
        {lat:35.673858, lng:139.388974},
        {lat:35.672725, lng:139.388770},
        {lat:35.672332, lng:139.391066},
        {lat:35.671626, lng:139.393630},
        {lat:35.671435, lng:139.394242},
        {lat:35.669970, lng:139.395508},
        {lat:35.669787, lng:139.395368},
        {lat:35.670118, lng:139.392954},
        {lat:35.668794, lng:139.395143},
        {lat:35.668977, lng:139.390111},
        {lat:35.667329, lng:139.377236},
        {lat:35.666214, lng:139.378127},
        {lat:35.661010, lng:139.380455},
        {lat:35.659920, lng:139.381635}

    ];

    // Polylineのパラメータを作る
    const routeElements = {
      path: routeCoodinates, //作った線の座標の配列
      geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
      strokeColor: '#0000FF', // 色指定．CSSの色指定と同じ
      strokeOpacity: 0.5, //透過の設定．0.0〜1.0
      strokeWeight: 3 //線の太さ
    };
    // 線のオブジェクトを作る
    const routePolyline = new google.maps.Polyline(routeElements);
    // 地図に表示する
    routePolyline.setMap(myMap_Shinai);

    const firstMarkerElement = {
      title: '日野市立新撰組のふるさと歴史館',
      position: {lat:35.673552, lng:139.396541},
      map: myMap_Shinai
    };

    const secondMarkerElement = {
      title: '日野宿本陣',
      position: {lat:35.678111, lng:139.399623},
      map: myMap_Shinai
    };
    window.infoWindowArray = new Array();
    window.routePolylineArray = new Array();

    //日野市立新撰組のふるさと歴史館
    const firstMarker =
      new google.maps.Marker(firstMarkerElement);
    const secondMarker =
      new google.maps.Marker(secondMarkerElement);

      //日野市立新撰組のふるさと歴史館
      const routeCoodinates1= [
        {lat:35.670976, lng:139.394803},//日野市役所
        {lat:35.671440, lng:139.394138},
        {lat:35.672675, lng:139.396661},
        {lat:35.673172, lng:139.396329},
        {lat:35.673552, lng:139.396541}//日野市立新撰組のふるさと歴史館
      ];

      const routeCoodinates2 = [
        {lat:35.678865, lng:139.398107},//日野本町
        {lat:35.678504, lng:139.399703},
        {lat:35.678111, lng:139.399623},//日野宿本陣

      ];

      //日野市立新撰組のふるさと歴史館
      const routeElements1 = {
      path: routeCoodinates1, //作った線の座標の配列
      geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
      strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
      strokeOpacity: 0.5, //透過の設定．0.0〜1.0
      strokeWeight: 2 //線の太さ
    };

     const routeElements2 = {
      path: routeCoodinates2, //作った線の座標の配列
      geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
      strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
      strokeOpacity: 0.5, //透過の設定．0.0〜1.0
      strokeWeight: 2 //線の太さ
    };

    const routePolyline1 = new google.maps.Polyline(routeElements1);
    const routePolyline2 = new google.maps.Polyline(routeElements2);

    // 情報ウィンドウを二つ作成
    const firstInfoWindowElement =
      {content: '<p>日野市立新撰組のふるさと歴史館</p>'};
    const firstInfoWindow = new google.maps.InfoWindow(firstInfoWindowElement);
    //配列に追加する
    window.infoWindowArray.push(firstInfoWindow);
    window.routePolylineArray.push(routePolyline1);
    // 2つめのマーカオブジェクトの作成
    const secondInfoWindowElement =
      {content: '<p>日野宿本陣</p>'};
    const secondInfoWindow = new google.maps.InfoWindow(secondInfoWindowElement);
    // 同様に配列に追加する
    window.infoWindowArray.push(secondInfoWindow);
    window.routePolylineArray.push(routePolyline2);

    firstMarker.addListener('click', ()=> { //関数オブジェクトを記述開始
      //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
        // 配列に登録されている全ての情報ウィンドウを一度閉じる
        window.infoWindowArray.forEach((val, index, array) => {
          val.close();
        });
        window.routePolylineArray.forEach((val, index, array) => {
          val.setMap(null);
        });
        // 全部閉じ終わったら，あらてめて最初のマーカに登録されている情報ウィンドウを開く
        firstInfoWindow.open(myMap_Shinai, firstMarker);
        routePolyline1.setMap(myMap_Shinai);


        $('#detaill-body').find('.detaill').removeClass('show');
        $("#Shinai_Hurusato").addClass('show');



      }
    );

    // 同様に2つ目も設定する
    secondMarker.addListener('click', ()=>{
      window.infoWindowArray.forEach((val, index, array) => {
        val.close();
      });
      window.routePolylineArray.forEach((val, index, array) => {
        val.setMap(null);
      });
      secondInfoWindow.open(myMap_Shinai, secondMarker);
      routePolyline2.setMap(myMap_Shinai);
      //下に詳細を表示
      $('#detaill-body').find('.detaill').removeClass('show');
      $("#Shinai_Hinojuku").addClass('show');

      }
    );
});
//end of 市内路線

//南平路線
window.addEventListener('load', () => {
  const mapElement = {
    //聖蹟桜ヶ丘(35.650842, 139.447080)
    //平山台健康･市民支援センター(35.640750, 139.386954)
    //日野駅(35.679400, 139.394035)一番北35.691884, 139.376645
    //北八王子駅(35.669293, 139.363405)
    //(35.650842+35.640750+35.679400+35.669293)/4
    //(139.447080+139.386954+139.394035+139.363405)/4
    center: {lat:(35.650842+35.640750+35.691884+35.669293)/4, lng:(139.447080+139.386954+139.376645+139.363405)/4},
    zoom: 14
  };
//市内路線map
  const myMap_Minami =new google.maps.Map(document.getElementById('map_Minami'), mapElement);
    //市内路線のルート
    const routeCoodinates = [
        {lat:35.661498, lng:139.413393},
        {lat:35.659554, lng:139.413983},
        {lat:35.665691, lng:139.419004},
        {lat:35.668959, lng:139.420774},
        {lat:35.669988,  lng:139.420602},
        {lat:35.671112,  lng:139.420066},
        {lat:35.672080, lng:139.419315},
        {lat:35.674224, lng:139.415721},
        {lat:35.673552, lng:139.415066},
        {lat:35.672899, lng:139.412105},
        {lat:35.674581, lng:139.411762},
        {lat:35.674537, lng:139.402406,},
        {lat:35.674816, lng:139.402288,},
        {lat:35.675043, lng:139.401301,},
        {lat:35.676821, lng:139.400218},
        {lat:35.678285, lng:139.400443},
        {lat:35.679488, lng:139.392772},
        {lat:35.679226, lng:139.391688},
        {lat:35.678817, lng:139.393287},
        {lat:35.677518, lng:139.392557},
        {lat:35.677161, lng:139.391752},
        {lat:35.675444, lng:139.388759},
        {lat:35.674171, lng:139.388781},
        {lat:35.673858, lng:139.388974},
        {lat:35.672725, lng: 139.388770},
        {lat:35.672332, lng:139.391066},
        {lat:35.671626, lng:139.393630},
        {lat:35.671435, lng:139.394242},
        {lat:35.669970, lng:139.395508},
        {lat:35.669787, lng:139.395368},
        {lat:35.670118, lng:139.392954},
        {lat:35.668794, lng:139.395143},
        {lat:35.668977, lng:139.390111},
        {lat:35.667329, lng:139.377236},
        {lat:35.666214, lng:139.378127},
        {lat:35.661010, lng:139.380455},
        {lat:35.659920, lng:139.381635}

    ];

    // Polylineのパラメータを作る
    const routeElements = {
      path: routeCoodinates, //作った線の座標の配列
      geodesic: true, //球に沿った線にするか(true)，平面に沿った線にするか(false)
      strokeColor: '#FF0000', // 色指定．CSSの色指定と同じ
      strokeOpacity: 0.5, //透過の設定．0.0〜1.0
      strokeWeight: 2 //線の太さ
    };
    // 線のオブジェクトを作る
    const routePolyline = new google.maps.Polyline(routeElements);
    // 地図に表示する
    routePolyline.setMap(myMap_Minami);

  const firstMarkerElement = {
    position: {lat:35.661010, lng:139.380455},
    map: myMap_Minami
  };

  const firstMarker =
    new google.maps.Marker(firstMarkerElement);

//end of 南平路線

});
