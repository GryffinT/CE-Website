
// This renders the outreach events for the team on the front page!

const canvas = document.getElementById('canvas');

/*
 * To add new outreach events copy and paste the below template into the below events array!
 *
 *  { "name": "EVENT NAME", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
 * 
 * The last item CANNOT have a comma OR semicolon after it!
 */

const events = [

  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Inspiring future team members to join robotics" },
  { "name": "Advocacy Day 2026", "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Informing lawmakers about STEM initiatives" },
  { "name": "St. James School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" },
  { "name": "Edgewood Campus School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" },
  { "name": "Blessed Sacrament School Presentation 2026", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Bringing robotics to K-8 schools" }
  

];

for (const event of events) {

  let image = new Element('img', event.image);
  let title = new Element('h1', event.name);
  let desc = new Element('p', event.description);
  let card = document.createElement('div');

  card.appendChild(image.el);
  card.appendChild(title.el);
  card.appendChild(desc.el);
  card.classList.add('outreachCard');


  canvas.appendChild(card);

}


