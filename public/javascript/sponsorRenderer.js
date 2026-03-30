// This renders the sponsors for the sponsors page!

class ELMNT {
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

/*
 * To add new sponsors its similar to the member page
 * As is done below, add a new sponsor to their respective tier using the below templates!
 * Because I copied this from the members page you'll have to pretend the headers match the tiers as is indicated by the comments.
 * Dont actually change "programmers" to Crusader Champion because that will cause an error!
 *
 * Template for NOT LAST Sponsor: { name: "", desc: "", role: "", img: "" },
 * Template for LAST Sponsor: { name: "", desc: "", role: "", img: "" };
 *
 * IF NOT USING THE TWO TEMPLATES READ THIS:
 * If the sponsor is the last sponsor of their tier add a semicolon to the end!
 * if the sponsor is NOT the last sponsor of teir tier add a comma to the end!
 *
 * Example:
 *
 *  tier: [
 *
 *    { name: "", desc: "", role: "", img: "" }, This is NOT the last sponsor because there are sponsors after them so it ends with a comma!
 *    { name: "", desc: "", role: "", img: "" }, This is also NOT the last sponsor because there are sponsors after them so it ends with a comma!
 *    { name: "", desc: "", role: "", img: "" }; This IS the last sponsor because there are not sponsors after them so it ends with a semicolon!
 *
 *  ]
 *
 */



const members = {
  
  programmers: [ // Actually Crusader Champion
  
    { name: "Nasa", desc: "Donated for ...", role: "$2,000", img: "https://www.nasa.gov/wp-content/uploads/2023/04/nasa-logo-web-rgb.png" },
  
  ],

  business: [ // Actually Commander
  
  
  ],

  build: [ // Actually Knight
  
  
  ],

  electrical: [ // Actually Squire



  ]

};

/*
 * These are the different tier containers, to add new tiers do the following:
 * Create a new tier container in HTML and assign the ID to the tier name!
 * then register the tier below following the format below!
 */

const containers = {
  programmers: document.getElementById('programmers'),
  business: document.getElementById('business'),
  build: document.getElementById('build'),
  electrical: document.getElementById('electrical')
};

// Dont edit below!

for (const divisionName in members) {
  const divisionMembers = members[divisionName];
  const container = containers[divisionName];

  for (const member of divisionMembers) {

    let hr = document.createElement('hr');
    let card = document.createElement('div');
    card.classList.add('memberCard');

    let image = new ELMNT('img', member.img);
    let name = new ELMNT('h1', member.name);
    let desc = new ELMNT("p", member.desc);
    let role = new ELMNT("p", member.role);

    card.appendChild(image.el);
    card.appendChild(name.el);
    card.appendChild(role.el);
    card.appendChild(hr);
    card.appendChild(desc.el);

    container.appendChild(card);
  }
}

