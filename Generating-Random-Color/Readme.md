# 🎨 Random Color Generator

## Project Overview

This is a simple mini web project that generates a random background color every time the user clicks a button. The generated color is displayed visually in a box along with its `rgba` color code.

The main goal of this project is to practice **HTML structure**, **CSS styling**, and **JavaScript DOM manipulation**.

---

##  Features

- Generates random colors on button click  
- Displays color visually in a box  
- Shows the exact `rgba()` color code  
- Simple and responsive UI design  

---

##  Tech Stack

- HTML – for page structure  
- CSS – for styling and layout  
- JavaScript – for logic and interactivity  

---

##  Approach / How It Works

### 1. UI Structure (HTML)
First, the basic structure of the webpage was created using HTML.  
It includes:
- A heading (`Generating Random Color`)
- A display box to show the generated color
- A paragraph to show the RGB/RGBA code
- A button to trigger the color generation

---

### 2. Styling the UI (CSS)
After creating the structure, CSS was used to design the interface:
- Centered the content using Flexbox
- Styled the color display box with border and shadow
- Added hover and active effects to the button
- Made the layout clean and visually appealing

---

### 3. Adding Functionality (JavaScript)
Finally, JavaScript was used to add interactivity:

- Selected elements using `getElementById`
- Added a click event listener to the button
- Generated random values for:
  - Red (0–255)
  - Green (0–255)
  - Blue (0–255)
  - Opacity (0–1)
- Applied the generated color using `rgba()` to the box background
- Displayed the same color code in text format

---

##  Logic Summary

On every button click:
1. Random RGB values are generated using `Math.random()`
2. Opacity is randomly generated
3. The color is applied to the display box
4. The rgba value is shown on the screen

---

##  Output

A box that changes color dynamically with each click and shows its corresponding rgba value.

---

##  Learning Outcome

Through this project, I learned:
- DOM manipulation in JavaScript  
- Handling events like button clicks  
- Generating random values in JS  
- Connecting HTML, CSS, and JS together in a real project flow