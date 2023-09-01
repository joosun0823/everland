const fetchReview = function() {
	fetch("../../data/review/review.json")
	.then(res => res.json())
	.then(data => {
		const reviewBox = document.querySelector('.review_box');
		const reviewData = data.리뷰;
		
		reviewData.forEach((v, k)  => {
			reviewBox.innerHTML += 
			`<li onClick='modalOn_review(${v.id})'>
				<div class="img_area"><img src='${v.detail_img}'/></div>
				<div class="review_txt">
				<b>${v.title}</b>
				<p>${v.date}</p>
				</div>
			</li>`
		})
	})
	const modal = document.querySelector(".modal_wrap");
	const body = document.querySelector("body");
	modal.classList.remove("open");
	body.classList.remove("hide");
}

const modalOn_review = function(vID) {
	const modal = document.querySelector(".modal_wrap");
	const modalOpen = document.querySelector(".modal_wrap+.open");
	const body = document.querySelector("body");
	const closeBtn = document.querySelector(".close");

	modal.classList.add("open");
	body.classList.add("hide");
	// modalOpen.addEventListener("click", function(e) {
	// 	modal.classList.remove("open");
	// 	body.classList.remove("hide");
	// })
	closeBtn.addEventListener("click", function(e) {
		modal.classList.remove("open");
		body.classList.remove("hide");
	})
	console.log(vID);

	fetch("../../data/review/review.json")
	.then(res => res.json())
	.then(data => {
		const resData = data.리뷰.find((e) => e.id == vID);
		if(resData) {
			console.log(resData.name)
			document.querySelector('.pic img').src = resData.detail_img;
			document.querySelector('.modalName').innerText = '작성자 : '+ resData.name;
			document.querySelector('.modalDate').innerText = '작성일자 : '+ resData.date;
			document.querySelector('.modalDesc').innerText = resData.desc;
		}

	})
	
}

// const modalOn_review = function(vID) {
// 	const closeBtn = document.querySelector(".rest .close");

// 	modal.classList.add("open");
// 	body.classList.add("hide");

// 	closeBtn.addEventListener("click", function(e) {
// 		modal.classList.remove("open");
// 		body.classList.remove("hide");
// 	})

// 	console.log(vID);
// 	fetch("../../data/review/review.json")
// 	.then(res => res.json())
// 	.then(data => {
// 		const resData = data.리뷰.find((e) => e.id == vID);
// 		if(resData) {
// 			console.log('lll')
// 		}

// 	})
// }