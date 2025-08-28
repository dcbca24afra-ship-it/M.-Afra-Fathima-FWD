function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}

document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    let name=document.getElementById('name').value.trim();
    let email=document.getElementById('email').value.trim();
    let message=document.getElementById('message').value.trim();
    let formMessage=document.getElementById('formMessage');

    if(name && email && message){
        formMessage.style.color="green";
        formMessage.textContent="Message sent successfully!";
        this.reset();
    }else{
        formMessage.style.color="red";
        formMessage.textContent="Please fill in all fields.";
    }
});