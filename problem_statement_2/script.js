
const observer = new IntersectionObserver((entry) => {
    
   if(entry[0].isIntersecting)
   {
      console.log(entry.target);
      
      entry[0].target.classList.add("show");
   }
});

const sections = document.querySelectorAll('.sec2');
// Array.from(sections).forEach(()={
    
// })
sections.forEach((e)=>{

    observer.observe(e);
})

