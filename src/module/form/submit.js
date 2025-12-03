"use strict";

import dayjs, { Dayjs } from "dayjs";
import { date } from "./data";
import { time } from "./time";
import { api } from "../../service/apiConfig";
import { loadHoursAvailable } from "./loadHours";

const form = document.querySelector('form')

form.onsubmit = (e) => {
  e.preventDefault()

  const nameTutor = document.querySelector('#name-form')
  const namePet = document.querySelector('#pet-form')
  const phoneNumber = document.querySelector('#phone-number-form')
  const description = document.querySelector('#description-form')
  const hour = time()
  const dateSelect = date()

  if(hour == "default") {
    alert('Selecione um horário valido!')
    return
  }

  const schedule = {
    id: String(Date.now()),
    tutorName: nameTutor.value,
    petName: namePet.value,
    phoneNumber: phoneNumber.value,
    description: description.value,
    dateTime: dayjs(dateSelect).add(Number(hour), "hour").format('DD/MM/YYYYTHH:mm')

  }

  try {
    fetch(`${api()}/schedules`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(schedule)
    })

    alert("Agendado com sucesso")
    
    nameTutor.value = ""
    namePet.value = ""
    phoneNumber.value = ""
    description.value = ""
    loadHoursAvailable()

    nameTutor.focus()
    
  } catch(error) {
    alert(error + "Nao foi possível agendar")
  }
}

