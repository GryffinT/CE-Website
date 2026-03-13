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

// Template: { name: "", desc: "", role: "", img: "" }
// Base photo: https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg

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

const containers = {
  programmers: document.getElementById('programmers'),
  business: document.getElementById('business'),
  build: document.getElementById('build'),
  electrical: document.getElementById('electrical')
};

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

