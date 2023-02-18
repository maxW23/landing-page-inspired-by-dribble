// Get elements
const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

// Toggle variable 
let bool = true ;

toggleBtn.addEventListener('click' ,() => {
    /* Change Image and Text content with toggle variable*/
    if(bool === true ) {
        // Change image to light
        img.src = "./cup-light.png";

        // Change text content
        toggleText.forEach(text => {
            text.innerText = "White";
        });

        bool = false ;
    } else {
        // Change image to Dark 
        img.src = "./cup-dark.png";

        // Change text content
        toggleText.forEach(text =>{
            text.innerText = "Blvck" ;
        });
        bool = true ;
    }

    // Toggle Theme
    document.body.classList.toggle('light-theme');
    /*
    The classList property already has a pre-built toggle method ,
    so we do not need our bool(toggle) variable here
    */
   // Toggle Icon
   toggleBtn.firstElementChild.classList.toggle('fa-sun') ;
})