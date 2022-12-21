import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import '@/styles/index.scss';
import 'virtual:svg-icons-register';
// import svgIcon from '@/icons/svg-icon.vue';
import svgIcon from '@/components/SvgIcon/index.vue';

const app = createApp(App);

app.component('svg-icon', svgIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
