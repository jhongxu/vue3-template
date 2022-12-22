<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { println } from '@/utils';
import HelloWorld from '@/components/HelloWorld.vue';

const obj = reactive([{ name: '张三', age: 20 }, { name: '猪八戒', age: 30 }]);
println({ obj });
obj[0].name = '孙悟空';
println({ obj });
const { x, y } = useMouse();

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  });
};

const open3 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  });
};

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
    duration: 0,
  });
};
</script>

<template>
  <header>
    {{ x }}:{{ y }}
    <div class="">
      <HelloWorld msg="You did it!"></HelloWorld>
    </div>
    <el-button plain @click="open1"> Success </el-button>
    <el-button plain @click="open2"> Warning </el-button>
    <el-button plain @click="open3"> Info </el-button>
    <el-button plain @click="open4"> Error </el-button>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
