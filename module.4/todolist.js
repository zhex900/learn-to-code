// --- Mock Server Setup (Simulating JSON Server persistence) ---
const DB_KEY = "mock_json_server_todos";
let tasks = []; // In-memory representation of the server's database

// A mock ID for creation (simulating server assignment)
let nextId = 1;

// --- DOM Elements ---
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const messageBox = document.getElementById("messageBox");
const loadingIndicator = document.getElementById("loadingIndicator");

// --- Helper Functions ---

/**
 * Saves the current tasks array to localStorage.
 */
function saveTasks() {
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

/**
 * Shows a temporary success or error message (Bootstrap Alert).
 */
function showMessage(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add(
    "alert",
    `alert-${type}`,
    "alert-dismissible",
    "fade",
    "show"
  );
  alertDiv.setAttribute("role", "alert");
  alertDiv.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "alert");
  closeButton.setAttribute("aria-label", "Close");

  alertDiv.appendChild(closeButton);
  messageBox.innerHTML = "";
  messageBox.appendChild(alertDiv);

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    const alertInstance = bootstrap.Alert.getOrCreateInstance(alertDiv);
    alertInstance.close();
  }, 3000);
}

/**
 * Creates and returns a new list item element for a task object.
 * @param {object} task - The task data {id, task, completed}
 */
function createTaskElement(task) {
  // 1. Create the main list item (li)
  const listItem = document.createElement("li");
  listItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  // Add completion class for styling
  if (task.completed) {
    listItem.classList.add("completed");
  }
  // Store the ID on the element
  listItem.setAttribute("data-id", task.id);

  // 2. Task text and checkbox container (div)
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("d-flex", "align-items-center", "task-text");

  // 3. Checkbox (input)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  checkbox.checked = task.completed;
  // Attach event to toggle completion status
  checkbox.addEventListener("change", () =>
    toggleTaskCompletion(task.id, checkbox.checked, task.task)
  );

  // 4. Task text (span)
  const textSpan = document.createElement("span");
  textSpan.textContent = task.task;

  // 5. Delete button (button)
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-sm", "btn-outline-danger");
  deleteBtn.textContent = "Delete";
  // Attach event to delete task
  deleteBtn.addEventListener("click", () => deleteTask(task.id, task.task));

  // 6. Assemble the content container
  contentContainer.appendChild(checkbox);

  // Note: Removed the user-id-tag logic as it was Firebase-specific
  contentContainer.appendChild(textSpan);

  // 7. Assemble the list item
  listItem.appendChild(contentContainer);
  listItem.appendChild(deleteBtn);

  return listItem;
}

/**
 * READ: Renders the current state of the tasks array to the DOM.
 */
function renderTasks() {
  // DOM Manipulation: Clear the existing list
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML =
      '<li class="list-group-item text-center text-muted">No tasks yet! Add one above.</li>';
  } else {
    // DOM Manipulation: Iterate and append new elements
    tasks.forEach((task) => {
      const listItem = createTaskElement(task);
      taskList.appendChild(listItem);
    });
  }
  loadingIndicator.style.display = "none";
}

/**
 * READ: Loads tasks from localStorage (Mock GET /todos).
 */
function fetchAndRenderTasks() {
  loadingIndicator.style.display = "block";
  try {
    const storedTasks = localStorage.getItem(DB_KEY);
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);

      // Determine the next ID based on the highest existing ID
      const maxId = tasks.reduce((max, task) => Math.max(max, task.id || 0), 0);
      nextId = maxId + 1;
    } else {
      tasks = [];
    }
  } catch (e) {
    console.error("Error parsing tasks from localStorage:", e);
    tasks = [];
  }

  // Simulate network delay before rendering
  setTimeout(renderTasks, 300);
}

// --- Mock CRUD Operations ---

/**
 * CREATE: Adds a new task to the array (Mock POST /todos).
 */
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showMessage("Task cannot be empty.", "danger");
    return;
  }

  // Create new task object with mock ID
  const newTask = {
    id: nextId++,
    task: taskText,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // Update in-memory DB and persist
  tasks.unshift(newTask); // Add to the start
  saveTasks();

  // DOM Update: Clear input field and re-render
  taskInput.value = "";
  renderTasks();
  showMessage(`Task "${taskText}" added successfully!`, "success");
}

/**
 * UPDATE: Toggles the completion status (Mock PATCH /todos/:id).
 */
function toggleTaskCompletion(id, isCompleted, taskName) {
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = isCompleted;
    saveTasks();

    // Re-render to update styling immediately
    renderTasks();
    const action = isCompleted ? "Completed" : "Marked incomplete";
    showMessage(`${action} task: "${taskName}"`, "success");
  }
}

/**
 * DELETE: Removes a task from the array (Mock DELETE /todos/:id).
 */
function deleteTask(id, taskName) {
  // Filter out the task with the given ID
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();

  // Re-render to update the list immediately
  renderTasks();
  showMessage(`Deleted task: "${taskName}"`, "danger");
}

// --- Event Listeners (DOM API) ---

// Attach the main event listener to the 'Add Task' button
addTaskBtn.addEventListener("click", addTask);

// Allow adding task by pressing Enter key in the input field
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

// Initial data load
fetchAndRenderTasks();
