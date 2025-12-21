const menu = document.querySelector(".mobile-button");

menu?.addEventListener("click", () => {
  console.log("success");

  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
