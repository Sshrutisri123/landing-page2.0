let lastKnownScrollPosition = 0;
let ticking = false;
let cardanimated = false;
let socialanimated = false;

function doAnimation(scrollPos) {
    const el = document.getElementById('about us');
    if (window.scrollY > 150) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
        el.classList.remove('hideEl');
    }
    const el_v_card = document.getElementById('v-card');
    if (window.scrollY > 700) {
        el_v_card.classList.add('animate__animated', 'animate__fadeInTopRight');
        el_v_card.classList.remove('hideEl');
    }

    const el_m_card = document.getElementById('m-card');
    if (window.scrollY > 1250) {
        el_m_card.classList.add('animate__animated', 'animate__fadeInBottomLeft');
        el_m_card.classList.remove('hideEl');
    }

    const el_team = document.getElementById('team1');
    if (window.scrollY > 2050) {
        el_team.classList.add('animate__animated', 'animate__fadeInLeft');
        el_team.classList.remove('hideEl');
    }

    const el_team2 = document.getElementById('team2');
    if (window.scrollY > 2300) {
        el_team2.classList.add('animate__animated', 'animate__fadeInRight');
        el_team2.classList.remove('hideEl');
    }

    // const el_service = document.getElementById('service');
    // if (window.scrollY > 1725) {
    //     el_service.classList.add('animate__animated', 'animate__zoomInUp');
    //     el_service.classList.remove('hideEl');
    // }

    // const el_cards = document.getElementById('col');
    // if (window.scrollY > 1900 && !cardanimated) {
    //     for (let e of el_cards.children) {
    //         console.log(e);
    //         e.classList.add('animate__animated', 'animate__fadeInUp','animate__flipInY','animate__slow');
    //         e.classList.remove('hideEl');
    //     }
    //     cardanimated = true;
    // }
    
    // const el_blog = document.getElementById('blog1');
    // if (window.scrollY > 3500) {
    //     el_blog.classList.add('animate__animated', 'animate__rotateInDownLeft');
    //     el_blog.classList.remove('hideEl');
    // }
   
    // const el_blog2 = document.getElementById('blog2');
    // if (window.scrollY > 3500) {
    //     el_blog2.classList.add('animate__animated', 'animate__rotateInUpRight');
    //     el_blog2.classList.remove('hideEl');
    // }
   
    // const el_social = document.getElementById('social');
    // delay = 0;
    // if (window.scrollY > 4000 && !socialanimated) {
    //     for (let e of el_social.children) {
    //         console.log(e);
    //         e.classList.add('animate__animated', 'animate__fadeInUp',`animate__delay-${delay}s`);
    //         e.classList.remove('hideEl');
    //         delay++;
    //     }
    //     socialanimated = true;
    // }

}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doAnimation(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

// chat bot js

document.getElementById('chatbot-toggle').onclick = function() {
    var container = document.getElementById('chatbot-container');
    if (container.style.display === 'none') {
      container.style.display = 'block';
      this.style.display = 'none';
    }
  };