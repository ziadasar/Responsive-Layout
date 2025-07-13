$(document).ready(function () {
  // Change color on click
  $(".row, col-12,.header, .footer, .sidebar, .widget, .stats, .main").on("click", function () {
    $(this).css("background-color", getRandomColor());
  });

  

  // Highlight on hover
  $(".row, col-12,.header, .footer, .sidebar, .widget, .stats, .main").hover(
    function () {
      $(this).addClass("active-hover");
    },
    function () {
      $(this).removeClass("active-hover");
    }
  );

 

  // Function to generate random colors
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});