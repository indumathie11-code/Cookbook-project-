//navbar scroll
window.addEventListener('scroll',function(){
    let navbar = this.document.querySelector('.navbar');
    if(this.window.scrollY > 1){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})
//