document.addEventListener('DOMContentLoaded', function() {
	const popoverContainer = document.querySelector('.popover__container');
	const popoverImages = document.querySelectorAll('.popover__image');

	document.body.addEventListener('click', (event) => {
		if (event.target.classList.contains('thumbnail')) {
			const index = Array.from(document.querySelectorAll('.thumbnail')).indexOf(event.target);
			const popoverImage = popoverImages[index];
			popoverContainer.classList.add('open');
			popoverImage.classList.add('open');
		} else if (event.target.classList.contains('close-popover')) {
			popoverContainer.classList.remove('open');
			popoverImages.forEach(image => image.classList.remove('open'));
		}
	});

	document.body.addEventListener('keydown', (event) => {
		if (event.code === 'Space' && document.activeElement.classList.contains('thumbnail')) {
			event.preventDefault();
			const index = Array.from(document.querySelectorAll('.thumbnail')).indexOf(document.activeElement);
			const popoverImage = popoverImages[index];
			popoverContainer.classList.add('open');
			popoverImage.classList.add('open');
		} else if (event.code === 'Escape') {
			popoverContainer.classList.remove('open');
			popoverImages.forEach(image => image.classList.remove('open'));
		}
	});
});
