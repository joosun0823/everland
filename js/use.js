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