  // Your JavaScript code here
  var delay = 5; 
  var swiftness = 0.1; 

  var mouseX = 0;
  var mouseY = 0;
  var posX = 0;
  var posY = 0;

  document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function moveCursor() {
    var distX = mouseX - posX;
    var distY = mouseY - posY;

    posX += distX * swiftness;
    posY += distY * swiftness;

    document.querySelector(".mouse").style.left = posX + "px";
    document.querySelector(".mouse").style.top = posY + "px";

    document.querySelector(".mouse").style.transform = "translate(-50%, -50%)";

    requestAnimationFrame(moveCursor); 
  }

  setTimeout(moveCursor, delay);

  document.querySelectorAll("a, .dnd, .intro, .word-container").forEach(item => {
    item.addEventListener("mouseenter", function() {
      document.querySelector(".mouse").style.width = "200px";
      document.querySelector(".mouse").style.height = "200px";
      document.querySelector(".mouse").style.opacity = "0.5";
      document.querySelector(".mouse").style.zIndex = "-1";
      document.querySelector(".mouse").style.filter = "invert(1)";

    });
    item.addEventListener("mouseleave", function() {
      document.querySelector(".mouse").style.width = "100px";
      document.querySelector(".mouse").style.height = "100px";
      document.querySelector(".mouse").style.opacity = "1";
      document.querySelector(".mouse").style.filter = "invert(0)";
    });
  });

  window.onload = function() {
    var content = document.querySelector("body");
    setTimeout(function() {
      content.style.opacity = 1; // Set opacity to 1 after delay to trigger the transition
    }, 600); // Adjust the delay (in milliseconds) as needed
  }

  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.navbar, .box box-1', { origin: 'right'});
  ScrollReveal().reveal('.dnd', { origin: 'top'});
  ScrollReveal().reveal('.intro, .box box-2', { origin: 'left'});
  ScrollReveal().reveal('.container, .box box-3', { origin: 'bottom'});


  // Import GSAP plugins
  const { gsap, Power4 } = window;

  // Function to create flower animation
  function createFlowerAnimation() {
    // Create an array to store references to the flowers
    const flowers = [];

    // Generate multiple flowers
    for (let i = 0; i < 3; i++) { // Change the number to adjust the amount of flowers
      const flower = document.createElement('img');
      flower.src = 'flower.png'; // Replace 'flower.png' with the path to your flower image
      flower.style.position = 'absolute';
      flower.style.width = '50px'; // Set the width of the flower
      flower.style.height = '50px'; // Set the height of the flower
      flower.style.left = `${Math.random() * 100}%`; // Randomize flower position horizontally
      flower.style.top = `${Math.random() * 100}%`; // Randomize flower position vertically
      flower.style.opacity = 0;
      document.body.appendChild(flower);
      flowers.push(flower);
    }

    // Create a timeline for the flower animations
    const tl = gsap.timeline({ onComplete: () => {
      // Remove the flowers from the DOM after the animation completes
      flowers.forEach(flower => document.body.removeChild(flower));
    }});

    // Add animations to the timeline
    flowers.forEach(flower => {
      tl.to(flower, {
        duration: 1,
        opacity: 1,
        scale: 1,
        rotation: Math.random() * 360, // Randomize flower rotation
        x: Math.random() * 100 - 50, // Randomize flower movement horizontally
        y: Math.random() * 100 - 50, // Randomize flower movement vertically
        ease: Power4.easeInOut,
      });
    });

    // Add event listener for hover
    introElement.addEventListener('mouseenter', () => {
      // Start animation when hovered
      tl.restart();
    });
  }



  // BACK TO TOP BTN


document.addEventListener('DOMContentLoaded', function() {
  const letters = document.querySelectorAll('.letter');
  const imagePopup = document.querySelector('.image-popup');
  let hideTimer; // Variable to store timer for delayed hiding

  letters.forEach(letter => {
    letter.addEventListener('mouseover', function() {
      const imgUrl = this.getAttribute('data-img');
      if (imgUrl) {
        imagePopup.querySelector('img').src = imgUrl;
        imagePopup.classList.add('show'); // Add 'show' class to display with animation
        clearTimeout(hideTimer); // Clear any existing timer
      }
    });

    letter.addEventListener('mouseout', function() {
      // Set a timer to hide the popup after 300 milliseconds
      hideTimer = setTimeout(() => {
        imagePopup.classList.remove('show'); // Remove 'show' class to hide with animation
      }, 300);
    });
  });
});
