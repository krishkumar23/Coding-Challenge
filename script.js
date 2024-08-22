document.addEventListener("DOMContentLoaded", function () {
  const days = 30;
  const tasks = [
    "Healthy Breakfast",
    "Consume ~10 Minutes Of Educational Content",
    "Write Down Your Daily Tasks",
    "Write At Least One Line Of Code",
    "Post In Software Developer Academy",
    "Exercise For 20 Minutes",
    "Tidy Desk Setup",
  ];
  const container = document.querySelector(".row");
  for (let day = 1; day <= days; day++) {
    let box = document.createElement("div");
    box.className = "col-md-4 day-box";
    box.innerHTML =
      `<h5 class="day-title">Day ${day}</h5><ul class="task-list">` +
      tasks
        .map(
          (task, index) =>
            `<li><input type="checkbox" class="checkbox" id="day${day}-task${index}"><label for="day${day}-task${index}">${task}</label></li>`,
        )
        .join("") +
      "</ul>";
    container.appendChild(box);
  }

  // Restore checkbox states
  $(".checkbox").each(function () {
    const isChecked = localStorage.getItem(this.id) === "true";
    $(this).prop("checked", isChecked).change();
  });

//   // Theme switcher
//   const themeSwitcher = document.getElementById("theme-switcher");
//   const themeIcon = document.getElementById("theme-icon");
//   const body = document.body;
//
//   // Check for saved theme preference
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     body.classList.add("dark-mode");
//     themeIcon.className = "fas fa-sun";
//     document.querySelector("h2").classList.add("dark-mode");
//   }
//
//   themeSwitcher.addEventListener("click", function () {
//     body.classList.toggle("dark-mode");
//     document.querySelector("h2").classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//       themeIcon.className = "fas fa-sun";
//       localStorage.setItem("theme", "dark");
//     } else {
//       themeIcon.className = "fas fa-moon";
//       localStorage.setItem("theme", "light");
//     }
//   });
// });
  // Theme toggle functionality
  const themeToggleButton = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '☀️';
  }

  themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
});

// $(document).ready(function () {
//   $(document).on("change", ".checkbox", function () {
//     const label = $(this).next("label");
//     label
//       .css("text-decoration", this.checked ? "line-through" : "none")
//       .css("color", this.checked ? "#7f8c8d" : "#333");
//     localStorage.setItem(this.id, this.checked);
//   });
// });

$(document).ready(function() {
  $(document).on('change', '.checkbox', function() {
    // if (this.checked) {
    //   $(this).next('label').css('text-decoration', 'line-through').css('color', '#7f8c8d');
    // } else {
    //   $(this).next('label').css('text-decoration', 'none').css('color', '#333');
    // }
    const label = $(this).next('label');
    if (this.checked) {
      label.css('text-decoration', 'line-through').css('color', '#7f8c8d');
    } else {
      label.css('text-decoration', 'none').css('color', document.body.classList.contains('dark-mode') ? '#bfbfbf' : '#333');
    }
    // Save the state of the checkbox to localStorage
    localStorage.setItem(this.id, this.checked);
  });
});
