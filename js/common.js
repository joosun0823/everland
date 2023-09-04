// header & footer
$('#header-section').load('./common/header.html .header>.inner_h');
$('#fullpage footer').load('./common/footer.html .main_footer>.inner_c');
$('body .header_sub').load('../../common/header.html .header_sub>.inner_h');
$('.sub_common').load('../../common/header.html .sub_common',loadAfter);
$('body footer').load('../../common/footer.html .footer_sub>.inner_c');


function loadAfter(){
	let url = window.location.pathname,a,b, urlArr = url.split('/');
	const textData = [
		{id:'use',text:'이용안내',idx:0,html:'operation',sub:[{subhtml:'operation.html',text:'운영/운휴시간 안내'},{subhtml:'show.html',text:'공연일정'}]},
		{id:'charge',text:'요금정보',idx:1,html:'usecharge',sub:[{subhtml:'usecharge.html',text:'이용요금'},{subhtml:'seasonticket.html',text:'정기권'},{subhtml:'card.html',text:'제휴카드'},{subhtml:'promotion.html',text:'프로모션'}]},
		{id:'enjoy',text:'즐길거리',idx:2,html:'course',sub:[{subhtml:'course.html',text:'추천코스'},{subhtml:'attraction.html',text:'어트랙션'},{subhtml:'view.html',text:'관람 시설'},{subhtml:'rest_presnt.html',text:'레스토랑 / 선물샵'}]},
		{id:'review',text:'리뷰',idx:3,html:'review_list',sub:[{subhtml:'review_list.html',text:'리뷰'}]}]

	textData.forEach((v,k)=>{
		for(let i=0; i<urlArr.length; i++){ if(v.id == urlArr[i]){ a=urlArr[i]; break} }
		if(v.id == a){
			$(".txt_box h2").text(v.text);
			$('.sub_common .sub_visual').css("background-image", "url('../../asset/image/common/sub_visual" + v.idx + ".jpg')");
			$('.sub_common .sub_tab .depth01 p span').html( v.text );
			v.sub.forEach((j,q)=>{
				for(let i=0; i<urlArr.length; i++){ if(j.subhtml == urlArr[i]){  b=urlArr[i]; break} }
				if(j.subhtml == b) $('.sub_common .sub_tab .depth02 p span').html( j.text );
				$('.sub_common .sub_tab .depth02 ul').append('<li><a href="/everland/pages/' + v.id + '/'+ j.subhtml + '">' + j.text + '</a></li>');
			})
		}
		$('.sub_common .sub_tab .depth01 ul').append('<li><a href="/everland/pages/' + v.id + '/'+ v.html+'.html">' + v.text + '</a></li>');
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

// scroll 
let pos = {y:0, status: true};

window.addEventListener('scroll', function() {
	pos.y = window.pageYOffset;
	pos.status = (pos.y > 20) ? true : false;
	
	// console.log(window.scrollY, pos.y)
	if(pos.status) {
		$('header').addClass('header_sub on');
		// $('header').css('height', '75px');
		// $('header').css('position', 'fixed');
	} else {
		$('.main_index header').removeClass('header_sub');
		$('header').removeClass('on');
		// $('header').css('height', '100px');
		// $('header').css('position', 'absolute');
	}
})

// slide up btn
const ArrowBttn = document.querySelector('.arrow');

ArrowBttn.addEventListener("click", function() {
	window.scrollTo({
		top:0,
		behavior:"smooth"
	})
})