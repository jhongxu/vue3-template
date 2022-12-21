import vue from "@vitejs/plugin-vue";

const createVitePlugins = (mode) => {
    const vitePlugins = [vue()]
    return vitePlugins
}

export default createVitePlugins
