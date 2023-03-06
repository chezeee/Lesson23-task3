export const deactivateAllTabs = () => {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });
};

/**
 * @param {HTMLElement} tab
 */
export const activateClickedTab = (tab) => {
  tab.addEventListener("click", () => {
    tab.classList.add("active");
  });
};
