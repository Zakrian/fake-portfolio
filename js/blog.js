// Класс постов и его экземпляры для страницы блога =========
class BlogColumn {
	constructor(title, dataP, dataSpan, text, parentSelector) {
		this.title = title;
		this.dataP = dataP;
		this.dataSpan = dataSpan;
		this.text = text;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('item-blog__col');
		el.innerHTML = `
			<h3 class="item-blog__title item__title">${this.title}</h3>
			<p class="item-blog__data item__data">${this.dataP}<span>${this.dataSpan}</span></p>
			<p class="item-blog__text item__text">${this.text}</p>
		`;
		this.parent.append(el);
	}
}

new BlogColumn(
	'UI Interactions of the week',
	'12 Feb 2019',
	'Express, Handlebars',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.blog__item'
).render();

new BlogColumn(
	'Making a design system from scratch',
	'12 Feb 2019',
	'Express, Handlebars',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.blog__item'
).render();

new BlogColumn(
	'Making a design system from scratch',
	'12 Feb 2019',
	'Express, Handlebars',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.blog__item'
).render();

new BlogColumn(
	'Making a design system from scratch',
	'12 Feb 2019',
	'Express, Handlebars',
	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	'.blog__item'
).render();