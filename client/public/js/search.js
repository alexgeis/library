// SEARCH BAR
function renderSearch(search) {
	if (search === "") return;
	//get all tasks from all projects
	const currentProjects = JSON.parse(localStorage.getItem("projects")) || [];
	const currentTasks = [];
	for (let i = 0; i < currentProjects.length; i++) {
		const project = currentProjects[i];
		currentTasks.push(...project.tasks);
	}
	const filterTasks = [];
	for (let i = 0; i < currentTasks.length; i++) {
		const task = currentTasks[i];
		let lowerTitle = task.title.toLowerCase();
		let lowerSearch = search.toLowerCase();
		if (lowerTitle.includes(lowerSearch)) {
			filterTasks.push(task);
		}
	}
	//update main header
	const mainHeader = document.querySelector("#main-header");
	mainHeader.textContent = "SEARCH RESULTS";
	//clear current tasks
	const taskContainer = document.querySelector("#main-content");
	taskContainer.innerHTML = "";
	//no search results backup
	if (filterTasks.length === 0) {
		taskContainer.textContent = "No search results";
	}
	//render filterTasks tasks
	for (let i = 0; i < filterTasks.length; i++) {
		const task = filterTasks[i];
		const taskCard = domCreate("div", ["task-card"], { "data-task-index": i });
		//inner task card div items
		//TITLE
		const taskTitle = domCreate("div", ["task-title"]);
		taskTitle.textContent = task.title;
		//DESCRIPTION
		const taskDesc = domCreate("div", ["task-description"]);
		taskDesc.textContent = task.description;
		//DUE DATE
		const taskDate = domCreate("div", ["task-date"]);
		taskDate.textContent = task.dueDate;
		//PRIORITY
		const taskPriority = domCreate("div", ["task-priority"]);
		taskPriority.textContent = task.priority;
		//NOTES
		const taskNotes = domCreate("div", ["task-notes"]);
		taskNotes.textContent = task.notes;
		//DELETE ICON
		const taskDeleteIcon = domCreate("img", ["task-delete"], {
			src: deleteIcon,
			alt: "trash can delete icon",
		});
		taskDeleteIcon.addEventListener("click", function () {
			taskDeleteIcon.parentElement.remove(taskCard);
			let index = taskDeleteIcon.parentElement.getAttribute("data-task-index");
			filterTasks.splice(index, 1);
			// localStorage.setItem("filterTasks", JSON.stringify(filterTasks));
			renderSearch(search);
		});
		//APPEND ELEMENTS
		taskCard.append(
			taskTitle,
			taskDesc,
			taskDate,
			taskPriority,
			taskNotes,
			taskDeleteIcon
		);
		taskContainer.appendChild(taskCard);
	}
	// return taskContainer;
}

const searchInput = document.querySelector("#book-search");
searchInput.addEventListener("keyup", (e) => {
	let currentVal = e.target.value; // "mow"
	renderSearch(currentVal);
	if (currentVal === "") renderBooks();
});
