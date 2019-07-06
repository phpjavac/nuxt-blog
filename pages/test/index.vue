<template lang="pug">
.test
    .div 123
    .route(@click='goto') 首页
</template>
<script>
export default {
    methods:{
        goto(){
            this.$router.push("/")
        }
    }
}
</script>
<style lang="stylus" scoped>
.test
    width 100vw
    height 100vh
    background #dddddd
</style>