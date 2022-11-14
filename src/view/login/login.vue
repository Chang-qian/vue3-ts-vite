<template>
    <div class="login">
        <loginPanelVue />
        <!-- <img src="@/assets/vue.svg" alt="" @click="click"> -->


    </div>
</template>

<script setup lang='ts'>
import loginPanelVue from '@/view/login/components/login-panel.vue'
const click = () => {
    console.log(123)
}
</script>

<style scoped lang='less'>
.login {
    display: flex;
    justify-content: center;
    margin-top: 0px;
    height: 100%;
}
</style>