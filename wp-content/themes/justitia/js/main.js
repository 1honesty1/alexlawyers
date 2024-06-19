const $menuBtn = document.querySelector('.header__menu-btn')
const $nav = document.querySelector('.site__menu')
$menuBtn.addEventListener('click', () => {
	$menuBtn.classList.toggle('open')
	$nav.classList.toggle('open')
})

const $contactsPanelBtn = document.querySelector('.contacts-panel_message')
const $contactsPanel = document.querySelector('.contacts-panel_links')
$contactsPanelBtn.addEventListener('click', () => {
	$contactsPanelBtn.classList.toggle('open')
	$contactsPanel.classList.toggle('open')
})

jQuery(document).ready(function ($) {
	$('.vc_btn3-size-md').click(function () {
		titleBlock = $(this).attr('data-title-block')
		$('.hide-title').val(titleBlock)
	})
})
