// Tabs -funksjon
      function tabs(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
        }

// Undertabs - funksjon
  function nestedTabs(evt, subTabName) {
    var i, nestedTabcontent, nestedTablinks;
    nestedTabcontent = document.getElementsByClassName("nested-tabcontent");
    for (i = 0; i < nestedTabcontent.length; i++) {
      nestedTabcontent[i].style.display = "none";
    }
    nestedTablinks = document.getElementsByClassName("nested-tablinks");
    for (i = 0; i < nestedTablinks.length; i++) {
      nestedTablinks[i].className = nestedTablinks[i].className.replace(" active", "");
    }
    document.getElementById(subTabName).style.display = "block";
    evt.currentTarget.className += " active";
    }
