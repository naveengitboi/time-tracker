//website origin
const origin = window.location.origin;
const websiteTitleLocation = window.location.href;
const a = {
  logo: "",
  title: "",
  duration: "",
  delete: "",
};

const taskListsArray = [];

const taskInput = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#taskButton");
const taskLists = document.querySelector(".taskListsUl");




//get favicon
const getFavIcon = () => {
  const nodeList = document.getElementsByTagName("link");
  for (let i = 0; i < nodeList.length; i++) {
    if (
      nodeList[i].getAttribute("rel") == "icon" ||
      nodeList[i].getAttribute("rel") == "shortcut icon" ||
      nodeList[i].getAttribute("rel") == "icon shortcut"
    ) {
      return nodeList[i].getAttribute("href");
    }
  }

  return "none";
};

//task input placeholder and adding
taskInput.setAttribute("placeholder", origin);
if (taskInput.value == "") {
  taskInput.value = origin;
}
function createTaskLi( logo, title, websiteLink, taskDuration){
  //li
  const taskElement = document.createElement("li");
  taskElement.setAttribute("class", "task table");

  //div
  const taskContent = document.createElement("div");
  taskContent.setAttribute("class", "taskContent");
  //img block
  const imgBlock = document.createElement("div");
  imgBlock.setAttribute("class", "imgBlock");
  //img
  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("taskImage");
  imgBlock.appendChild(img);

  //tasktitle
  const taskTitle = document.createElement("a");
  taskTitle.setAttribute("href", websiteLink);
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = title;
  taskContent.append(imgBlock);
  taskContent.appendChild(taskTitle);

  taskElement.appendChild(taskContent);

  //task duration
  const duration = document.createElement("p");
  duration.setAttribute("class", "taskTime");
  duration.textContent = "00:00:00";

  taskElement.appendChild(duration);
  //button
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteButton deleteIcon");
  deleteBtn.innerHTML = `<i class="bi bi-x-circle-fill deleteIcon" ></i>`;

  taskElement.appendChild(deleteBtn);
  taskLists.appendChild(taskElement);
}
const addToList = () => {
  let logo = getFavIcon();
  if(logo == "none"){
    logo = "https://www.gstatic.com/devrel-devsite/prod/vd906e53f099e628a2c079fcd932eaf4d8ec6809dab19b3d79a915c60d6afdd75/chrome/images/favicon.png";
  }else{
  logo = getFavIcon();
  }

  const eachTask = {
    title: document.title,
    logo: logo,
    websiteLink: websiteTitleLocation
  }
  taskListsArray.push(eachTask)

  createTaskLi( eachTask.logo, eachTask.title,eachTask.websiteLink )
};

const addTask = () => {
  addToList()
};
taskBtn.addEventListener("click", addTask);

function deleteTaskLi(e){
  console.log(e)
  if(e.target.className.includes('deleteIcon')){
  const ele = e.target.parentElement.parentElement
    ele.remove()
  }
  
}

const deleteBtn = document.querySelector(".deleteIcon");
console.log(deleteBtn)
document.addEventListener("click", deleteTaskLi)
