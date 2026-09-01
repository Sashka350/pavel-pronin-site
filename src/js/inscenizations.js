/**
 * inscenizations.js — рендер списка инсценировок.
 * Временные ссылки ведут на старый сайт; после миграции текстов будут
 * заменены на страницы /inscenizations/<slug>/ и/или ссылки на Яндекс.Диск.
 */
import { inscenizations } from '../data/inscenizations-data.js';

(function () {
  const list = document.querySelector('[data-inscenizations-list]');
  if (!list) return;

  list.innerHTML = inscenizations
    .map(function (item) {
      const href = 'https://pavelpronin.me' + item.oldUrl;
      return (
        '<li class="insc-item animate-on-scroll">' +
        '<a class="insc-item__link" href="' + href + '" target="_blank" rel="noopener">' +
        '<span class="insc-item__title">' + item.title + '</span>' +
        '<span class="insc-item__author">' + item.author + '</span>' +
        '<span class="link-arrow"><span class="arrow">→</span></span>' +
        '</a>' +
        '</li>'
      );
    })
    .join('');

  if (window.initScrollAnimations) {
    window.initScrollAnimations(list);
  }
})();