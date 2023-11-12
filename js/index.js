let about = document.getElementById('about-link'),
 resume = document.getElementById('resume-link'),
 work = document.getElementById('work-link'),
 blog = document.getElementById('blog-link'),
 contact = document.getElementById('contact-link'),
 dark = document.getElementById('dark'),
 light = document.getElementById('light'),
 root = document.querySelector(':root');


 dark.addEventListener('click', ()=>{
    dark.style.fill = "#78cc6d"
    light.style.fill = "#000000"
   root.style.setProperty("--bg-color1", "#0F0F0F")
   root.style.setProperty( "--bg-color2", "#352F44")
   root.style.setProperty( "--card-color", "#352F44")
   root.style.setProperty( "--dark-text-color", "#383232")
   root.style.setProperty( "--light-text-color", "#ffffff")
   root.style.setProperty( "--border-color", "rgba(74, 74, 74, 3)")
 })
 light.addEventListener('click', ()=>{
    light.style.fill = "#78cc6d"
    dark.style.fill = "#000000"
   root.style.setProperty("--bg-color1", "#50a3a2")
   root.style.setProperty( "--bg-color2", "#78cc6d")
   root.style.setProperty( "--card-color", "#7ec986")
   root.style.setProperty( "--dark-text-color", "#ffffff")
   root.style.setProperty( "--light-text-color", "#383232")
   root.style.setProperty( "--border-color", "#ccc9c9b3")
 })


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