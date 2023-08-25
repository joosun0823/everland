// header & footer
$('#header-section').load('./common/header.html .header_sub>.inner_h');
$('#fullpage footer').load('./common/footer.html .main_footer>.inner_c');
$('body .header_sub').load('../../common/header.html .header_sub>.inner_h');
$('.sub_common').load('../../common/header.html .sub_common');
$('body footer').load('../../common/footer.html footer>.inner_c');

$(window).on("load", function(){
	let url = window.location.pathname;
	// console.log(url);

	setTimeout(() => {
		// sub_common
		// depth01 리스트 부분
		$(".header_sub .gnb > li > a").each(function() {
			let title = $(this).text(); // depth01 타이틀
			let link = $(this).attr('href'); // depth01 링크
			$('.sub_common .sub_tab .depth01 ul').append('<li><a href="' + link + '">' + title + '</a></li>');
		});
		// sub_common 텍스트
		$(".header_sub .gnb li ul li a").each(function() {
			if ( $(this).attr("href") == url ){
				let idx = $(this).parent().parent().parent().index();
				let title = $(this).parent().parent().parent().find('>a').text(); // depth01 타이틀
				let depth02 = $(this).parent().parent().html(); // depth02
				let this_tit = $(this).text(); // 현재페이지 타이틀
				
				$('.sub_common .sub_visual').css("background-image", "url('../../asset/image/common/sub_visual" + idx + ".jpg')");
				$('.sub_common .sub_visual .txt_box h2').html( title );
				$('.sub_common .sub_tab .depth01 p span').html( title );
				$('.sub_common .sub_tab .depth02 p span').html( this_tit );
				$('.sub_common .sub_tab .depth02 ul').append(depth02);
			}
		});
	
		// sub_tab 열기,닫기
		$(".sub_common .sub_tab .inner_c > div > p").click(function(){
			if ( $(this).next("ul").css("display") == "none" ){
				$(this).parent().addClass("on").siblings().removeClass("on");
				$(this).next("ul").slideDown("fast").parent().siblings().find("> ul").slideUp("fast");
			} else {
				$(this).parent().removeClass('on');
				$(this).parent().find(">ul").slideUp("fast");
			}
		});
	}, 100);
});

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
const ArrowBttn = document.querySelector('.arrow');

ArrowBttn.addEventListener("click", function() {
	window.scrollTo({
		top:0,
		behavior:"smooth"
	})
})