// Определение типа устройства ===============================
// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };

// Меню бургер ===============================================

//Логика скрипта бургера:
//1. Получаем объект бургер
//2. Получаем меню, которое нужно открыть
//3. Вешаем обработчик события click на бургер (п.1)
//4. Добавляем (toggle) класс к меню (п.2)

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

		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		const topOffset = 80; // Отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Подсветка активной ссылки ================================
// const menuLink = document.querySelectorAll('.menu-header__link');

// if (menuLink) {
// 	menuLink.addEventListener("click", function (e) {
// 		menuLink.classList.add('_link-active');
// 	});
// } else {
// 	menuLink.classList.remove('_link-active');
// }