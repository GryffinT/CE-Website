const carousel = document.getElementById('carousel');
const track = document.getElementById('track');

const wrapper = document.getElementById('wrapper');
const wrapper2 = document.getElementById('wrapper2');

class Element {
  constructor(type, text, CSSclass, event, handler, id) {
    this.el = document.createElement(type);

    if (text && type.toLowerCase() === 'input') {
      this.el.placeholder = text;
    } 
    else if (text && type.toLowerCase() === "img") {
      this.el.src = text;
    } 
    else if (text) {
      this.el.innerHTML = text;
    }

    if (id) this.el.id = id;
    if (CSSclass) this.el.classList.add(CSSclass);
    if (event && handler) this.el.addEventListener(event, handler);
  }
}

// Sponsors

const sponsors = [

  { "name": "SAI Logo", "logo": "https://i.postimg.cc/nVDFRLjF/Touchpad-Logo.png" },
  { "name": "Doosan Bobcat Logo", "logo": "https://i.postimg.cc/yNZpq2F9/19193-1755289422.png" },
  { "name": "Amtelco Logo", "logo": "https://i.postimg.cc/Jztdxs01/46343-en-7e77b-45495-doosan-bobcat-1.jpg" },
  { "name": "Pike Technologies Logo", "logo": "https://i.postimg.cc/tR6YjpXr/Amtelco-Logo-Pngsource-P6S1X9G4-removebg-preview.png" },
  { "name": "The Argosy Foundation Logo", "logo": "https://i.postimg.cc/MHTywjhF/Argosy-Foundation-Logo-CMYK.jpg" },
  { "name": "The Argosy Foundation Logo", "logo": "https://i.postimg.cc/rm309pqD/doosan-bobcat-company-business-logo-architectural-engineering-business-removebg-preview.png" },
  { "name": "The Argosy Foundation Logo", "logo": "https://i.postimg.cc/SstnW1vs/SAI-Full-Logo-Corp-RGB-scaled.png" }

];


// Populate function

let populateWrapper = (wrapperEl) => {
  sponsors.forEach(s => {
    const img = document.createElement('img');
    img.src = s.logo;
    img.alt = s.name;
    img.classList.add('sponsorLogo');
    wrapperEl.appendChild(img);
  });
}

populateWrapper(wrapper);
populateWrapper(wrapper2);

wrapper.style.left = '0px';

wrapper2.style.left = `${wrapper.offsetWidth + 120}px`;

// Carousel Speed

const speed = .5;

// Track Animation Function

let animateTrack = () => {
  const wrappers = [wrapper, wrapper2];

  wrappers.forEach(w => {
    let currentLeft = parseFloat(w.style.left) - speed;

    if (currentLeft + w.offsetWidth <= 0) {
      // Find rightmost wrapper
      const otherWrapper = wrappers.find(ow => ow !== w);
      currentLeft = parseFloat(otherWrapper.style.left) + otherWrapper.offsetWidth + 120;
    }

    w.style.left = `${currentLeft}px`;
  });

  requestAnimationFrame(animateTrack);
}

animateTrack();

