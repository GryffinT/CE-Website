const section = document.getElementById("FRC");

const description = `"Starting with a Kit of Parts, teams of high school students design, program, and build industrial-sized robots to play an action-packed game, released in January. They compete on a themed field as part of a three-team alliance in the spirit of Coopertition®. In 360-degree learning guided by adult mentors, each FIRST® Robotics Competition team also creates a team identity, raises funds to meet its goals, and advances appreciation for STEM in its community." (from FIRST Robotics Competition)`;

const header = "Who are we and what is FRC?";
const subheader = "Cutting Edge #10909, based in Madison WI, is Edgewood Highschool's FIRST Robotics Competition (FRC) team.";

let headerElem = document.getElementById("header");
let subHeaderElem = document.getElementById("subheader");
let descriptionElem = document.getElementById("description");

headerElem.innerText = header;
subHeaderElem.innerText = subheader;
descriptionElem.innerText = description;

