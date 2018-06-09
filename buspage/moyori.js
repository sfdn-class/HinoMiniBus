//Mapの切り替え
$(function() {
	//クリックしたときのファンクションをまとめて指定
	$('.tab li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});

  $('.tab2 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab2 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content2 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content2 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab2 li').removeClass('select2');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select2')
	});

  $('.tab3 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab3 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content3 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content3 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab3 li').removeClass('select3');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select3')
	});

  $('.tab4 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab4 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content4 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content4 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab4 li').removeClass('select4');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select4')
	});

  $('.tab5 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab5 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content5 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content5 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab5 li').removeClass('select5');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select5')
	});

});
