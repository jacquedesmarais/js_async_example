function changeColors() {
  setTimeout(function() {
    // first to execute
    document.getElementById('first').style.color = "#88D";

    setTimeout(function() {
      // second to execute  
      document.getElementById('second').style.fontSize = "47px";

      setTimeout(function() {
        // third to execute
        document.getElementById('third').style.textDecoration = "line-through";

        setTimeout(function() {
          // fourth to execute
          document.getElementById('fourth').style.paddingLeft = "100px";

        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}