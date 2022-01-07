<template>

  <v-app v-bind:style="{ backgroundColor: color}">
   
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      
      <div v-if="!this.isMobile" class=header id="header">
        <h1> Gunston Tutoring Service</h1>
      </div>
      <div v-else class=header-mobile id="header-mobile">
        <h2> Gunston Tutoring Service</h2>
      </div>

      <!--
      <div class=nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      -->
   

    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>

</template>

<script>
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


export default {
  name: 'App',
  components: {
    
    
       
    },
    

  data: () => ({
    color: '#D2E1E6',
    isMobile: window.matchMedia("only screen and (max-width: 760px)").matches,
    
   

    //
  }),
   

};
</script>




<style>



#nav {
  margin-left: auto;
  padding: 30px;
}

.header{
  margin-right:auto;
  margin-left: 2%;
}

.header-mobile{
  margin-right:auto;
  margin-left: 2%;
}



#nav a {
  font-weight: bold;
  color: white;
  
}

#nav a.router-link-exact-active {
  color: rgb(0, 205, 212);
}


</style>