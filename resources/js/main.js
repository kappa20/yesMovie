import './bootstrap';
import { createApp } from 'vue';
// import the root component App from a single-file component.
import App from './vue/App';

import router from "./vue/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.mount('#app')
