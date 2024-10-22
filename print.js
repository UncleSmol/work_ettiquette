document.addEventListener('DOMContentLoaded', () => {
	const pages = document.querySelectorAll('.page');
	const pageCount = pages.length;
	const backToHomeButton = document.getElementById('back-to-home-button');
	let timeoutId;
	let prevScrollPos = window.pageYOffset; // Store initial scroll position

	// Add page numbers
	pages.forEach((page, index) => {
		const pageNumber = document.createElement('footer');
		Object.assign(pageNumber, {
			className: 'page-number',
			textContent: `Page ${index + 1} of ${pageCount}`,
			style:
				'position: absolute; bottom: 10px; right: 10px; font-size: 10pt; color: #333;',
		});
		page.appendChild(pageNumber);
		page.style.position = 'relative';
	});

	// Hide button initially
	backToHomeButton.style.display = 'none';

	// Show/hide button on scroll
	window.addEventListener('scroll', () => {
		clearTimeout(timeoutId); // Clear any existing timeout

		// Check if scrolling up
		if (window.pageYOffset < prevScrollPos && window.pageYOffset > 200) {
			backToHomeButton.style.display = 'block';
		} else {
			backToHomeButton.style.display = 'none';
		}

		prevScrollPos = window.pageYOffset; // Update previous scroll position

		// Hide after 2 seconds of inactivity
		timeoutId = setTimeout(() => {
			backToHomeButton.style.display = 'none';
		}, 2000);
	});
});
