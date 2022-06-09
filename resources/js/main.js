import './bootstrap';
import { createApp } from 'vue';
// import the root component App from a single-file component.
import App from './vue/App';

import router from "./vue/router";

createApp(App)
.use(router)

.mount('#app')
