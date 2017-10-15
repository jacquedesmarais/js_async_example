setTimeout(function() {
  // frist task
  console.log("First task complete!");

  setTimeout(function() {
    // second task
    console.log("Second task complete!");

    setTimeout(function() {
      // third task
      console.log("Third task complete!");
    }, 2000);
  }, 2000);
}, 2000);
