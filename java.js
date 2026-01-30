let title = document.getElementById("title");

title.addEventListener("click", function() {
    if (title.innerText === "Hello") {
        title.innerText = "សួរស្ដី";
    } else {
        title.innerText = "Hello"
    }
})