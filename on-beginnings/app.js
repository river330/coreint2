const cards = document.querySelectorAll(".card");
let tests = document.querySelectorAll(".test");

const lastCardObserver = new IntersectionObserver(entries => {
	const lastCard = entries[0]
	if (!lastCard.isIntersecting) return
	onLoad();
	lastCardObserver.unobserve(lastCard.target);
	lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {})

lastCardObserver.observe(document.querySelector(".card:last-child"))

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting)
	})
}, {
	threshold:.5,
	rootMargin: "-50px"
})

const animationStart = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("animation", entry.isIntersecting)
	})
}, {
	threshold:.5,
	rootMargin: "-50px"

})


cards.forEach(card => {
	observer.observe(card)
})

tests.forEach(test => {
	animationStart.observe(test)
})




const cardContainer = document.querySelector(".card-container");
function loadNewCards() {
	for (let i=0; i < 10; i++) {
		const card = document.createElement("div")
		card.textContent = "New Card"
		card.classList.add("card")
		observer.observe(card)
		cardContainer.append(card) 
	}
}


function onLoad(){
	cards.forEach(card => {
		const clone = card.cloneNode(true);
		observer.observe(clone);
		cardContainer.appendChild(clone); 
});
let tests = document.querySelectorAll(".test");

	tests.forEach(test => {
	animationStart.observe(test)
})

};

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


