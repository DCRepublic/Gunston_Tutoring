<template>
<v-container class="box">
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <!-- Name and Email -->

    <v-contianer>
      <v-row >
        <v-col>

          <v-text-field
            v-model="First_Name"
            :counter="20"
            :rules="nameRules"
            label="First Name"
            required
          ></v-text-field>

        </v-col>

        <v-col>

          <v-text-field
            v-model="Last_Name"
            :counter="20"
            :rules="nameRules"
            label="Last Name"
            required
          ></v-text-field>

        </v-col>
      </v-row>

      <v-row >
        <v-col>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

        </v-col>
       
        <v-col>
          <v-select
            v-model="grade"
            :items="year"
            :menu-props="{ top: false, offsetY: true }"
            :rules="[v => !!v || 'Item is required']"
            label="Please Select Your Grade"
            required
          ></v-select>

      </v-col>
    </v-row>

<!-- Class Checkboxes-->


    <h4 style="margin-top:20%;" class="text-center " >Which subject(s) would you like help with?</h4>
     <v-divider>
    </v-divider>
    <v-row no-gutters justify="center">
      
      <v-col >
        
        <v-checkbox
          class="my-checkbox"
          v-model="selected"
          label="Math"
          value="Math"
        ></v-checkbox>
        <v-checkbox
          class="my-checkbox"
          v-model="selected"
          label="English"
          value="English"
        ></v-checkbox>

      </v-col>

      <v-col>
        <v-checkbox
          v-model="selected"
          label="Science"
          value="Science"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="History"
          value="History"
        ></v-checkbox>
      </v-col>

      <v-col >
        
        <v-checkbox
          v-model="selected"
          label="Spanish"
          value="Spanish"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="Computer Science"
          value="Computer Science"
        ></v-checkbox>


      </v-col>
      <v-col >
        
         
        <v-checkbox
          v-model="selected"
          @click="Elective"
          label="Elective"
          value="Elective"
        ></v-checkbox>
       
        <v-text-field
            v-show="this.elective"
            v-model="elective_choice"
            :counter="50"
            label="Elective"
          ></v-text-field>
       


      </v-col>
    </v-row>


<!-- Courses-->

    <v-row>
      <v-col>

        <v-text-field
          v-model="courses"
          label="Please list the course(s) you would like help with (Seperated by a comma)"
          required
        ></v-text-field>


      </v-col>
    </v-row>

   <h4 style="margin-top:15%;" class="text-center" >Please choose what type of assistance you would like (choose all that apply)</h4>
     <v-divider>
    </v-divider>
    <v-row no-gutters >
      
      <v-col >
        
        <v-checkbox
          v-model="help_type"
          label="Lecture: The tutor gives you a lesson on a specific topic"
          value="Lecture"
        ></v-checkbox>
        <v-checkbox
          v-model="help_type"
          label="Interactive problem practice: The tutor gives you problems to work through helping if needed"
          value="Interactive"
        ></v-checkbox>
        

      </v-col>

      <v-col>
        
        <v-checkbox
          v-model="help_type"
          label="Classwork: The tutor will help you with assignments answering questions as needed. (not allowed for tests, quizes, or exams)"
          value="Classwork"
        ></v-checkbox>
        
        <v-checkbox
          v-model="help_type"
          @click="Other"
          label="Other"
          value="Other"
        ></v-checkbox>
       
       
       


      </v-col>
      

         <v-text-field
            
            v-show="this.other"
            v-model="other_choice"
            :counter="50"
            
            label="Other"

          ></v-text-field>

   

    </v-row>

    <!-- Weekday Selection-->


    






    <!-- Class Times-->


     <h4 style="margin-top:15%;" class="text-center" >Please choose the times that you have free time during the next two weeks.</h4>
     <v-divider>
    </v-divider>

    
    <v-row no-gutters justify="center" requierd>
      
      <v-col > 
        <v-checkbox
          v-model="day_of_the_week"
          label="Monday"
          value="Monday"
        ></v-checkbox>
       

    
        <v-checkbox
          v-model="day_of_the_week"
          label="Wednesday"
          value="Wednesday"
        ></v-checkbox>
       
      </v-col>

      <v-col>
       
        <v-checkbox
          v-model="day_of_the_week"
          label="Tuesday"
          value="Tuesday"
        ></v-checkbox>
      
          
        <v-checkbox
          v-model="day_of_the_week"
          label="Thursday"
          value="Thursday"
        ></v-checkbox>

      </v-col>

      <v-col>
        <v-checkbox
          v-model="day_of_the_week"
          label="Friday"
          value="Friday"
        ></v-checkbox>

      </v-col>
    </v-row>
    <v-divider>
    </v-divider>

    <v-row no-gutters justify="center" requierd>
      
      <v-col > 
        <v-checkbox
          v-model="time"
          label="ACT Period"
          value="ACT Period"
        ></v-checkbox>
        <v-checkbox
          v-model="time"
          label="Class 1"
          value="Class 1"
        ></v-checkbox>

      
        <v-checkbox
          v-model="time"
          label="Class 2"
          value="Class 2"
        ></v-checkbox>

        
      </v-col>

      <v-col>
        <v-checkbox
          v-model="time"
          label="Class 3"
          value="Class 3"
        ></v-checkbox>
        <v-checkbox
          v-model="time"
          label="Class 4"
          value="Class 4"
        ></v-checkbox>
        <v-checkbox
          v-model="time"
          label="Class 5"
          value="Class 5"
        ></v-checkbox>
      </v-col>

     

      <v-col >
          
        <v-checkbox
          v-model="time"
          label="Class 6"
          value="Class 6"
        ></v-checkbox>
        <v-checkbox
          v-model="time"
          label="Class 7"
          value="Class 7"
        ></v-checkbox>

        <v-checkbox
          v-model="time"
          label="GEx"
          value="GEx"
        ></v-checkbox>
        


      </v-col>
      <v-checkbox
          v-model="time"
          label="After school (2:30-4:15)"
          value="After school"
        ></v-checkbox>
    </v-row>






     <p style="margin-top:15%;" class="text-center" ></p>






     
    </v-contianer>


    <v-layout row wrap> 
        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Please agree to Terms and Conditions"
        required
        >  </v-checkbox>
   
        <v-spacer></v-spacer>

        <v-dialog
        v-model="dialog"
        width="700"
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          style="margin-bottom: 15%;"
            color="blue lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click to View Terms and Conditions
          </v-btn>
        </template>

        <v-card >
          <v-card-title class="text-h5 grey lighten-2">
            Terms and Conditions
          </v-card-title>


          <v-card-text>
            <v-row>
            <v-col align="center">
              <div style="margin-top: 1%"></div>

             
            </v-col>
            </v-row>

            <v-row>
            <v-col >

              <ul class="list">
                <li class="list-item">{{tags[0]}}</li>
                <li class="list-item">{{tags[1]}}</li>
                <li class="list-item">{{tags[2]}}</li>
                <li class="list-item">{{tags[3]}}</li>
                <li class="list-item">{{tags[4]}}</li>
                
                
            </ul>
            
             
            </v-col>
            </v-row>

            
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-layout>

  <v-container class="submit">
  
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
    
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-container>
  
  
  </v-form>




</v-container>
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../client_secret.json');
  
  export default {
    name: 'FormMobile',

    components: {
     
       
    },
     data: () => ({
      valid: false,
      First_Name: '',
      Last_Name: '',
      elective_choice: '',
      email: '',
      grade:'',
      courses: '',
      other: false,
      help_type: [],
       dialog: false,
       time: [],
       other_choice: '',
       day_of_the_week: [],
       
       tags: ['I will show up to all meetings that I request or I will notify the tutor at least 12 hours before the start of the tutoring session', 'I will bring materials to the session to work on or discuss with the tutor', 'I will provide the student tutor with the subject that I wish to work on during the session at least 3 days in advance to allow the tutor to prepare for the session', 'I will use requested meetings for the sole purpose of tutoring', 'I will not ask the student tutor to do anything academically dishonest'],
      

      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be a valid email',
        v => v.includes('@gunston.org') || 'E-mial must be a valid Gunston email'
        
        
      ],
      select: null,
      year: [
        'Freshman',
        'Sophmore',
        'Junior',
        'Senior',
      ],
      checkbox: false,
      elective: false,
      
    selected: [],
    }),
    created (){
        console.log(this.elective)
        
        
    },
    methods: {
      validate () {
        if(this.$refs.form.validate()){
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
          const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

            const row = {
            Date: String(Date()),
            firstname: this.First_Name,
            lastname: this.Last_Name,
            email: this.email,
            grade: this.grade,
            subjects: String(this.selected) + " " + String(this.elective_choice),
            courses: this.courses,
            assistancetype: String(this.help_type) + " " + String(this.other_choice),
            meetingtime: String(this.time), 
            day_of_the_week: String(this.day_of_the_week), 
          }
          await sheet.addRow(row);
          console.log("added data")
          this.reset();

      },
      Elective(){
        
        if(this.elective == false){
          this.elective = true;
        }else{
          this.elective = false;
        }
        console.log(this.elective)

      },
      Other(){
       
        if(this.other == false){
          this.other = true;
        }else{
          this.other = false;
        }
        

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

.box{
  

  margin: auto;
  padding: 30px;
  

}
.v-input--checkbox::v-deep  .v-label, .v-icon{
   
    font-size: 13px;
  
}
.list{
  font-size: 12px;
}
.submit{
  display:flex;
  justify-content:center;
}
</style>