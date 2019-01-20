window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function deployBot() {
  window.open("https://codepen.io/Rogues/full/XowWJo", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=325,left=900,width=400,height=305");
}