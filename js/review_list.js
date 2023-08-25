fetch("../../data/review/review.json")
.then(res => res.json())
.then(data => {
	const reviewBox = document.querySelector('.review_box');
	const reviewData = data.리뷰;
	
	reviewData.forEach((v, k)  => {
		reviewBox.innerHTML += 
		`<li>
		<div class="img_area"></div>
		<div class="review_txt">
		<b>${v.title}</b>
		<p>${v.date}</p>
		</div>
		</li>`
		
		const reviewImg = document.querySelectorAll('.img_area');
		reviewImg[k].style = ` background-image:url(${v.detail_img})`;
		//backgound-image변경하는법
	})
})