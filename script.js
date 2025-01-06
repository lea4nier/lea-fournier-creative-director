// Select all video elements
const videos = document.querySelectorAll('video');

// Loop through each video element
videos.forEach((video, index) => {
    // Make the first video clickable to redirect to resume.html
    if (index === 0) {
        video.addEventListener('click', () => {
            window.location.href = 'resume.html';
        });
    }

    // Listen for the 'ended' event on the video
    video.addEventListener('ended', () => {
        // Create a new anchor element
        const link = document.createElement('a');

        // Set the href attribute of the anchor to the desired URL
        link.href = index === 0 ? 'resume.html' : '#'; // Redirect to resume.html for 1.mp4

        // Create a new image element
        const img = document.createElement('img');

        // Set the source of the image based on the video index
        img.src = `assets/images/${index + 1}.png`;

        // Add alt text for accessibility
        img.alt = `Replacement image for video ${index + 1}`;

        // Add a class for styling if needed
        img.classList.add('fade-in');

        // Append the image to the anchor
        link.appendChild(img);

        // Add the fade-out class to the video
        video.classList.add('fade-out');

        // Wait for the fade-out animation to complete
        video.addEventListener(
            'transitionend',
            () => {
                // Replace the video with the anchor (which contains the image)
                video.parentNode.replaceChild(link, video);
            },
            { once: true }
        );
    });
});
