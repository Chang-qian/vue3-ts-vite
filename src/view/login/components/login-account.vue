<template>
    <div class="login-account">
        <el-form ref="accountFormRef" label-width="60px" :rules="rules" :model="account" class="demo-ruleForm">
            <el-form-item label="账号" prop="name">
                <el-input type="text" v-model="account.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="account.password" show-password autocomplete="off" />
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang='ts'>
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '@/view/login/config/account-config'
import type { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
const account = reactive({
    name: localCache.getLocalCache('name') ?? '',
    password: localCache.getLocalCache('password') ?? '',
})
const accountFormRef = ref<InstanceType<typeof ElForm>>()
const accountLogin = (isKeepPassword: boolean) => {
    accountFormRef.value?.validate((callback) => {
        if (isKeepPassword) {
            localCache.setLocalCache('name', account.name)
            localCache.setLocalCache('password', account.password)
        } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
        }
    })
}
defineExpose({ accountLogin })
</script>
<style scoped lang='less'>

</style>