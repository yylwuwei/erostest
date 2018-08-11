<template>
    <div style="margin-top: 50px;">
        <text class="title">Login page</text>
        <wxc-button class="btn-250" text="login" @wxcButtonClicked="btnLogin"></wxc-button>
    </div>
</template>

<script>
import { WxcButton } from 'weex-ui';
export default {
    components: { WxcButton },
    methods: {
        btnLogin() {
            this.$router.setHomePage('tabBar')
        }
    }
}
</script>

<style>
.title{
    font-size: 60px;
}
.btn-250{
    width: 250px;
}
</style>
