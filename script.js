window.onload = function () {
  document.getElementById("nhatky").addEventListener("click", function () {
    window.location.href = "nhatky.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("suattcn").addEventListener("click", function (e) {
    e.preventDefault(); 
    window.location.href = "suattcanhan.html"; 
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.getElementById("profileIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  profileIcon.addEventListener("click", function () {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (e) {
    if (
      !profileIcon.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
