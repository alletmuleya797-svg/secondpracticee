const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementById('rotating-image');

function rotateImages() {
    imageElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1; // Fade in
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    }, 1000); // Duration of fade out
}

setInterval(rotateImages, 3000); // Change image every 3 seconds


//IMAGE SLIDE
let currentSlide = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');

    if (sectionId === 'rooms') {
        showSlide(currentSlide);
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}/



//EDITED IMAGE SLIDER
// 1. Define the rooms data
const rooms = [
    { name: "Luxury Suite", image: "images/Villa5.jpg" },
    { name: "Standard Double", image: "images/Villa 4.jpg" },
    { name: "Family Loft", image: "images/BaTonga Villa2.jpg" }
    // Add more rooms as needed. Make sure you have the images in an 'images' folder!
];

// 2. Get the DOM elements
const roomImage = document.getElementById('room-image');
const roomDescription = document.getElementById('room-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 3. Initialize the current room index
let currentRoomIndex = 0;

// 4. Function to update the display
function updateRoomDisplay() {
    const currentRoom = rooms[currentRoomIndex];
    
    // Change the image source
    roomImage.src = currentRoom.image;
    
    // Change the description text
    roomDescription.textContent = currentRoom.name;
}

// 5. Function to show the next room
function showNextRoom() {
    // Increment the index, and loop back to 0 if we pass the last room
    currentRoomIndex = (currentRoomIndex + 1) % rooms.length;
    updateRoomDisplay();
}

// 6. Function to show the previous room
function showPrevRoom() {
    // Decrement the index. If it goes below 0, loop to the last room (rooms.length - 1)
    currentRoomIndex = (currentRoomIndex - 1 + rooms.length) % rooms.length;
    updateRoomDisplay();
}

// 7. Add event listeners to the buttons
nextBtn.addEventListener('click', showNextRoom);
prevBtn.addEventListener('click', showPrevRoom);

// 8. Initial display when the page loads
updateRoomDisplay();