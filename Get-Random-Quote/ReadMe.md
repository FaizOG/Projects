In this mini project, it generates a random quote along with the author’s name.

---

## Approach

For this project, my approach was:

- Created a basic UI
- Added CSS for styling

---

## Adding Logic Using JavaScript

Now comes the main part — adding functionality using JavaScript.

- First, I created a variable and stored the `#quote` element in it so that I can dynamically display the quote and author in the UI.

- Then, I created an array of objects where each object contains:
  - a `quote`
  - an `author`

- After that, I selected the button element and stored it in a variable to listen for click events.

- Finally, I added a function that:
  - Generates a random number based on the array length
  - Uses that number to select a random quote object
  - Displays the selected quote and author inside the `#quote` paragraph element