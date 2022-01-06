<template>

  <v-app v-bind:style="{ backgroundColor: color}">
   
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      
      <div class=header id="header">
        <h1> Gunston Tutoring Service</h1>
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

export default {
  name: 'App',
  components: {
    
       
    },
    

  data: () => ({
    color: '#D2E1E6'
    
   

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



#nav a {
  font-weight: bold;
  color: white;
  
}

#nav a.router-link-exact-active {
  color: rgb(0, 205, 212);
}


</style>