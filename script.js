// Select the elements 
const shareButton = document.querySelector(".share-button");
const profileSection = document.querySelector(".article-preview__profile");
const shareOptions = document.querySelector(".share-options");
const shareOptionButton = document.querySelector(".share-option-button");

// Function to hide profile and show options when clicked
shareButton.addEventListener('click', (e) => {
    profileSection.classList.add('hidden');
    shareOptions.classList.add('show-share-options');
    e.stopPropagation();
});

// Function to go back to profile and hide share options
shareOptionButton.addEventListener('click', () => {
    profileSection.classList.remove('hidden');
    shareOptions.classList.remove('show-share-options');
});

document.addEventListener('click', (e) => {
    if (!shareOptions.contains(e.target) && !shareButton.contains(e.target)) {
        profileSection.classList.remove('hidden');
        shareOptions.classList.remove('show-share-options');
    }
});


