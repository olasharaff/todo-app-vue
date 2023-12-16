import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faPenToSquare, faTrash)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
