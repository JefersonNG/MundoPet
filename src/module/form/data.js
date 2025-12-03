import dayjs from "dayjs"
import { loadHoursAvailable } from "./loadHours"
const dateForm = document.getElementById('date-form')
const datePresent = new dayjs().format("YYYY-MM-DD")

dateForm.min = datePresent
dateForm.value = datePresent

export function date() {


  return dateForm.value
}

dateForm.onchange = () => {
  loadHoursAvailable()
}