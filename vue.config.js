module.exports = {
  //publicPath: '/Gunston_Tutoring',
  publicPath: process.env.NODE_ENV === "production" ? "/Gunston_Tutoring/" : "/Gunston_Tutoring/",
  
  transpileDependencies: [ 'vuetify' ],
}