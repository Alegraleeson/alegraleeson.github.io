const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

const homeSection = document.getElementById("home-section");
const projectSection = document.getElementById("projects-section");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");

const home = document.getElementById("home-link");
const projects = document.getElementById("projects-link");
const about = document.getElementById("about-link");
const contact = document.getElementById("contact-link");

const header = document.getElementById("header");
const content = document.getElementById("content-container");

const soon = document.getElementById('coming-soon');

const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const email = document.getElementById("contactAbout");




console.log("connected successfully!")



    function removeActive () {
        homeSection.style.opacity = 0;
        projectSection.style.opacity = 0;
        aboutSection.style.opacity = 0;
        contactSection.style.opacity = 0;
    }

    function opacityZero () {
        sections.forEach( elem => {
            elem.style.opacity = 0;

        })
        
    }

    function addActive (section)  {
        section.style.opacity = 1;
        
            }



// const displayNav = () => {
//     if(nav.classList.contains("show")){
//         nav.style.display = "block";
//         downArrow.setAttribute("hidden", "hidden");
//         nav.classList.remove("show");
//     } else {
//         nav.style.display = "none";
//         downArrow.removeAttribute("hidden")
//         nav.classList.toggle("show");

//     }
    
// }

// const displayFooter = () => {
//     if(footer.classList.contains("show")){
//         footer.style.display = "block";
//         upArrow.setAttribute("hidden", "hidden");
//         footer.classList.remove("show");
//     } else {
//         footer.style.display = "none";
//         upArrow.removeAttribute("hidden")
//         footer.classList.toggle("show");

//     }
    
// }

// function showAlert() {
//     alert ("Coming soon!");
//   }

// soon.addEventListener('click', showAlert)

// header.addEventListener('dblclick', displayHeader)
// footer.addEventListener('dblclick', displayFooter)
// downArrow.addEventListener('click', displayHeader)
// upArrow.addEventListener('click', displayFooter)
// email.addEventListener('click', () => email.setAttribute("href=", "mailto:alegraleeson@gmail.com"));

function displayHome (){
    // removeActive();
    header.innerHTML = ''
    content.innerHTML = ''

    content.innerHTML = `
    <section id="home-section" class="home-section">
    <img id = "profilePic" src="img/1516882473755.jpg" class="home-img" alt="">
    <h1 class="hero-heading">Alegra Leeson<br> Software Engineer</h1>
    </section>
    `
    
    // addActive(home);
    // addActive(homeSection);
    
}

function displayProjects (){
    header.innerHTML = ''
    content.innerHTML = ''
    
    header.innerHTML = 'some of my projects'
    content.innerHTML = `
    <section id="project-section" class="project-section">
    <div class="project-container">
        <div class="project-card">
            <img src="img/Dinner-Picker-Screenshot.png" class="project-img" alt="">
            <div class="project-content">
                <h1 class="project-title">Dinner Picker</h1>
                    <p class ="project-info">TECH STACK: HTML5, CSS3, JAVASCRIPT, NODE.JS, AXIOS, POSTGRE SQL</p>
                    <p class="project-info">This is an app to help you decide what to have for dinner.  The dinner-picker randomly selects an item from a list for you. You can save, add, and delete items to create your ultimate weekly dinner plan.</p>
                <div class="project-btn-grp">
                    <a class="project-btn github" href="https://github.com/Alegraleeson/dinner-picker" target="_blank" rel="noreferrer noopener">github repo</a>
                    <a class="project-btn github" href="https://youtu.be/BsKYoDPo_6M" target="_blank" rel="noreferrer noopener">view demo</a>
                    <a class="project-btn live" href="https://bp3demo.herokuapp.com/index.html" target="_blank" rel="noreferrer noopener">see live</a>
                </div>
            </div>
        </div>
        <div class="project-card">
            <img src="img/Screenshot 2022-10-13 114219.png" class="project-img" alt="">
            <div class="project-content">
                <h1 class="project-title">Collection Connection</h1>
                    <p class ="project-info">TECH STACK: JAVA, HIBERNATE, MAVEN, SPRING BOOT, postgreSQL, JAVASCRIPT, HTML5, CSS3, BOOTSTRAP</p>
                    <p class="project-info">Collection Connection is the premier app to help you store data about your collections.  </p>
                <div class="project-btn-grp">
                    <a class="project-btn github" href="https://github.com/Alegraleeson/dinner-picker" target="_blank" rel="noreferrer noopener">github repo</a>
                    <a class="project-btn github" href="https://www.youtube.com/watch?v=SwobOo3NSX4" target="_blank" rel="noreferrer noopener">view demo</a>
                    <a id="coming-soon" class="project-btn live">see live</a>
                </div>
            </div>
    </div>
</section>
    `
    // removeActive();
    // addActive(projects);
    // addActive(projectSection);
}

function displayAbout (){
    header.innerHTML = ''
    content.innerHTML = ''

    header.innerHTML = 'a bit about me'
    content.innerHTML = `
    <section id="about-section" class="about-section">
    <div class="about">
        
        <div class="about-img-container">
            
            <img src="img/49276571316_4edaafaf46_o.JPG" class="about-img" alt="">
            <a id="resume" class=" download-cv-btn" href="./Backgrounds/Alegra Leeson Software Developer Resume.pdf" target="_blank" rel="noreferrer noopener"> Download Resume</a>
            <!-- <button class="download-cv-btn">download resume</button> -->
        </div>
        <div class="about-info">
            <p class="about-text">Hello!  My name is Alegra and I love creating things!</p>  
            <p class="about-text">My love of coding and web design started way back in '98, when 10 year old me learned hex to edit animals in a computer game called Petz and then learned html to make geocities websites to share downloads of my edits with the world.  </p>
            <p class="about-text">I went to college for computer animation, and got a bachelor's in Applied Computer Graphics, with a minor in fine art.  While in college, I felt  wanted to switch from the art side to the coding side, but felt I couldn't switch majors due to the quickly rising college costs at the time.  I took a position working at Marymount Villa as the Business Office Manager, and found myself quickly learning new technologies and creating ways to automate processes. </p>
            <p class="about-text">Fast forward to today, I managed to accepted  into a sponsored coding bootcamp where I learned full stack web development as well as a lot about working in tech.  Responsivness, functionality, and accessibilty are of great importance to me. </p>

        </div>
        
    </div>

    <!-- skills -->
<div id="skill-section" class="skill-section">
    <h1 class="heading">some of my skills</h1>
    <div class="skills-container">
        <!-- <div class="skill-card">
            <img src="img/html.png" class="skill-img" alt=""> -->
            <!-- <div class="skill-level">98%</div> -->
            <!-- <h1 class="skill-name">HTML</h1>
            <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
        </div> -->
        <span class="icons"><i class="devicon-javascript-plain"></i>Javascript</span>
                    <span class="icons"><i class="devicon-java-plain-wordmark"></i>Java</span>
                    <span class="icons"><i class="devicon-html5-plain-wordmark"></i>HTML5</span>
                    <span class="icons"><i class="devicon-css3-plain-wordmark"></i>CSS3</span>
                    <span class="icons"><i class="devicon-nodejs-plain"></i>Node.js</span>
                    <span class="icons"><i class="devicon-sequelize-plain-wordmark"></i>Sequelize</span>
                    <span class="icons"><i class="devicon-postgresql-plain-wordmark"></i>Postgre SQL</span>
                    <span class="icons"><i class="devicon-express-original"></i>Express</span>
                    <span class="icons"><i class="devicon-vscode-plain-wordmark"></i>VS Code</span>
                    <span class="icons"><i class="devicon-git-plain-wordmark"></i>Git</span>
                    <span class="icons"><i class="devicon-github-original-wordmark"></i>Github</span>
                    <span class="icons"><i class="devicon-heroku-original-wordmark"></i>Heroku</span>
    </div>
</div>

<!-- timeline
<div class="timeline">
    <h1 class="heading">education and experience</h1>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">2022</h1>
            <p class="card-detail">Completed a software engineering course at DevMountain where I learned full stack web development and computer science fundamentals in preparation for a career in software engineering.
            </p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">2008 - Sep 2022</h1>
            <p class="card-detail">Designer  											
            Ivy Frozen Productions
            IvyFrozen.com - designed and built multiple iterations with HTML & CSS  
            Built an ecommerce and portfolio website to show off clothing designs to interested and diverse minded clients
            Operated various machines and equipment necessary to implement business growth such as pr1000e, babylock serenade 
            Worked with customers to create custom designs and resolve any issues
            
            </p>
        </div>
    </div>
</div>

</section> -->
    `
    // removeActive();
    // addActive(about);
    // addActive(aboutSection);
}

function displayContact (){
    header.innerHTML = ''
    content.innerHTML = ''

    header.innerHTML = "let's connect!"
    content.innerHTML = `
    <section id="contact-section" class="contact-section">
    
        <div class="contact-links">
        
        <a class ="contact-btn link" href="mailto:alegraleeson@gmail.com" target="_blank" rel="noreferrer noopener">E-Mail</a>
        <a id="resume" class="contact-btn link" href="img/Alegra Leeson Resume (7).pdf" target="_blank" rel="noreferrer noopener">Resume</a>
        <a class="contact-btn link" href="https://www.linkedin.com/in/alegraleeson" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        <a class="contact-btn link" href="https://github.com/Alegraleeson" target="_blank" rel="noreferrer noopener">Github</a>
                   
        </div>

        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.47666054723!2d-93.33151843815324!3d44.970675595318745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1665505944698!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
    `
    // removeActive();
    // addActive(home);
    // addActive(aboutSection);
}

home.addEventListener('click', displayHome)
projects.addEventListener('click', displayProjects)
about.addEventListener('click', displayAbout)
contact.addEventListener('click', displayContact)


  function dropdown(x) {
    var linx = document.getElementById("myLinks");
    if (linx.style.display === "block") {
      linx.style.display = "none";
      x.classList.toggle("change");
      
    } else {
      linx.style.display = "block";
      x.classList.toggle("change");
    }
  }

displayHome();