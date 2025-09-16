document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // stop page reload

      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      // Simple check (you can replace with real validation)
      if(user && pass) {
        window.location.href = "t.html"; // <-- redirect to next page
      } else {
        alert("Please enter username and password!");
      }
    });