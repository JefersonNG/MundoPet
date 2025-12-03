
import dayjs from "dayjs"
const date = document.getElementById('date-search')
const datePresent = new dayjs().format("YYYY-MM-DD")


export function updateDateView() {
  date.min = datePresent
  date.value = datePresent
}


