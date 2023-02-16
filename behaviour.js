
//smooth scrolling

// document.querySelectorAll('.scroll').forEach(anchor => {
//         anchor.addEventListener("click", function(e){
//             e.preventDefault();
//             setTimeout(() => {
//                 console.log('Hi');
//                 window.scrollTo({ 
//                     top: 0, 
//                     behavior: 'smooth'
//                 });
//             }, 200);
//         });
//     });

// //otherway, works
  document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth',
            // alignToTop:true,
            // block:'start'
        });
    });
});
//layout



// document.addEventListener('scroll', () => {
//     console.log(mountain1);
//     let value = window.scrollY;
//     mountain2.style.top = value * 1 + 'px';
//   });

