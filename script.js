const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-btn");
const listOfTodos = document.getElementById("list-todos");

// Enable/Disable button based on input
todoInput.addEventListener("input", () => {
  todoButton.disabled = todoInput.value.trim() === "";
});

// Getting Input from the user
todoButton.addEventListener("click", () => {
  const value = todoInput.value.trim();
  if (value === "") return; // Don't add empty items

  // Create list item
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-200 p-3 rounded-lg shadow-md";

  li.innerText = value;

  // Create delete button
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  delButton.className =
    "bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition";

  // Delete functionality
  delButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delButton);
  listOfTodos.appendChild(li);

  // Clear input and disable button
  todoInput.value = "";
  todoButton.disabled = true;
});

// Listen for "Enter" key press inside the input field
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    todoButton.click(); // Simulate button click
  }
});
