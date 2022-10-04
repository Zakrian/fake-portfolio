class ExampleWorksOnWorksPage {
	constructor(src, alt, title, year, category, descr, parentSelector) {
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.year = year;
		this.category = category;
		this.descr = descr;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('works__item', 'works__item_page', 'item-works');
		el.innerHTML = `
			<div class="item-works__img">
				<img src=${this.src} alt=${this.alt}>
				</div>
				<div class="item-works__descr">
					<h3 class="item-works__title item__title">${this.title}</h3>
					<div class="item-works__cat"><span>${this.year}</span>${this.category}</div>
					<p class="item-works__text">${this.descr}</p>
			</div>
		`;
		this.parent.append(el);
	}
}

new ExampleWorksOnWorksPage(
	"../img/works/01.jpg", 
	"works", 
	"Designing Dashboards", 
	"2020", 
	"Dashboards", 
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
	).render();

new ExampleWorksOnWorksPage(
	"../img/works/02.png",
	"works",
	"Vibrant Portraits of 2020",
	"2018",
	"Illustration",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();

new ExampleWorksOnWorksPage(
	"../img/works/03.jpg",
	"works",
	"36 Days of Malayalam type",
	"2018",
	"Typography",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();

new ExampleWorksOnWorksPage(
	"../img/works/04.jpeg",
	"works",
	"Components",
	"2018",
	"Components, Design",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();

new ExampleWorksOnWorksPage(
	"../img/works/05.webp",
	"works",
	"Designing Landing pages",
	"2020",
	"Website",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();