// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ქვემოთ მობმული სურათი (საათი.png).
const clock = document.querySelector(".clock");
function createClock() {
	const day = new Date(),
		hour = day.getHours(),
		min = day.getMinutes(),
		sec = day.getSeconds();

	clock.innerHTML = `${hour} : ${min} : ${sec} `;
}

// createClock();

setInterval(createClock, 1000);
// 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ:
//    1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
//    2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს
//    დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

// 3. დავამატოთ ასეთი (ღილაკები.png) ღილაკები იმდენი რამდენი სლაიდიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).

// slider
let activeSlide = 0;

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");

const sliderWrapper = document.querySelector(".wrapper");

const bullets = document.querySelectorAll(".bullet");
let autoSlideIntervalID;

function renderSlides() {
	slides.forEach((slide, index) => {
		if (index === activeSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
	updateClasses();
}

function renderBullets() {
	bullets.forEach((bullet, index) => {
		bullet.addEventListener("click", () => {
			activeSlide = index;
			renderSlides();
		});
	});
}

function updateClasses() {
	bullets.forEach((bullet, index) => {
		if (index === activeSlide) {
			bullet.classList.add("active");
		} else {
			bullet.classList.remove("active");
		}
	});
}

function showNextSlide() {
	if (activeSlide === slides.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	// console.log(activeSlide);

	renderSlides();
}

function showPrevSlide() {
	if (activeSlide === 0) {
		activeSlide = slides.length - 1;
	} else {
		activeSlide--;
	}
	// console.log(activeSlide);

	renderSlides();
}

function startAutoSlideFn() {
	autoSlideIntervalID = setInterval(showNextSlide, 2000);
}

function stopAutoSlideFn() {
	if (autoSlideIntervalID) {
		clearInterval(autoSlideIntervalID);
		autoSlideIntervalID = undefined;
	}
}

function keyboardEvents() {
	document.addEventListener("keyup", (e) => {
		// console.log(e.code);

		if (e.code === "ArrowRight") {
			showNextSlide();
		}
		if (e.code === "ArrowLeft") {
			showPrevSlide();
		}
	});
}

function initSlider() {
	renderSlides();
	renderBullets();

	nextBtn.addEventListener("click", showNextSlide);
	prevBtn.addEventListener("click", showPrevSlide);

	startAutoSlides.addEventListener("click", startAutoSlideFn);
	stopAutoSlides.addEventListener("click", stopAutoSlideFn);

	// sliderWrapper.addEventListener("mouseenter", (e) => {
	// 	stopAutoSlideFn();
	// });
	// sliderWrapper.addEventListener("mouseleave", (e) => {
	// 	startAutoSlideFn();
	// });

	keyboardEvents();
}

initSlider();
