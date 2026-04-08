/*
  * This is the member renderer
  * Dont edit it too much unless you understand it!
  */
  

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
 * To add new members its similar to the sponsor page
 * As is done below, add a new member to their respective team using the below templates!
 * Also, if someone does not provide an image use the below tempalte URL, feel free to change it!
 *
 * Base photo: https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg
 *
 * Template for NOT LAST member: { name: "", desc: "", role: "", img: "" },
 * Template for LAST MEMBER: { name: "", desc: "", role: "", img: "" };
 *
 * IF NOT USING THE TWO TEMPLATES READ THIS:
 * If the member is the last member of their team add a semicolon to the end!
 * if the member is NOT the last member of teir team add a comma to the end!
 *
 * Example:
 *
 *  team: [
 *
 *    { name: "", desc: "", role: "", img: "" }, This is NOT the last team member because there are members after them so it ends with a comma!
 *    { name: "", desc: "", role: "", img: "" }, This is also NOT the last team member because there are members after them so it ends with a comma!
 *    { name: "", desc: "", role: "", img: "" }; This IS the last team member because there are not members after them so it ends with a semicolon!
 *
 *  ]
 *
 */

const members = {
  
  programmers: [
  
    { name: "Luke Newton", desc: "I do CAD, Onshape, and enjoy spending time with my friends.", role: "Lead CAD Designer", img: "https://i.postimg.cc/Xv2tHDN5/20250419-123840-Luke-Newton.jpg" },
    { name: "Gryffin Tubon", desc: "I handle website maintenance and programming.", role: "Programmer", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Liam McDermott", desc: "I assist with programming.", role: "Programmer", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Veronica Valenza-Yu", desc: "I work on programming and build.", role: "Member", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
  ],

  business: [
  
    { name: "Lydia Miller", desc: "I Work in both the build and social media teams", role: "Media Leader", img: "https://i.postimg.cc/v8vZYGmx/608A5363-Lydia-Miller.jpg" },
    { name: "Aadi Kushwaha", desc: "I work on business, outreach, and, some building.", role: "Head", img: "https://image2url.com/r2/default/images/1775685582454-a5e133a5-8e5b-4b77-9c24-6b6a959e94c1.jpeg" },
    { name: "Victor Lawson", desc: "I manage the budget and help head outreach.", role: "Captain", img: "https://image2url.com/r2/default/images/1775685539328-f2fe815f-e1c1-4ece-819c-9a677b243a4c.jpeg" },
    { name: "Sophia Mundt", desc: "I am involved with business.", role: "Member", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
  ],

  build: [

    { name: "Ella Buelling", desc: "I am the founder of the club. I work on programming, build, and driving.", role: "Captian", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Oakley Thelen", desc: "As a captain of the build team, I am involved in the planning, design, and crafting of our robot. I enjoy sharing ideas and brainstorming with teammates and the process of building, testing, and modifying to create our best possible final robot.", role: "Co-Captain", img: "https://i.postimg.cc/6pZsQh0W/IMG-3990-Oakley-Thelen.jpg" },
    { name: "Benjamin Shierloh", desc: "I work on the robot and enjoy the hands on components.", role: "Underling", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Sergio Cabada", desc: "I build game pieces and help design the robot.", role: "Member", img: "https://image2url.com/r2/default/images/1775685631065-001efdb6-e117-4189-a6e5-f7741459ac42.jpeg" },
    { name: "Tinashe Hampton", desc: "I help with building and competition.", role: "Member", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Matt Martin", desc: "I assist with build, design, and driving.", role: "Head", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
    { name: "Eyram Xexemeku", desc: "I help build parts for the robot.", role: "Member", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },
  ],

  electrical: [
    
    { name:  "Sam Shierloh", desc: "I work on the electrical components of the robot.", role: "Captain", img: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5a3a5909-c697-4498-be6d-fff92afab1f8.jpg" },
    { name: "Adam Eaton", desc: "I drive the robot during competitions.", role: "Driver", img: "https://i.postimg.cc/bwx6MVgY/istockphoto-2171382633-612x612.jpg" },

  ]

};

/*
 * These are the different team containers, to add new teams do the following:
 * Create a new team container in HTML and assign the ID to the team name!
 * then register the team below following the format below!
 */

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

