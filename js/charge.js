// getParams 가져오깅
function getParams() {
	let params = {};
	const text = decodeURI(location.search);
	text.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
	return params;
}

// card.html
const fetchCard = function() {
	fetch("../../data/charge/card.json")
	.then(res => res.json())
	.then(data => {
		const tabButtonMenu = document.querySelector(".tab_menu");
		const cardContent = document.querySelector(".card_list")
		let tabContent;
	
		for (const dataKey in data) {
			tabButtonMenu.innerHTML += `<a class="tabkey">${dataKey}</a>`;
		}
		tabContent = document.querySelectorAll(".tabkey");
		let num = 0;
		data.삼성카드.forEach(function (V, K) {
			tabContent[0].classList.add("active");
			cardContent.innerHTML += `
								<li>
										<figure>
												<img src="${V.thumb}">
												<figcaption>${V.name}</figcaption>
										</figure>
								</li>
								`;
		})
		tabContent.forEach(function (V, K) {
			V.addEventListener("click", function () {
				tabContent[num].classList.remove('active');
				this.classList.add('active');
				num = K;
	
				cardContent.innerHTML = "";
				const buttonText = V.innerText;
				data[buttonText].forEach(function (dataV, dataK) {
					cardContent.innerHTML += `
								<li>
										<figure>
												<img src="${dataV.thumb}">
												<figcaption>${dataV.name}</figcaption>
										</figure>
								</li>
								`;
				})
			})
		})
	})
}

// promotion.html
const fetchPromo = function() {
	fetch("../../data/charge/promotion.json")
	.then(res => res.json())
	.then(data => {
		const promotion = document.querySelector(".promotion");
		data.프로모션.forEach(function (v, k) {
			promotion.innerHTML += `
								<li>
									<a href="./promotion_detail.html?num=${v.id}">
										<figure>
												<img src="${v.thumb}" alt="">
										</figure>
										<div>
												<span>${v.date}</span>
												<b>${v.name}</b>
												<p>${v.attention}</p>
										</div>
									</a>
								</li>` ;
		})
	})
}

// promotion_detail.html
const fetchProDetail = function() {
	const paramsNum = getParams().num;
	
	fetch("../../data/charge/promotion.json")
	.then(res => res.json())
	.then(data => {
		const promotion = document.querySelector(".promotion");
		const resData = data.프로모션.filter((e) => {
			if(paramsNum == e.id) {
				document.querySelector('#descNum').innerText = e.id;
				document.querySelector('#descTitle').innerText = e.name;
				document.querySelector('#descDate').innerText = e.date;
				document.querySelector('#descImg').src = e.detail_img;
			} 
		})
	})
}

// seasonticket.html
const fetchSeason = function() {
	fetch("../../data/charge/seasonticket.json")
	.then(res => res.json())
	.then(data => {
		const seasonpromt = document.querySelector(".season_promt");
		data.정기권프로모션.forEach(function (v, k) {
			seasonpromt.innerHTML += `
				<li>
					<a href="./seasonticket_detail.html?num=${v.id}">
						<figure>
								<img src="${v.thumb}" alt="">
						</figure>
						<div>
								<span>${v.date}</span>
								<b>${v.name}</b>
						</div>
					</a>
				</li>` ;
			})
	})
}
// seasonticket_detail.html
const fetchSsDetail = function() {
	const paramsNum = getParams().num;
	
	fetch("../../data/charge/seasonticket.json")
	.then(res => res.json())
	.then(data => {
		const season = document.querySelector(".season_promt");
		const resData = data.정기권프로모션.filter((e) => {
			if(paramsNum == e.id) {
				document.querySelector('#descNum').innerText = e.id;
				document.querySelector('#descTitle').innerText = e.name;
				document.querySelector('#descDate').innerText = e.date;
				document.querySelector('#descImg').src = e.detail_img;
			} 
		})
	})
}