// view.html
const fetchView = function() {
	fetch("../../data/enjoy/view.json")
	.then(res => res.json())
	.then(data => {
		const viewBox = document.querySelector('.enjoy_box');
		const viewData = data.zoo;
	
		
		viewData.forEach((v, k)  => {
			console.log(v)
			viewBox.innerHTML += 
			`<li>
				<div class="img_area"></div>
				<div class="txt_area">
					<b>${v.name}</b>
					<p>${v.location}</p>
				</div>
			</li>`
			
			const viewImg = document.querySelectorAll('.img_area');
			viewImg[k].style = ` background-image:url(${v.thumb})`;
			//backgound-image변경하는법
		})
	})
}

const fetchAttract = function() {
	fetch("../../data/enjoy/attraction.json")
	.then(res => res.json())
	.then(data => {
		const tabButtonMenu = document.querySelector(".tab_menu");
		const cardContent = document.querySelector(".attraction_list")
		let tabContent;
		
		for (const dataKey in data) {
			tabButtonMenu.innerHTML += `<a class="tabkey">${dataKey}</a>`;
		}
		tabContent = document.querySelectorAll(".tabkey");
		let num = 0;
		data.아메리칸어드벤처.forEach(function (V, K) {
			tabContent[1].classList.add("active");
			cardContent.innerHTML += `
			<li>
				<div class="img_area"></div>
				<div class="txt_area">
					<b>${V.name}</b>
					<p>${V.location}</p>
				</div>
			</li>`;
			
			const viewImg = document.querySelectorAll('.img_area');
			viewImg[K].style = ` background-image:url(${V.thumb})`;
		})
		tabContent.forEach(function (V, K) {
			V.addEventListener("click", function () {
				tabContent[num].classList.remove('active');
				this.classList.add('active');
				num = K;
	
				cardContent.innerHTML = "";
				const buttonText = V.innerText;
				data[buttonText].forEach(function (dataV, dataK) {
					console.log(this)
					cardContent.innerHTML += `
					<li>
						<div class="img_area"></div>
						<div class="txt_area">
							<b>${dataV.name}</b>
							<p>${dataV.location}</p>
						</div>
					</li>`;

					
					const viewImg = document.querySelectorAll('.img_area');
					viewImg[dataK].style = ` background-image:url(${dataV.thumb})`;
				})
			})
		})
	})
}