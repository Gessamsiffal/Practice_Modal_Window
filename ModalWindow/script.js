'use strict'

const modalWindow = document.querySelector('.modal-window')
const overlay = document.querySelector('.overlay')
const btnCloseModelWindow = document.querySelector('.close-modal-window')
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window')

const visible = function () {
	modalWindow.classList.add('hidden')
	overlay.classList.add('hidden')
}

const invisible = function () {
	modalWindow.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsShowModalWindow.length; i++) {
	btnsShowModalWindow[i].addEventListener('click', invisible)

	btnCloseModelWindow.addEventListener('click', visible)
}

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
		visible()
	}
})
