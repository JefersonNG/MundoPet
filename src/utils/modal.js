import { loadHoursAvailable } from "../module/form/loadHours"
import { view } from "../module/schedules/load"

const openModal = document.querySelector('button[data-type="new-schedule"]')
const closeModal = document.querySelector('.btn-close img')
const overlay = document.querySelector('#modal-overlay')
const modal = document.querySelector('#modal-form')



openModal.addEventListener("click", (e) => {
  overlay.classList.remove("hidden")
  modal.classList.remove('hidden')

  

  loadHoursAvailable()

  document.body.style.overflow = "hidden"

})

closeModal.addEventListener('click', (e) => {
  overlay.classList.add("hidden")
  modal.classList.add('hidden')

  view()

  document.body.style.overflow = ""
})