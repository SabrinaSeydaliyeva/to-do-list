let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let errorMsj=document.querySelector("span")

btn.addEventListener("click", addList);


function addList(e) {
  e.preventDefault();
  if (input.value) {
    errorMsj.style.display="none"
    ul.style.display='block'
    ul.innerHTML += `

  <li>
    <div>
      <p>${input.value}</p>
      <button class="remove-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
<path d="M6 6L14 14" stroke="#C4C4C4"/>
<path d="M6 14L14 6" stroke="#C4C4C4"/>
</svg>
      </button>
    </div>
  </li>

  `;
  input.value=''
  } else {
    errorMsj.style.display="block"
  }
let removeBtns= document.querySelectorAll('.remove-btn')
removeBtns.forEach(element=>{
  element.addEventListener('click', ()=>removeList(element))
})

  
}

function removeList(item){
  console.log(item);
}