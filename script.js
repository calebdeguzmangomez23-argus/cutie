$(document).ready(function () {

 
  if ($("#loginForm").length) {
    $("#loginForm").on("submit", function (e) {
      e.preventDefault();

      const username = $("#username").val().trim();
      const password = $("#password").val().trim();

      if (!username || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Username and Password are required',
          confirmButtonColor: '#0d2a2e'
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login accepted',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#0d2a2e'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "dashboard.html";
        }
      });
    });
  }


  if ($(".calculator").length) {

    let display = $("#display");

    $(".number, .operator").click(function () {
      display.val(display.val() + $(this).text());
    });

    $(".equal").click(function () {
      try {
        display.val(eval(display.val()));
      } catch {
        display.val("Error");
      }
    });

    $(".clear").click(function () {
      display.val("");
    });
  }

});

// ARRAY + STACK
let personStack = [];


// METHOD
function savePerson() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let gmail = document.getElementById("gmail").value;


    // CONDITIONAL STATEMENT
    if (fname === "" || lname === "" || age === "" || gmail ==="") {
        alert("Please complete required fields!");
        return;
    }


    let person = { fname, mname, lname, age, gmail };


    // STACK PUSH
    personStack.push(person);


    displayTable();
    clearInputs();
}


// LOOP
function displayTable() {
    let table = document.getElementById("tableData");
    table.innerHTML = "";


    for (let i = 0; i < personStack.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${personStack[i].fname}</td>
                <td>${personStack[i].mname}</td>
                <td>${personStack[i].lname}</td>
                <td>${personStack[i].age}</td>
                <td>${personStack[i].gmail}</td>
            </tr>
        `;
    }
}


// METHOD
function clearInputs() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gmail").value = "";
}


// NAVIGATION
function showPage(pageId) {
    let pages = document.getElementsByClassName("page");


    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.add("hidden");
    }


    document.getElementById(pageId).classList.remove("hidden");
}


// EXIT
function exitSystem() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
    }
}

