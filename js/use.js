// operation.html
const dateOper = function () {
	let today = new Date();
	let year = today.getFullYear();
	let month = (today.getMonth() + 1).toString().padStart(2, '0');
	let day = today.getDate().toString().padStart(2, '0');
	let formattedDate = year + "-" + month + "-" + day;

	let scheduleDateElement = document.querySelector(".scheduleDate");
	scheduleDateElement.innerHTML = formattedDate;
}


// show.html
const fetchShow = function () {
	fetch("../../data/use/show.json")
	.then(res => res.json())
	.then(data => {
		const show = document.querySelector(".show_schd");
		data.공연.forEach(function (v, k) {
			show.innerHTML += `
					<li>
						<p><img src="${v.thumb}" alt=""></p>
						<div class="show_tit">
							<h2>${v.name}</h2>
							<p>
								${v.desc}
							</p>
							<div class="show_place">
								<b>공연장소</b>
								<span>${v.place}</span>
							</div>
							<button class="detail_btn" onClick="modalOn_show(${v.id})">상세보기</button>
						</div>
					</li>`;
		})
		
		const modal = document.querySelector(".modal_wrap");
		const body = document.querySelector("body");
		modal.classList.remove("open");
		body.classList.remove("hide");
	})
}

// show_modal 
const modalOn_show = function(vID) {
	const attraction = document.querySelector(".modal_sec");
	const modal = document.querySelector(".modal_wrap");
	const body = document.querySelector("body");
	const closeBtn = document.querySelector(".close");

	modal.classList.add("open");
	body.classList.add("hide");

	closeBtn.addEventListener("click", function(e) {
		modal.classList.remove("open");
		body.classList.remove("hide");
	});

	fetch("../../data/use/show.json")
	.then(res => res.json())
	.then(data => {
		const resData = data.공연.find((e) => e.id == vID);
		
		if (resData) {
			document.querySelector('.modalTitle').innerText = resData.name;
			document.querySelector('.pic img').src = resData.detail_img;
			document.querySelector('.modalDesc').innerText = resData.desc2;
			document.querySelector('.modalLoca').innerText = '장소 : '+resData.place;
			document.querySelector('.modalDate').innerText = '기간 : '+ resData.date;
			document.querySelector('.modalTime').innerText = '기간 : '+ resData.time;
			document.querySelector('.modalAtten').innerText = '[유의사항]\n'+ resData.attention;
		}
	})
}