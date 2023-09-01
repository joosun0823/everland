// header & footer
$('#header-section').load('./common/header.html .header>.inner_h');
$('#fullpage footer').load('./common/footer.html .main_footer>.inner_c');
$('body .header_sub').load('../../common/header.html .header_sub>.inner_h');
$('.sub_common').load('../../common/header.html .sub_common',loadAfter);
$('body footer').load('../../common/footer.html .footer_sub>.inner_c');


function loadAfter(){
	let url = window.location.pathname;
	let urlArr = url.split('/');
	console.log('check', url)
	const textData = [
		{id:'use',text:'이용안내',idx:0,html:'operation',sub:[{subhtml:'operation.html',text:'운영/운휴시간 안내'},{subhtml:'show.html',text:'공연일정'}]},
		{id:'charge',text:'요금정보',idx:1,html:'usecharge',sub:[{subhtml:'usecharge.html',text:'이용요금'},{subhtml:'seasonticket.html',text:'정기권'},{subhtml:'card.html',text:'제휴카드'},{subhtml:'promotion.html',text:'프로모션'}]},
		{id:'enjoy',text:'즐길거리',idx:2,html:'course',sub:[{subhtml:'course.html',text:'추천코스'},{subhtml:'attraction.html',text:'어트랙션'},{subhtml:'view.html',text:'관람 시설'},{subhtml:'rest_presnt.html',text:'레스토랑 / 선물샵'}]},
		{id:'review',text:'리뷰',idx:3,html:'review_list',sub:[{subhtml:'review_list.html',text:'리뷰'}]}]

	textData.forEach((v,k)=>{
		if(v.id == urlArr[2]){
			$(".txt_box h2").text(v.text);
			$('.sub_common .sub_visual').css("background-image", "url('../../asset/image/common/sub_visual" + v.idx + ".jpg')");
			$('.sub_common .sub_tab .depth01 p span').html( v.text );
			v.sub.forEach((j,q)=>{
				if(j.subhtml == urlArr[3]){
					$('.sub_common .sub_tab .depth02 p span').html( j.text );
				}
				$('.sub_common .sub_tab .depth02 ul').append('<li><a href="/pages/' + v.id + '/'+ j.subhtml + '">' + j.text + '</a></li>');
			})
		}
		$('.sub_common .sub_tab .depth01 ul').append('<li><a href="/pages/' + v.id + '/'+ v.html+'.html">' + v.text + '</a></li>');
	})


	const subGnb = document.querySelectorAll('.subgnb');
	let num=0;

	subGnb.forEach((v,k)=>{
		v.addEventListener('click',()=>{
			$(v).find('ul').slideToggle("fast");
			if(num != k) $('.subgnb').eq(num).find('ul').slideUp("fast");
			num=k;
		})
	})
}


// $(window).on("load", function(){
// 	setTimeout(() => {
// 		// // sub_common
// 		// // depth01 리스트 부분
// 		// $("header .gnb > li > a").each(function() {
// 		// 	let title = $(this).text(); // depth01 타이틀
// 		// 	let link = $(this).attr('href'); // depth01 링크
// 		// 	$('.sub_common .sub_tab .depth01 ul').append('<li><a href="' + link + '">' + title + '</a></li>');
// 		// });
// 		// // sub_common 텍스트
// 		// $("header .gnb li ul li a").each(function() {
// 		// 	if ( $(this).attr("href") == url ){
// 		// 		let idx = $(this).parent().parent().parent().index();
// 		// 		let title = $(this).parent().parent().parent().find('>a').text(); // depth01 타이틀
// 		// 		let depth02 = $(this).parent().parent().html(); // depth02
// 		// 		let this_tit = $(this).text(); // 현재페이지 타이틀
				
// 		// 		$('.sub_common .sub_visual').css("background-image", "url('../../asset/image/common/sub_visual" + idx + ".jpg')");
// 		// 		$('.sub_common .sub_visual .txt_box h2').html( title );
// 		// 		$('.sub_common .sub_tab .depth01 p span').html( title );
// 		// 		$('.sub_common .sub_tab .depth02 p span').html( this_tit );
// 		// 		$('.sub_common .sub_tab .depth02 ul').append(depth02);
// 		// 	}
// 		// });
	
// 		// sub_tab 열기,닫기
		
// 	}, 100);
// });

// const menu = document.querySelectorAll('.gnb li');
// const test = document.querySelector('.gnb');
// const menuOn = function() {
// 	test.classList.add('add');
// }
// const menuOut = function() {
// 	test.classList.remove('add');
// }
// test.addEventListener('mouseenter', menuOn);
// test.addEventListener('mouseout', menuOut);
// menu.forEach(function(v,k) {
// })

function menuClick(_this) {
	const open = $('.header_open_wrap');
	$('body').toggleClass('hide');
	$(_this).toggleClass('active');
	
	if($('body').hasClass('hide')) {
		// $('.header').addClass('header_sub');
		open.addClass('open');
	} else {
		// 이슈 - header가 상단에 있을 때
		// if(!pos.status) {
		// 	$('.header').removeClass('header_sub');
		// }
		open.removeClass('open');
	}
}

// slide up btn
// const ArrowBttn = document.querySelector('.arrow');

// ArrowBttn.addEventListener("click", function() {
// 	window.scrollTo({
// 		top:0,
// 		behavior:"smooth"
// 	})
// })