// Меню бургер ===============================================

const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active__burger');
		if (menuBody) {
			menuBody.classList.toggle('_menu__visible');
		}
	});
}

// Плавный скролл к якорю ===================================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 80; // Отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Класс колонок поста и его экземпляры =====================
class PostColumn {
	constructor(title, dataP, dataSpan, text, parentSelector) {
		this.title = title;
		this.dataP = dataP;
		this.dataSpan = dataSpan;
		this.text = text;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('bottom-post__col');
		el.innerHTML = `
			<h3 class="bottom-post__title item__title">${this.title}</h3>
			<p class="bottom-post__data item__data">${this.dataP}<span>${this.dataSpan}</span></p>
			<p class="bottom-post__text item__text">${this.text}</p>
		`;
		this.parent.append(el);
	}
}

new PostColumn(
	'Making a design system from scratch',
	'12 Feb 2020',
	'Design, Pattern',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.bottom-post__item'
).render();

new PostColumn(
	'Creating pixel perfect icons in Figma',
	'12 Feb 2020',
	'Figma, Icon Design',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.bottom-post__item'
).render();

// Класс примеров работ и его экземпляры ====================
class ExampleWorks {
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
		el.classList.add('works__item', 'item-works');
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

new ExampleWorks(
	"img/works/01.jpg", 
	"works", 
	"Designing Dashboards", 
	"2020", 
	"Dashboards", 
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
	).render();

new ExampleWorks(
	"img/works/02.png",
	"works",
	"Vibrant Portraits of 2020",
	"2018",
	"Illustration",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();

new ExampleWorks(
	"img/works/03.jpg",
	"works",
	"36 Days of Malayalam type",
	"2018",
	"Typography",
	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	".works__content"
).render();