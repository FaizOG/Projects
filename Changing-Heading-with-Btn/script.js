let heading = document.getElementById("heading");
let btn = document.querySelector("#cng-btn");
let btn2 = document.getElementById("og-btn");
btn2.disabled = true;
let body = document.body;
let counter = document.getElementById("counter");
let count = 0;

const headingData = [
  {
    heading: "Welcome to My Website",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 152, 219)"
  },
  {
    heading: "JavaScript is Awesome",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(241, 196, 15)"
  },
  {
    heading: "Frontend Development Rocks",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(155, 89, 182)"
  },
  {
    heading: "Coding Made Simple",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(46, 204, 113)"
  },
  {
    heading: "Learn HTML and CSS",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(230, 126, 34)"
  },
  {
    heading: "Master JavaScript Today",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(231, 76, 60)"
  },
  {
    heading: "Build Amazing Projects",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(26, 188, 156)"
  },
  {
    heading: "Web Design Inspiration",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(236, 240, 241)"
  },
  {
    heading: "Creative Coding Journey",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(142, 68, 173)"
  },
  {
    heading: "Responsive Design Matters",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 73, 94)"
  },
  {
    heading: "Practice Makes Perfect",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(241, 196, 15)"
  },
  {
    heading: "Dream Big Code Bigger",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(211, 84, 0)"
  },
  {
    heading: "UI/UX for Beginners",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(41, 128, 185)"
  },
  {
    heading: "Explore Modern Web Apps",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(39, 174, 96)"
  },
  {
    heading: "Keep Learning Every Day",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(192, 57, 43)"
  },
  {
    heading: "Programming is Fun",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(22, 160, 133)"
  },
  {
    heading: "Design with Passion",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(243, 156, 18)"
  },
  {
    heading: "Future Web Developer",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(127, 140, 141)"
  },
  {
    heading: "Code Your Imagination",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 152, 219)"
  },
  {
    heading: "Technology Changes Everything",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(44, 62, 80)"
  },
  {
    heading: "Interactive Web Experience",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(142, 68, 173)"
  },
  {
    heading: "Start Your Coding Career",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(46, 204, 113)"
  },
  {
    heading: "Level Up Your Skills",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(231, 76, 60)"
  },
  {
    heading: "Innovation Through Code",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 73, 94)"
  },
  {
    heading: "Create Something Amazing",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(236, 240, 241)"
  },
  {
    heading: "Think Like a Developer",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(155, 89, 182)"
  },
  {
    heading: "Learn Build Repeat",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(39, 174, 96)"
  },
  {
    heading: "The Power of JavaScript",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(241, 196, 15)"
  },
  {
    heading: "Minimal Design Aesthetic",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(189, 195, 199)"
  },
  {
    heading: "Coding Challenges Ahead",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(192, 57, 43)"
  },
  {
    heading: "Dynamic Websites in Action",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(41, 128, 185)"
  },
  {
    heading: "Push Your Creativity",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(142, 68, 173)"
  },
  {
    heading: "One Line at a Time",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(22, 160, 133)"
  },
  {
    heading: "Build the Future",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 152, 219)"
  },
  {
    heading: "Coding Never Stops",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(231, 76, 60)"
  },
  {
    heading: "Stay Curious Keep Coding",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(243, 156, 18)"
  },
  {
    heading: "Develop Your Potential",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(39, 174, 96)"
  },
  {
    heading: "Modern UI Components",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 73, 94)"
  },
  {
    heading: "Simple Yet Powerful",
    textColor: "rgb(44, 62, 80)",
    bgColor: "rgb(236, 240, 241)"
  },
  {
    heading: "Code and Create",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(155, 89, 182)"
  },
  {
    heading: "Frontend Magic",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 152, 219)"
  },
  {
    heading: "Design Develop Deploy",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(46, 204, 113)"
  },
  {
    heading: "Write Better Code",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(211, 84, 0)"
  },
  {
    heading: "The Art of Programming",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(44, 62, 80)"
  },
  {
    heading: "Unlock Web Development",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(26, 188, 156)"
  },
  {
    heading: "Coding with Confidence",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(192, 57, 43)"
  },
  {
    heading: "From Beginner to Pro",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(41, 128, 185)"
  },
  {
    heading: "Explore New Technologies",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(142, 68, 173)"
  },
  {
    heading: "Web Development Journey",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(39, 174, 96)"
  },
  {
    heading: "Success Starts with Code",
    textColor: "rgb(255, 255, 255)",
    bgColor: "rgb(52, 73, 94)"
  }
];

btn.addEventListener("click", function () {
    heading.innerHTML = headingData[Math.floor(Math.random() * headingData.length)].heading;

    heading.style.color = headingData[Math.floor(Math.random() * headingData.length)].textColor;

    body.style.backgroundColor = headingData[Math.floor(Math.random() * headingData.length)].bgColor;
    btn2.disabled = false; 
    count++;
    counter.innerHTML = count; 
});

btn2.addEventListener("click", function () {
    heading.innerHTML = "Original Heading";
    heading.style.color = "black";
    body.style.backgroundColor = "white";
    btn2.disabled = true; 
    counter.innerHTML = 0;
}); 