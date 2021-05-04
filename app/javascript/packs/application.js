import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "@fortawesome/fontawesome-free/css/all.css"
import "../stylesheets/application"
import 'bootstrap'

window.jQuery = $;
window.$ = $;

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover()
})

global.toastr = require("toastr")

Rails.start()
Turbolinks.start()
ActiveStorage.start()
