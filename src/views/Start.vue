<template>
    <h1>Hello World. You arent supposed to see this page</h1>
</template>
<script>

    export default {
        name: 'Init',
        methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    this.$store.dispatch('update_IsMobile', true)
                    console.log(this.$store.state.IsMobile)
                    return true;
                }
                else {
                    this.$store.dispatch('update_IsMobile', true)
                    console.log(this.$store.state.IsMobile)
                    return false;
                }
            }
        },
        created() {
            if (this.isMobile()) {
                this.$router.push('/MainMobile');
            }
            else {
                this.$router.push('/Main');
            }
        }
    }
</script>
<style scoped>
</style>