<template>
<v-container class="box">

    <p  class="text-center" >As tutors, your feedback is very important to us. Please take a minute to fill out the following feedback information below. </p>
     <v-divider style="margin-bottom:  2%;">
    </v-divider>
    <v-form ref="ratingform"
    v-model="valid"
    lazy-validation>

      <v-row
    >
        <v-col>

          <v-text-field
            v-model="Tutor_Name"
            :counter="20"
            :rules="nameRules"
            label="Name of Your Tutor"
            required
          ></v-text-field>

        </v-col>

        <v-col>

          <v-text-field
            v-model="Subject"
            :counter="20"
            :rules="nameRules"
            label="Subject Tutored In"
            required
          ></v-text-field>

          </v-col>

        <v-col>

        <v-text-field
            v-model="Name"
            :counter="20"
            :rules="nameRules"
            label="Your Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row >
        <v-col>

          

          <v-textarea
            v-model="Notes"
            :counter="500"
            label="Notes"
            required
          ></v-textarea>

        </v-col>
       

      
    </v-row>

   
    
    </v-form>
    <v-col align="center">
        <v-rating
        v-model="rating"
        color="red"
        
        hover
        length="5"
        size="71"
        
        ></v-rating>

    </v-col>

     <v-col align="center">

    <v-btn
      
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>

    


    </v-col>


    
   

 

</v-container>
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../client_secret.json');
  
  export default {
    name: 'Rating',
    

    components: {
     
       
    },
     data: () => ({
      rating: 0,
      Tutor_Name: "",
      Name: "",
      Subject: "",
      valid: false,
      Notes: "",

    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      
      
    }),
    created (){
        console.log(this.elective)
        
        
    },
    methods: {
      validate () {
        if(this.$refs.ratingform.validate()){
            this.newRow();
            
            alert("Thank you! Your Response has been submitted")
        }else{
          alert("Please fill in all of the required fields")
         
        }
        

      },
      async newRow(){
          const doc = new GoogleSpreadsheet('1fIZ6HVR2z9Ofd31xJRGWTQAi67PNG_rGUtl7l6yRPxM');
          await doc.useServiceAccountAuth(creds);

          await doc.loadInfo(); // loads document properties and worksheets
          //console.log(doc.title)
          const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

            const row = {
            Tutor: this.Tutor_Name,
            Subject: this.Subject,
            Tutored: this.Name,
            Rating: this.rating,
            Notes: this.Notes, 
            
          }
          await sheet.addRow(row);
          console.log("added data")
          this.reset();

      },
     
        

      
      reset () {
        this.$refs.ratingform.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },

  }
</script>


<style scoped>

.box{
  

  margin: auto;
  padding: 30px;
  
}
</style>