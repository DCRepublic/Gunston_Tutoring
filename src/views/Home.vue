<template>

<v-container class="box">
  



<Form/>





</v-container>
</template>

<script>
import Form from "../components/Form"


const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

  
  export default {
    name: 'Home',

    components: {
      Form,
      
       
    },
     data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    created(){
        if (isMobile) {
        this.$router.push("/MainMobile")
        
      }
      },
     
      
    
    methods: {
     
      

      
      
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },

  }
</script>


<style scoped>


</style>