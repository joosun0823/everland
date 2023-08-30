// attraction.html
const fetchAttract = function() {
	fetch("../../data/enjoy/attraction.json")
	.then(res => res.json())
	.then(data => {
		const tabMenu = document.querySelector(".tab_menu");
		const attractContent = document.querySelector(".attraction_list")
		let tabBtn;
		
		for (const dataKey in data) {
			tabMenu.innerHTML += `<a class="tabkey">${dataKey}</a>`;
		}
		tabBtn = document.querySelectorAll(".tabkey");

		// 미리 뿌려놓기 
		let num = 1;
		data.아메리칸어드벤처.forEach(function (V, K) {
			tabBtn[1].classList.add("active");
			attractContent.innerHTML += `
				<li onClick="modalOn(${V.id}, '아메리칸어드벤처')">
					<div class="img_area"></div>
					<div class="txt_area">
						<b>${V.name}</b>
						<p>#${V.location}</p>
					</div>
				</li>`;
			
			const thumbImg = document.querySelectorAll('.img_area');
			thumbImg[K].style = ` background-image:url(${V.thumb})`;
		})

		// tab 눌렀을 시
		tabBtn.forEach(function (V, K) {
			V.addEventListener("click", function () {
				// e.stopPropagation();
				tabBtn[num].classList.remove('active');
				this.classList.add('active');
				num = K;
	
				attractContent.innerHTML = "";
				const buttonText = V.innerText;
				data[buttonText].forEach(function (dataV, dataK) {
					// console.log(this)
					attractContent.innerHTML += `
					<li onClick="modalOn(${dataV.id}, '${buttonText}')">
						<div class="img_area"></div>
						<div class="txt_area">
							<b>${dataV.name}</b>
							<p>#${dataV.location}</p>
						</div>
					</li>`;
					
					const viewImg = document.querySelectorAll('.img_area');
					viewImg[dataK].style = ` background-image:url(${dataV.thumb})`;
				})
			})
		})
		
		const modal = document.querySelector(".modal_wrap");
		const body = document.querySelector("body");
		modal.classList.remove("open");
		body.classList.remove("hide");
	})
}

// attraction_modal
const modalOn = function(vID, activeTab) {	
	const attraction = document.querySelector(".modal_sec");
	const modal = document.querySelector(".modal_wrap");
	const body = document.querySelector("body");
	const closeBtn = document.querySelector(".close");

	modal.classList.add("open");
	body.classList.add("hide");

	closeBtn.addEventListener("click", function(e) {
		modal.classList.remove("open");
		body.classList.remove("hide");
	})

	fetch("../../data/enjoy/attraction.json")
	.then(res => res.json())
	.then(data => {
		console.log(activeTab);

		
		const resData = data[activeTab].find((e) => e.id == vID);
		if (resData) {
				console.log(resData.name);
				// 모달 창 내용 채우기
				document.querySelector('.modalLoca').innerText = '#'+resData.location;
				document.querySelector('.modalTitle').innerText = resData.name;
				document.querySelector('.pic img').src = resData.detail_img;
				document.querySelector('.modalDesc').innerText = resData.desc;
				console.log(resData.use_height)
				if(resData.use_height) {
					document.querySelector('.modalKey').style.display = 'block'
					document.querySelector('.modalKey').innerText = '이용 가능 키 제한 : '+ resData.use_height;
				} else {
					document.querySelector('.modalKey').style.display = 'none'
				}
				if(resData.use_info) {
					document.querySelector('.modalInfo').style.display = 'block'
					document.querySelector('.modalInfo').innerText = '[이용안내]\n'+ resData.use_info;
				} else {
					document.querySelector('.modalInfo').style.display = 'none'
				}
				if(resData.attention) {
					document.querySelector('.modalAtten').style.display = 'block'
					document.querySelector('.modalAtten').innerText = '[유의사항]\n'+ resData.attention;
				} else {
					document.querySelector('.modalAtten').style.display = 'none'
				}
				// 다른 필요한 데이터도 위와 같이 추가해주세요
		}
	})
}

// view.html
const fetchView = function() {
	fetch("../../data/enjoy/view.json")
	.then(res => res.json())
	.then(data => {
		const tabMenu = document.querySelector(".tab_menu");
		const viewBox = document.querySelector('.enjoy_box');
		let tabBtn;

		for(const dataKey in data) {
			tabMenu.innerHTML += `<a class="tabkey">${dataKey}</a>`;
		}
		tabBtn = document.querySelectorAll('.tabkey');

		let num = 0;
		data.주토피아.forEach(function(v, k) {
			tabBtn[0].classList.add("active");
			viewBox.innerHTML += `
				<li onClick="modalOn_view(${v.id}, '주토피아')">
					<div class="img_area"></div>
					<div class="txt_area">
						<b>${v.name}</b>
						<p>#${v.location}</p>
					</div>
				</li>`;
				
			const viewImg = document.querySelectorAll('.img_area');
			viewImg[k].style = `background-image:url(${v.thumb})`;
		})
		
		tabBtn.forEach(function(val, key) {
			val.addEventListener("click", function() {
				tabBtn[num].classList.remove('active');
				this.classList.add('active');
				num = key;

				viewBox.innerHTML = '';
				const btnText = val.innerText;

				data[btnText].forEach((dataV, dataK)  => {
					viewBox.innerHTML += 
					`<li onClick="modalOn_view(${dataV.id}, '${btnText}')">
						<div class="img_area"></div>
						<div class="txt_area">
							<b>${dataV.name}</b>
							<p>#${dataV.location}</p>
						</div>
					</li>`;

					const viewImg = document.querySelectorAll('.img_area');
					viewImg[dataK].style = ` background-image:url(${dataV.thumb})`;
					//backgound-image변경하는법
				})
			})
		})
		const modal = document.querySelector(".modal_wrap");
		const body = document.querySelector("body");
		modal.classList.remove("open");
		body.classList.remove("hide");
	})
} // view

// view_modal
const modalOn_view = function(vID, activeTab) {	
	const attraction = document.querySelector(".modal_sec");
	const modal = document.querySelector(".modal_wrap");
	const body = document.querySelector("body");
	const closeBtn = document.querySelector(".close");

	modal.classList.add("open");
	body.classList.add("hide");

	closeBtn.addEventListener("click", function(e) {
		modal.classList.remove("open");
		body.classList.remove("hide");
	})

	fetch("../../data/enjoy/view.json")
	.then(res => res.json())
	.then(data => {
		console.log(activeTab);

		const resData = data[activeTab].find((e) => e.id == vID);
		if (resData) {
				console.log(resData.name);
				// 모달 창 내용 채우기
				document.querySelector('.modalLoca').innerText = '#'+resData.location;
				document.querySelector('.modalTitle').innerText = resData.name;
				document.querySelector('.pic img').src = resData.thumb;
				document.querySelector('.modalDesc').innerText = resData.desc;
				if(resData.event) {
					document.querySelector('.modalEvent').style.display = 'block'
					document.querySelector('.modalEvent').innerText = '[이벤트]\n'+ resData.event;
				} else {
					document.querySelector('.modalEvent').style.display = 'none'
				}
				if(resData.attention) {
					document.querySelector('.modalInfo').style.display = 'block'
					document.querySelector('.modalInfo').innerText = '[이용안내]\n'+ resData.attention;
				} else {
					document.querySelector('.modalInfo').style.display = 'none'
				}
				if(resData.warning) {
					document.querySelector('.modalAtten').style.display = 'block'
					document.querySelector('.modalAtten').innerText = '[유의사항]\n'+ resData.warning;
				} else {
					document.querySelector('.modalAtten').style.display = 'none'
				}
				// 다른 필요한 데이터도 위와 같이 추가해주세요
		}
	})
}


// rest_presnt.html
const fetchRest = function() {
	fetch("../../data/enjoy/restaurant.json")
	.then(res => res.json())
	.then(data => {
		const tabMenu = document.querySelector(".tab_menu");
		const restContent = document.querySelector(".rest_presnt_list")
		let tabBtn;
		restContent
		for (const dataKey in data) {
			tabMenu.innerHTML += `<a class="tabkey">${dataKey}</a>`;
		}
		tabBtn = document.querySelectorAll(".tabkey");

		let num = 0;
		data.레스토랑.forEach(function (V, K) {
			tabBtn[0].classList.add("active");
			restContent.innerHTML += `
				<li>
					<div class="img_area"></div>
					<div class="txt_area">
						<b>${V.name}</b>
						<p>#${V.zone}</p>
					</div>
				</li>`;
			
			const thumbImg = document.querySelectorAll('.img_area');
			thumbImg[K].style = ` background-image:url(${V.thumb})`;
		})

		tabBtn.forEach(function (V, K) {
			V.addEventListener("click", function () {
				tabBtn[num].classList.remove('active');
				this.classList.add('active');
				num = K;
	
				restContent.innerHTML = "";
				const buttonText = V.innerText;
				data[buttonText].forEach(function (dataV, dataK) {
					console.log(this)
					restContent.innerHTML += `
					<li>
						<div class="img_area"></div>
						<div class="txt_area">
							<b>${dataV.name}</b>
							<p>#${dataV.zone}</p>
						</div>
					</li>`;
					
					const viewImg = document.querySelectorAll('.img_area');
					viewImg[dataK].style = ` background-image:url(${dataV.thumb})`;
				})
			})
		})
	})
}