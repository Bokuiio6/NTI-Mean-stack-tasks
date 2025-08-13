var allPeople = [];
var nowEditing = null;
var filterByJob = '';

var nameBox = document.getElementById('name');
var aboutBox = document.getElementById('description');
var jobPick = document.getElementById('jobTitle');
var addPersonButton = document.getElementById('addBtn');
var changeButton = document.getElementById('updateBtn');
var stopEditButton = document.getElementById('cancelBtn');
var findBox = document.getElementById('searchInput');
var jobMenu = document.getElementById('filterDropdown');
var filterShowButton = document.getElementById('filterBtn');
var peopleList = document.getElementById('employeeTableBody');
var nothingFound = document.getElementById('noResults');
var peopleCounter = document.getElementById('employeeCount');
var formTitle = document.getElementById('formStatus');

function begin() {
  allPeople = [];
  connectButtons();
  makeTable();
  countPeople();
}

function connectButtons() {
  addPersonButton.addEventListener('click', addNewPerson);
  changeButton.addEventListener('click', saveChanges);
  stopEditButton.addEventListener('click', stopEditing);
  findBox.addEventListener('input', makeTable);

  var menuChoices = document.querySelectorAll('#filterDropdown a');
  for (var i = 0; i < menuChoices.length; i++) {
    menuChoices[i].addEventListener('click', function(event) {
      event.preventDefault();
      filterByJob = this.getAttribute('data-job');
      var choiceText = this.textContent;
      var menuTextElement = document.getElementById('filterText');
      if (menuTextElement) {
        menuTextElement.textContent = choiceText === "All Jobs" ? "Filter by Job" : choiceText;
      }
      makeTable();
      if (jobMenu.classList.contains('show')) {
        jobMenu.classList.remove('show');
      }
    });
  }

  filterShowButton.addEventListener('click', function() {
    if (jobMenu.classList.contains('show')) {
      jobMenu.classList.remove('show');
    } else {
      jobMenu.classList.add('show');
    }
  });

  document.addEventListener('click', function(event) {
    if (!filterShowButton.contains(event.target)) {
      jobMenu.classList.remove('show');
    }
  });
}

function addNewPerson() {
  var personName = nameBox.value.trim();
  var personAbout = aboutBox.value.trim();
  var personJob = jobPick.value;

  if (personName === '' || personAbout === '' || personJob === '') {
    alert('Please fill in all fields');
    return;
  }

  allPeople.push({ name: personName, description: personAbout, jobTitle: personJob });
  clearBoxes();
  makeTable();
  countPeople();

  addPersonButton.innerHTML = '<i class="fas fa-check"></i> Added!';
  setTimeout(function() {
    addPersonButton.innerHTML = '<i class="fas fa-plus"></i> Add Employee';
  }, 1500);
}

function saveChanges() {
  var newName = nameBox.value.trim();
  var newAbout = aboutBox.value.trim();
  var newJob = jobPick.value;

  if (newName === '' || newAbout === '' || newJob === '') {
    alert('Please fill in all fields');
    return;
  }

  if (nowEditing !== null) {
    allPeople[nowEditing] = { name: newName, description: newAbout, jobTitle: newJob };
    stopEditing();
    makeTable();

    changeButton.innerHTML = '<i class="fas fa-check"></i> Updated!';  
    setTimeout(function() {  
      changeButton.innerHTML = '<i class="fas fa-sync"></i> Update';  
    }, 1500);
  }
}

function stopEditing() {
  nowEditing = null;
  clearBoxes();
  addPersonButton.style.display = 'flex';
  changeButton.style.display = 'none';
  stopEditButton.style.display = 'none';
  formTitle.textContent = 'Add New';
}

function editPerson(position) {
  var person = allPeople[position];
  if (!person) return;
  nameBox.value = person.name;
  aboutBox.value = person.description;
  jobPick.value = person.jobTitle;
  nowEditing = position;
  addPersonButton.style.display = 'none';
  changeButton.style.display = 'flex';
  stopEditButton.style.display = 'flex';
  formTitle.textContent = 'Editing';
}

function removePerson(position) {
  if (confirm('Are you sure you want to delete this employee?')) {
    allPeople.splice(position, 1);
    if (nowEditing === position) {
      stopEditing();
    }
    makeTable();
    countPeople();
  }
}

function clearBoxes() {
  nameBox.value = '';
  aboutBox.value = '';
  jobPick.value = '';
  nameBox.focus();
}

function makeTable() {
  var searchText = (findBox.value || '').toLowerCase();
  var showingPeople = allPeople.filter(function(person) {
    var nameMatch = person.name.toLowerCase().includes(searchText);
    var jobMatch = !filterByJob || person.jobTitle === filterByJob;
    return nameMatch && jobMatch;
  });

  peopleList.innerHTML = '';

  if (showingPeople.length === 0) {
    nothingFound.style.display = 'block';
    return;
  } else {
    nothingFound.style.display = 'none';
  }

  for (var count = 0; count < showingPeople.length; count++) {
    var person = showingPeople[count];
    var actualPosition = allPeople.indexOf(person);
    var rowLine = document.createElement('tr');

    rowLine.innerHTML =  
      '<td>' + (count + 1) + '</td>' +  
      '<td><strong>' + person.name + '</strong></td>' +  
      '<td>' + person.description + '</td>' +  
      '<td>' + person.jobTitle + '</td>' +  
      '<td class="actions-cell">' +  
        '<button class="action-btn edit-btn" onclick="editPerson(' + actualPosition + ')">' +  
          '<i class="fas fa-edit"></i> Edit' +  
        '</button>' +  
        '<button class="action-btn delete-btn" onclick="removePerson(' + actualPosition + ')">' +  
          '<i class="fas fa-trash"></i> Delete' +  
        '</button>' +  
      '</td>';  

    peopleList.appendChild(rowLine);
  }
}

function countPeople() {
  peopleCounter.textContent = allPeople.length;
}

document.addEventListener('DOMContentLoaded', begin);