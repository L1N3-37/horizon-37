document.querySelector(".nav-37").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page reload
  
  // Get the text content of the <a> element (nav-37)
  const nav37Text = document.querySelector(".nav-37");
  
  // Toggle the text content between "37" and "[ 0x25 ]"
  if (nav37Text.textContent === "37") {
    nav37Text.textContent = "[ 0x25 ]";
  } else {
    nav37Text.textContent = "37";
  }
});