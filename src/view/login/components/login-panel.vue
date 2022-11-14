<template>
    <div class="login-panel">
        <h1 class="title">CMS</h1>
        <el-tabs type="border-card" stretch>
            <el-tab-pane label="User">
                <template #label>
                    <span class="tab-data">
                        <el-icon>
                            <House />
                        </el-icon>
                        账号登录:
                    </span>
                </template>
                <loginAccountVue ref="loginAccount" />
            </el-tab-pane>
            <el-tab-pane label="User">
                <template #label>
                    <span class="tab-data">
                        <el-icon>
                            <Iphone />
                        </el-icon>
                        手机登录:
                    </span>
                </template>
                <loginPhoneVue ref="loginPhone" />
            </el-tab-pane>
        </el-tabs>
        <div class="account-control">
            <el-checkbox type="checkbox" v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button type="primary" class="handelLogin" @click="handeLoginBtn">立即登录</el-button>
    </div>
</template>

<script setup lang='ts'>
import loginPhoneVue from '@/view/login/components/login-phone.vue'
import loginAccountVue from '@/view/login/components/login-account.vue'
import { ref } from 'vue'
const isKeepPassword = ref(false)
const loginPhone = ref()

const loginAccount = ref<InstanceType<typeof loginAccountVue>>()

const handeLoginBtn = () => {
    loginAccount.value?.accountLogin(isKeepPassword.value)
}
</script>
<style scoped lang='less'>
.login-panel {
    width: 320px;

    .title {
        text-align: center;
    }

    .tab-data {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .account-control {
        display: flex;
        justify-content: space-between;
    }

    .handelLogin {
        width: 100%;
        margin-top: 30px;
    }
}
</style>