
import dayjs from "dayjs"
import { view } from "./load"
const date = document.getElementById('date-search')
const datePresent = new dayjs().format("YYYY-MM-DD")

date.value = datePresent


export function dateView() {

  const dateFormatted = dayjs(date.value).format('DD/MM/YYYY')

  return dateFormatted
}

date.onchange = () => {
  view()
}

