import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';

import i18n, {CN, EN} from '../i18n/index'

createApp(App).use(i18n, {CN, EN}).mount('#app')
