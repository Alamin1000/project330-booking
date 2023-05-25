// $(document).ready(function () {
//   // custom-modal
//   $("*[toggle-modal]").click(function () {
//     var thisis = $(this);
//     var thisTarget = thisis.attr("toggle-modal");
//     $(thisTarget).addClass("modal-show");
//     $("body").addClass("modal-opened");
//   });
//   $("*[modal-close]").click(function () {
//     $(this).parents(".custom-modal").removeClass("modal-show");
//     $("body").removeClass("modal-opened");
//   });
//   $(document).mouseup(function (e) {
//     var container = $(".modal-content");
//     // If the target of the click isn't the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//       $(".custom-modal").removeClass("modal-show");
//       $("body").removeClass("modal-opened");
//     }
//   });
// });

// ---------custom-vanilla-js-modal-----------------
//modal-Open-button
let modalOpenButton = document.querySelectorAll("[toggle-modal]");
modalOpenButton.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // variables
    let clickedButton = this;
    let targetModal = document.querySelector(
      clickedButton.getAttribute("toggle-modal")
    );
    //action
    modalOpen(targetModal);
  });
});
//modal-close-button
let modalCloseButton = document.querySelectorAll("[modal-dismiss]");
modalCloseButton.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // action
    modalClose();
  });
});
// modalOpen function
function modalOpen(targetModal) {
  targetModal.classList.add("modal-show");
  document.querySelector("body").classList.add("modal-opened");
}
// modalClose function
function modalClose() {
  let allModal = document.querySelectorAll(".custom-modal");
  allModal.forEach((eachModal) => {
    eachModal.classList.remove("modal-show");
    document.querySelector("body").classList.remove("modal-opened");
  });
}
