<template>
<div>
  
  <FormMobile/>
  
  </div>
</template>

<script>
import FormMobile from "../components/FormMobile"

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


export default {
  name: 'HomeMobile',

    components: {
      FormMobile,
      
       
    },
  created(){
        if (!isMobile) {
        this.$router.push("/")
        
      }
      },
  
}
</script>



<style>

</style>