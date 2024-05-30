document.addEventListener("DOMContentLoaded", function () {
  let alertPlaceholder = document.getElementById("alerts");
  function appendAlert(message, type) {
    let wrapper = document.createElement("article");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible fade show m-2" role="alert">`,
      `   <span>${message}</span>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    if (alertPlaceholder) {
      alertPlaceholder.append(wrapper);
      setTimeout(() => {
        location.href = "login.html";
      }, 8000);
    }
  }
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    appendAlert("Registro exitoso", "success");
  });
});
