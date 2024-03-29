import './bootstrap';
import {createApp} from 'vue'
import '../css/app.css'; 

import App from './App.vue'
import router from "./router";
import Navbar from "./components/navbar.vue"
const app = createApp(App)
// app.config.errorHandler = (err) => {
//     /* handle error */
//   }
// app.component('TodoDeleteButton', TodoDeleteButton)
app.use(router)
app.mount("#app")
