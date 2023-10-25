let about = document.getElementById('about-link'),
 resume = document.getElementById('resume-link'),
 work = document.getElementById('work-link'),
 blog = document.getElementById('blog-link'),
 contact = document.getElementById('contact-link')


    about.addEventListener('click', ()=>{
        document.getElementById('about-profile').classList.add('animateRigthFadeOut')

        document.getElementById('resume-profile').classList.add('animateLeftFadeIn')
        document.getElementById('works-profile').classList.add('animateLeftFadeIn')
        document.getElementById('blog-profile').classList.add('animateLeftFadeIn')
        document.getElementById('contact-profile').classList.add('animateLeftFadeIn')

        document.getElementById('resume-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('works-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('blog-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('contact-profile').classList.remove('animateRigthFadeOut')
    })
    resume.addEventListener('click', ()=>{
        document.getElementById('resume-profile').classList.add('animateRigthFadeOut')
        
        document.getElementById('about-profile').classList.add('animateLeftFadeIn')
        document.getElementById('works-profile').classList.add('animateLeftFadeIn')
        document.getElementById('blog-profile').classList.add('animateLeftFadeIn')
        document.getElementById('contact-profile').classList.add('animateLeftFadeIn')

        document.getElementById('about-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('works-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('blog-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('contact-profile').classList.remove('animateRigthFadeOut')
    })
    work.addEventListener('click', ()=>{
        document.getElementById('works-profile').classList.add('animateRigthFadeOut')
        
        document.getElementById('about-profile').classList.add('animateLeftFadeIn')
        document.getElementById('resume-profile').classList.add('animateLeftFadeIn')
        document.getElementById('blog-profile').classList.add('animateLeftFadeIn')
        document.getElementById('contact-profile').classList.add('animateLeftFadeIn')

        document.getElementById('about-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('resume-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('blog-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('contact-profile').classList.remove('animateRigthFadeOut')
    })
    blog.addEventListener('click', ()=>{
        document.getElementById('blog-profile').classList.add('animateRigthFadeOut')
        
        document.getElementById('about-profile').classList.add('animateLeftFadeIn')
        document.getElementById('resume-profile').classList.add('animateLeftFadeIn')
        document.getElementById('works-profile').classList.add('animateLeftFadeIn')
        document.getElementById('contact-profile').classList.add('animateLeftFadeIn')

        document.getElementById('about-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('resume-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('works-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('contact-profile').classList.remove('animateRigthFadeOut')
    })
    contact.addEventListener('click', ()=>{
        document.getElementById('contact-profile').classList.add('animateRigthFadeOut')
        
        document.getElementById('about-profile').classList.add('animateLeftFadeIn')
        document.getElementById('resume-profile').classList.add('animateLeftFadeIn')
        document.getElementById('works-profile').classList.add('animateLeftFadeIn')
        document.getElementById('blog-profile').classList.add('animateLeftFadeIn')

        document.getElementById('about-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('resume-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('works-profile').classList.remove('animateRigthFadeOut')
        document.getElementById('blog-profile').classList.remove('animateRigthFadeOut')
    })
    

    // sending message via email
    function sendMail(){
        let userInfo = {
            email_id: document.getElementById('email').value,
            from_name: document.getElementById('name').value,
            message: document.getElementById('message').value,
        }
        emailjs.send("service_8ad5dhy","template_6rgy65d",  userInfo);
    
    }