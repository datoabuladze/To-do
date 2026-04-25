function create() {
  let button = document.querySelector(".container .top button");
  let inp = document.querySelector(".container .top input");
  let bottom = document.querySelector(".container .bottom");
  let editbutton = document.querySelector("editButton");
  let editable = document.querySelector("editable");

  button.addEventListener("click", () => {
    if (inp.value) {
      let newItem = `
<div class="inner">
          
                  <input id="editable" type="text" value="${inp.value}" disabled />

          <div class="buttons">
            <button  onclick="edit(this)" id="editButton">Edit</button>
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
function edit(btn) {
  if (editable.disabled) {
    editable.disabled = false;
    editButton.innerText = "Save";
    editable.focus();
  } else {
    editable.disabled = true; //
    editButton.innerText = "Edit";
  }
}
create();
