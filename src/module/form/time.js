"use strict"
const hour = document.getElementById("hour-form")


export function time() {
  const time = hour.value
  
  return time.replace(':', '.')
}




