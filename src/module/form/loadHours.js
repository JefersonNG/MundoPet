import dayjs from "dayjs"
import { api } from "../../service/apiConfig"
import { hours } from "../../utils/hours"
import { date as selectDate } from "./data"
const modal = document.querySelector('#modal-form')

const inputTime = document.querySelector('#hour-form')
const hoursOpen = hours()

export async function loadHoursAvailable() {
  const resp = await fetch(`${api()}/schedules`)
  const schedules = await resp.json()

  const hoursUnavailable = schedules.map(schedule => {
    const dateTime = schedule.dateTime

    const [date, hour] = dateTime.split("T")
    const isDateSelect = date == dayjs(selectDate()).format("DD/MM/YYYY")

    if(isDateSelect) {
      return hour
    }

    
  })

  const hoursAvailable = hoursOpen.filter(hour => {

    if (!hoursUnavailable.includes(hour)) {
      return hour
    }

  })

  inputTime.innerHTML = ""


  hoursAvailable.forEach(item => {
    const option = document.createElement('option')
    option.textContent = item
    option.value = item

    inputTime.append(option)
  })
}