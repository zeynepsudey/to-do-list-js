let list = document.getElementById("list");

function initializeList() {
  let items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    addCloseButton(items[i]);
  }
}

function newElement() {
  let inputValue = document.getElementById("task").value.trim();
  let li = document.createElement("li");

  if (inputValue === "") {
    showToast("error");
  } else {
    li.textContent = inputValue;
    list.appendChild(li);
    addCloseButton(li);
    showToast("success");
  }

  document.getElementById("task").value = "";
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function addCloseButton(li) {
  let span = document.createElement("span");
  span.textContent = "×";
  span.className = "close";
  span.onclick = function () {
    this.parentElement.remove();
  };
  li.appendChild(span);
}

function showToast(type) {
  let successToast = document.querySelector(".toast.success");
  let errorToast = document.querySelector(".toast.error");

  if (type === "success") {
    $(successToast).toast("show");
  } else if (type === "error") {
    $(errorToast).toast("show");
  }
}

initializeList();
