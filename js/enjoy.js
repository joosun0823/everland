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
				<li>
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
				console.log(btnText)

				data[btnText].forEach((dataV, dataK)  => {
					viewBox.innerHTML += 
					`<li>
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
	})
} // view

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

		let num = 1;
		data.아메리칸어드벤처.forEach(function (V, K) {
			tabBtn[1].classList.add("active");
			attractContent.innerHTML += `
				<li>
					<div class="img_area"></div>
					<div class="txt_area">
						<b>${V.name}</b>
						<p>#${V.location}</p>
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
	
				attractContent.innerHTML = "";
				const buttonText = V.innerText;
				data[buttonText].forEach(function (dataV, dataK) {
					console.log(this)
					attractContent.innerHTML += `
					<li>
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