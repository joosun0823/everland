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

// slide up btn
const ArrowBttn = document.querySelector('.arrow');

ArrowBttn.addEventListener("click", function() {
	window.scrollTo({
		top:0,
		behavior:"smooth"
	})
})

//카카오 로그인
Kakao.init('6c7c766a0696905f395ca5e542a55865');

function loginWithKakao() {
	Kakao.Auth.login({
		success: function (authObj) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function (res) {
					console.log(res)
					let name = res.properties.nickname;
					let email = res.kakao_account.email;
					info.innerHTML = `이름 : ${name} <br> 이메일 : ${email}`;
				},
				fail: function (error) {
					alert(
						'login success, but failed to request user information: ' +
						JSON.stringify(error)
					)
				},
			})

		},
		fail: function (err) {
			alert('failed to login: ' + JSON.stringify(err))
		},
	})
}

// 아래는 데모를 위한 UI 코드입니다.
displayToken()
function displayToken() {
	var token = getCookie('authorize-access-token');

	if (token) {
		Kakao.Auth.setAccessToken(token);
		Kakao.Auth.getStatusInfo()
			.then(function (res) {
				if (res.status === 'connected') {
					document.getElementById('token-result').innerText
						= 'login success, token: ' + Kakao.Auth.getAccessToken();
				}
			})
			.catch(function (err) {
				Kakao.Auth.setAccessToken(null);
			});
	}
}

function getCookie(name) {
	var parts = document.cookie.split(name + '=');
	if (parts.length === 2) { return parts[1].split(';')[0]; }
}

//구글 처음 실행하는 함수
function init() {
	gapi.load('auth2', function () {
		gapi.auth2.init();
		options = new gapi.auth2.SigninOptionsBuilder();
		options.setPrompt('select_account');
		// 추가는 Oauth 승인 권한 추가 후 띄어쓰기 기준으로 추가
		options.setScope('email profile openid https://www.googleapis.com/auth/user.birthday.read');
		// 인스턴스의 함수 호출 - element에 로그인 기능 추가
		// GgCustomLogin은 li태그안에 있는 ID, 위에 설정한 options와 아래 성공,실패시 실행하는 함수들
		gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
	})
}

function onSignIn(googleUser) {
	var access_token = googleUser.getAuthResponse().access_token
	$.ajax({
		// people api를 이용하여 프로필 및 생년월일에 대한 선택동의후 가져온다.
		url: 'https://people.googleapis.com/v1/people/me'
		// key에 자신의 API 키를 넣습니다.
		, data: { personFields: 'birthdays', key: 'AIzaSyBwsbJu8-7pvUtXs03dfYmwO4nZDPiLTJA', 'access_token': access_token }
		, method: 'GET'
	})
		.done(function (e) {
			//프로필을 가져온다.
			var profile = googleUser.getBasicProfile();
			console.log(profile)
		})
		.fail(function (e) {
			console.log(e);
		})
}
function onSignInFailure(t) {
	console.log(t);
}