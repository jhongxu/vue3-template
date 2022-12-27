import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@/styles/index.scss';
// svg
import 'virtual:svg-icons-register';
import svgIcon from '@/components/SvgIcon.vue';

const app = createApp(App);

app.component('svg-icon', svgIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
