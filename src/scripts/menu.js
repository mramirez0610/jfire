const menu = document.querySelector(".mobile-button");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
