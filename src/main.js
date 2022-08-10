import { createApp } from "vue"

// importing main vue file
import App from "./App.vue"

// importing css file
import "./main.css"

//creating the vue app
// with createApp function
const app = createApp(App)

// mounting to html
// rakibApp is the id
app.mount("#rakibApp")
