function create() {
  let button = document.querySelector(".container .top button");
  let inp = document.querySelector(".container .top input");
  let bottom = document.querySelector(".container .bottom");

  button.addEventListener("click", () => {
    if (inp.value) {
      let newItem = `
<div class="inner">
          <span>${inp.value}</span>
          <div class="buttons">
            <button>Edit</button>
            <button id="but">Remove</button>
          </div>
        </div>
    `;
      bottom.innerHTML += newItem;
    }
    inp.value = "";
    let remove = document.getElementById("but");
    remove.addEventListener("click", () => {
      console.log(remove);

      remove.parentElement.parentElement.remove();
    });
  });
}
create();
