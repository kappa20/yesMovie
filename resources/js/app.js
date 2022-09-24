import './bootstrap';
import {createApp} from 'vue'
import '../css/app.css'; 

import App from './App.vue'


const app = createApp(App)
// app.config.errorHandler = (err) => {
//     /* handle error */
//   }
// app.component('TodoDeleteButton', TodoDeleteButton)

app.mount("#app")
