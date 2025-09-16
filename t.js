    const items = ["red velvet cake","cappuccino","americano","cheesecake", "burger","mango boba","badam dooth", "pizza","blueberry buckle","Hot dog","orange juice","lemon lime soda"];

    function showSuggestions(value) {
      let suggestionBox = document.getElementById("suggestions");
      suggestionBox.innerHTML = "";
      if (value) {
        let suggestions = items.filter(item => item.toLowerCase().startsWith(value.toLowerCase()));
        suggestions.forEach(suggest => {
          let div = document.createElement("div");
          div.innerHTML = suggest;
          div.onclick = function() {
            document.getElementById("search-box").value = suggest;
            suggestionBox.innerHTML = "";
            filterImages(suggest);
          };
          suggestionBox.appendChild(div);
        });
      }
    }

    function filterImages(searchTerm) {
      let images = document.querySelectorAll(".gallery img");
      images.forEach(img => {
        if (img.dataset.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    }

    function toggleIngredients(id) {
      let sections = document.querySelectorAll(".ingredients");
      sections.forEach(section => {
        if (section.id === id) {
          section.style.display = (section.style.display === "block") ? "none" : "block";
        } else {
          section.style.display = "none";
        }
      });
    }