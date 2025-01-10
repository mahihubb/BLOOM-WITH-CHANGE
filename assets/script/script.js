const seedButton = document.getElementById("seedButton");

seedButton.addEventListener("click", () => {
    // Create the seed animation element
    const seedAnimation = document.createElement("div");
    seedAnimation.classList.add("seed-animation");
    seedAnimation.textContent = "🌱"; // Seed icon
    document.body.appendChild(seedAnimation);

    // Wait for the animation to finish, then redirect
    setTimeout(() => {
        sessionStorage.setItem("seedPlanted", "true"); // Save state for the next page
        window.location.href = "main/Features.html"; // Redirect to the brown page
    }, 2000); // Matches animation duration
});

if (!sessionStorage.getItem("seedPlanted")) {
    document.querySelector(".seed").style.display = "none";
}

