// operation.html
const dateOper = function () {
	let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, '0');
  let day = today.getDate().toString().padStart(2, '0');
  let formattedDate = year +"-" + month + "-" + day;

  let scheduleDateElement = document.querySelector(".scheduleDate");
  scheduleDateElement.innerHTML = formattedDate;
}


// show.html
const fetchShow = function() {
	fetch("../../data/use/show.json")
	.then(res => res.json())
	.then(data =>{
			const show = document.querySelector(".show_schd");
			data.공연.forEach(function(v, k) {
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
							<a href="" class="detail_btn">상세보기</a>
						</div>
					</li>`;
			})
	})
}