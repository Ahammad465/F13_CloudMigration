document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('button[data-toggle="details"]');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (targetElement.style.display === 'none' || !targetElement.style.display) {
                    targetElement.style.display = 'block';
                    this.classList.add('clicked'); // Add 'clicked' class to the button
                } else {
                    targetElement.style.display = 'none';
                    this.classList.remove('clicked'); // Remove 'clicked' class from the button
                }
            }
        });
    });
});
