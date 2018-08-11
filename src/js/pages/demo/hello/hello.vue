<template>
    <div style="margin-top: 50px;">
        <text class="title">Hello, world.</text>
        <wxc-button class="btn-250" text="login"></wxc-button>
    </div>
</template>

<script>
import { WxcButton } from 'weex-ui';
export default {
    components: { WxcButton }
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
