import { api } from "../../service/apiConfig"


const elementsSchedule = document.querySelectorAll("ul")


elementsSchedule.forEach(element => {
  element.addEventListener('click', event => {
    if(event.target.matches('.remove')){
      const li = event.target.closest('li')
      li ? removeback(li) : alert("Nao foi possível remover")
    } 
  })
})

async function removeback(li){
  const id = li.getAttribute("data-id")
  await fetch(`${api()}/schedules/${id}`, {
    method: "DELETE"
  })
  
  li.remove()
}