
	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

//     // Preload the image
// const img = new Image();
// img.src = 'olive-branch.png';

// // Wait for the image to load
// img.onload = function() {
//   // Add the image to the DOM
//   const branchContainer = document.querySelector('.branch-container');
//   const branch = document.querySelector('.branch');
//   branchContainer.style.backgroundImage = `url(${img.src})`;
//   branchContainer.removeChild(branch);

//   // Start the animation
//   branch.style.display = 'inline-block';
// };
