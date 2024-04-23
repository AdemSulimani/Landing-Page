'use strict'

//Navbar

const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const sideBar = document.querySelector('.sidebar');

openBtn.addEventListener('click', () => {
    sideBar.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none'
})

// Animation on scroll

function startCounting() {
    let counters = document.querySelectorAll('.counter');
    let speed = 550;
  
    counters.forEach(counter => {
      let target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
  
      let updateCount = () => {
        let increment = target / speed;
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  }
  
 
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect(); 
      }
    });
  });
  
  
  observer.observe(document.querySelector('.facts'));

  //Accordion content

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const parentCard = button.closest('.accordion-card');
        const content = parentCard.querySelector('.accordion-content');
    
        button.classList.toggle('purple');
        button.querySelector('.down').classList.toggle('rotate');
        
        content.classList.toggle('active');
        
        const allCards = document.querySelectorAll('.accordion-card');
        allCards.forEach(card => {
          const cardContent = card.querySelector('.accordion-content');
          if (card !== parentCard && cardContent.classList.contains('active')) {
            cardContent.classList.remove('active');
            const otherButton = card.querySelector('.accordion-btn');
            otherButton.classList.remove('purple');
            otherButton.querySelector('.down').classList.remove('rotate');
          }
        });
      });
    });
  });