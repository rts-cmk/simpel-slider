const sliderContainer = document.getElementsByClassName("slider")[0]
const prevBtn = sliderContainer.querySelector(".prevBtn")
const nextBtn = sliderContainer.querySelector(".nextBtn")
var index = 0

const images = [
	"/assets/ost1.jpg",
	"/assets/ost2.jpeg",
	"/assets/ost3.jpg"
]

sliderContainer.querySelector(".slider__mainImage").src = images[index]

prevBtn.addEventListener("click", showPrev)
nextBtn.addEventListener("click", showNext)

function showNext() {
	if (index < images.length - 1) {
		index = index + 1
	} else {
		index = 0
	}
	updateSlider()
}

function showPrev() {
	if (index > 0) {
		index = index - 1
	} else {
		index = images.length - 1
	}
	updateSlider()
}

function updateSlider() {
	const image = sliderContainer.querySelector(".slider__mainImage")

	image.classList.toggle("slider__mainImage--fade")
	setTimeout(function() {
		image.src = images[index]
		image.classList.toggle("slider__mainImage--fade")
	}, 200)
}