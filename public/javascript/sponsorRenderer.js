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



// Flattened list of ALL sponsors, regardless of tier
const allSponsors = [
  { name: "Nasa", role: "$2,000", img: "https://www.nasa.gov/wp-content/uploads/2023/04/nasa-logo-web-rgb.png" },
  { name: "PIKE Technologies ", role: "$"},
  { name: "The Robonauts ", role: "$"},
  { name: "TouchPad Electronics ", role: "$"},
  { name: "AmtelCo ", role: "$"},
  { name: "Wisconsin Dept. Of Public Instruction ", role: "$"},
  { name: "Argosy Foundation ", role: "$"},
  { name: "DOOSAN Bobcat ", role: "$"},
  { name: "Gene Haas Foundation ", role: "$"},
  { name: "Strand Associates ", role: "$"}
  // Add other sponsors from other tiers here as needed
  // { name: "Google", desc: "Supports innovation", role: "$1,500", img: "https://logo.clearbit.com/google.com" },
];

// Get a single container from the HTML (you must have this in your HTML)
const container = document.getElementById('all-sponsors');

// Render all sponsors in one loop
allSponsors.forEach(sponsor => {
  let hr = document.createElement('hr');
  let card = document.createElement('div');
  card.classList.add('memberCard');

  let image = new ELMNT('img', sponsor.img);
  let name = new ELMNT('h1', sponsor.name);
  let desc = new ELMNT("p", sponsor.desc);
  let role = new ELMNT("p", sponsor.role);

  //card.appendChild(image.el);
  card.appendChild(name.el);
  card.appendChild(role.el);
  card.appendChild(hr);
  card.appendChild(desc.el);

  container.appendChild(card);
});

