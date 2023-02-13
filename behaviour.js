document.querySelectorAll('a^[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('hfer')).scrollIntoView({
            behavior:'smooth',
            // alignToTop:true,
            // block:'start'
        });
    });
});

// document.querySelectorAll('.anchor').scrollIntoView({ 
//     behavior: 'smooth'}); 
