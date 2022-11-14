<template>
    <div class="login-phone">
        <el-form ref="ruleFormRef" label-width="60px">
            <el-form-item label="手机号" prop="name">
                <el-input type="text" v-model="phoneData.phone" autocomplete="off" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <div class="get-code">
                    <el-input type="text" v-model="phoneData.code" autocomplete="off" />
                    <el-button type="primary" class="get-code-btn">获取验证码</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
const phoneData = reactive({
    phone: '',
    code: '',
})

</script>

<style scoped lang='less'>
.login-phone{
    .get-code{
        display: flex;
        &-btn{
            margin-left: 8px;
        }
    }
}
</style>