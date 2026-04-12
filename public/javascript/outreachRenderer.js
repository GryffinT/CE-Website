class ELMNT {
  constructor(type, text, CSSclass, event, handler, id) {
    this.el = document.createElement(type);

    if (text && type.toLowerCase() === 'input') {
      this.el.placeholder = text;
    } else if (text && type.toLowerCase() === "img") {
      this.el.src = text;
    } else if (text) {
      this.el.innerHTML = text;
    }

    if (id) this.el.id = id;
    if (CSSclass) this.el.classList.add(CSSclass);
    if (event && handler) this.el.addEventListener(event, handler);
  }
}   

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  if (!canvas) {
    console.error('Element with id="canvas" not found in HTML.');
    return;
  }

  const events = [
    { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Inspiring future team members to join robotics" },
    { "name": "Advocacy Day 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Informing lawmakers about STEM initiatives" },
    { "name": "St. James School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" },
    { "name": "Edgewood Campus School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" },
    { "name": "Blessed Sacrament School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" }
  ];

  for (const event of events) {
    let image = new ELMNT('img', event.image);
    let title = new ELMNT('h1', event.name);
    let desc = new ELMNT('p', event.description);
    let card = document.createElement('div');
    card.classList.add('outreachCard');

    card.appendChild(image.el);
    card.appendChild(title.el);
    card.appendChild(desc.el);
    canvas.appendChild(card);
  }
});   
