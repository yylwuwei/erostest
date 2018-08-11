<template>
    <div style="margin-top: 50px;">
        <text class="title">I am index page.</text>
        <wxc-button class="btn-250" text="Exit" @wxcButtonClicked="btnExit"></wxc-button>
    </div>
</template>

<script>
import { WxcButton } from 'weex-ui';
export default {
    components: { WxcButton },
    methods: {
        btnExit() {
            //this.$router.setHomePage('tabBar')
            this.$router.open({
                name: 'demo.login'
            })            
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
