import {config} from '/js/config'
import Axios from "axios"

export function search() {
   let search_form = document.querySelector(".search_form")
   search_form.addEventListener('submit', (e) => {
         e.preventDefault()
         let value = document.querySelector(".search_form--input").value
         alert(value + "envoyée à " + config.url)
         Axios({
               url: config.url,
               method: "post",
               data: {
                     "keyword": value
               }
         })
   })
  }