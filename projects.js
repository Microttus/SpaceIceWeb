document.querySelectorAll(".project-header").forEach(header => {
  header.addEventListener("click", () => {
    const card = header.closest(".project-card");

    // Close all other projects
    document.querySelectorAll(".project-card.open").forEach(openCard => {
      if (openCard !== card) {
        openCard.classList.remove("open");
      }
    });

    // Toggle clicked project
    card.classList.toggle("open");
  });
});
