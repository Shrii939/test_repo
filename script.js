const toggleButtonLeft = document.querySelector('.toggle-left');
const toggleButtonRight = document.querySelector('.toggle-right');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const overlayLeft = document.querySelector('.overlay-left');
const overlayHeading = document.getElementById('overlay-heading');
const overlayText = document.getElementById('overlay-text');

// Function to check if it's a mobile screen
function isMobileScreen() {
    return window.innerWidth <= 912; // Adjust the screen width threshold as needed
}

toggleButtonLeft.addEventListener('click', () => {
    if (!isMobileScreen()) {
        leftPanel.classList.toggle('slide-left');
        overlayLeft.classList.toggle('slide-left');
        overlayHeading.style.transition = 'transform 0.7s ease-in-out';
        overlayHeading.style.transform =  'translateX(-250%)';
        
        overlayText.style.transition = 'transform 0.7s ease-in-out';
        overlayText.style.transform = 'translateX(-170%)';
        setTimeout(() => {
            overlayHeading.style.transition = 'transform 0.7s ease-in-out';
            overlayHeading.style.transform =  'translateX(0%)';

            overlayText.style.transition = 'transform 0.7s ease-in-out';
            overlayText.style.transform = 'translateX(0%)';
            document.getElementById('overlay-heading').textContent = 'Create an Account';
            document.getElementById('overlay-text').textContent = 'To join our community, please fill out the form.';

        }, 300);
    } else {
        // Handle mobile behavior here, e.g., switch between login and signup divs
        // You can add your mobile-specific logic here
        leftPanel.style.display = 'none';
        rightPanel.style.display = 'block';
    }
});

toggleButtonRight.addEventListener('click', () => {
    if (!isMobileScreen()) {
        overlayLeft.classList.remove('slide-left');
        overlayHeading.style.transition = 'transform 0.7s ease-in-out';
        overlayHeading.style.transform =  'translateX(250%)';
        
        overlayText.style.transition = 'transform 0.7s ease-in-out';
        overlayText.style.transform = 'translateX(170%)';
        setTimeout(() => {
            overlayHeading.style.transition = 'transform 0.7s ease-in-out';
            overlayHeading.style.transform =  'translateX(0%)';

            overlayText.style.transition = 'transform 0.7s ease-in-out';
            overlayText.style.transform = 'translateX(0%)';

            document.getElementById('overlay-heading').textContent = 'Welcome Back!';
            document.getElementById('overlay-text').textContent = 'To keep connected with us, please login with your personal info.';
        }, 300);
    } else {
        // Handle mobile behavior here, e.g., switch between login and signup divs
        // You can add your mobile-specific logic here
        leftPanel.style.display = 'block';
        rightPanel.style.display = 'none';
    }
});
