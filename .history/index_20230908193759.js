let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let errorMsj=document.querySelector("span")

btn.addEventListener("click", addList);


function addList(e) {
  e.preventDefault();
  if (input.value) {
    errorMsj.style.display="none"
    ul.innerHTML += `

  <li>
    <div>
      <p>${input.value}</p>
      <button>
      </button>
    </div>
  </li>

  `;
  } else {

    errorMsj.style.display="block"
  }

  console.log(input.value);
  
}
