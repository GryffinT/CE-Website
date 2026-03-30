
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

  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" },
  { "name": "Edgewood Club Fair 2025", "image": "https://i.postimg.cc/qqk9X7w6/IMG-9474.jpg", "description": "Desc" }

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


