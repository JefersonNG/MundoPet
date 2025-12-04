
import { api } from "../../service/apiConfig";
import { dateView } from "./updateDateView";

const morning = document.getElementById('morning-list')
const afternoon = document.getElementById('afternoon-list')
const night = document.getElementById('night-list')

export async function view() {
  const data = await fetch(`${api()}/schedules`)
  const resp = await data.json()
  const dateSelect = dateView()

  morning.innerHTML = ""
  afternoon.innerHTML = ""
  night.innerHTML = ""


  resp.forEach(schedule => {
    const [date, hour] = schedule.dateTime.split("T")

    if (date == dateSelect) {

      const li = document.createElement('li')

      if (hour > "09:00" && hour < "12:00") {
        li.setAttribute("data-id", schedule.id)
        li.innerHTML = `
          <span>
            <strong id="time">${hour}</strong>
            <strong id="pet-name">${schedule.petName}</strong> /
            <small id="tutor-name">${schedule.tutorName}</small>
          </span>
          <p> ${schedule.description}</p>
          <div data-type="remover" ><span class="remove">Remover Agendamento</span></div>
`
        morning.append(li)
      } else if (hour > "12:00" && hour < "18:00") {
        li.setAttribute("data-id", schedule.id)
        li.innerHTML = `
          <span>
            <strong id="time">${hour}</strong>
            <strong id="pet-name">${schedule.petName}</strong> /
            <small id="tutor-name">${schedule.tutorName}</small>
          </span>
          <p>${schedule.description}</p>
          <div data-type="remover" ><span class="remove">Remover Agendamento</span></div>
`
        afternoon.append(li)
      } else {
        li.setAttribute("data-id", schedule.id)
        li.innerHTML = `
          <span>
            <strong id="time">${hour}</strong>
            <strong id="pet-name">${schedule.petName}</strong> /
            <small id="tutor-name">${schedule.tutorName}</small>
          </span>
          <p>${schedule.description}</p>
          <div data-type="remover" ><span class="remove">Remover Agendamento</span></div>
`
        night.append(li)
      }
    }
  });

}


document.addEventListener('DOMContentLoaded', view())




