<template>
  <v-app>
    <!--en-tête de l'application-->
    <v-card tile flat color="blue lighten-5" height="230" class="d-flex justify-center justify-sm-start"> 
      <v-card tile flat class="logo d-flex justify-center px-16 py-12" link to="/" nuxt>   
        <img :height='size' :width='size' src='/logo_laurent.png' />
      </v-card>
    </v-card>

    <!--Contenu des pages-->
    <v-main>
      <nuxt />
    </v-main>

    <!--pied de page de l'application--> 
    <v-card tile flat color="blue lighten-5">
      <v-divider color="#BBDEFB"></v-divider>
      <v-row class="d-flex justify-center py-6">
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <NuxtLink class="footer" to="/">
              <v-icon color="#EF6C00">mdi-home</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <NuxtLink class="footer" to="/bio">
              <v-icon color="#EF6C00">mdi-account</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="footer d-flex justify-center">      
            <NuxtLink class="footer" to="/contact">
              <v-icon color="#EF6C00">mdi-email</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="footer d-flex justify-center">      
            <NuxtLink class="footer" to="/credits">
              <v-icon color="#EF6C00">mdi-scale-balance</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-footer fluid padless tile flat color="blue lighten-5">
      <v-card-text class="footer text-body-2 px-sm-8 d-flex justify-center">
      © Laurent Villate – {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
</v-app>
</template>

<script>
export default {
    computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 80
          case 'sm': return 120
          case 'md': return 120
          case 'lg': return 160
          case 'xl': return 160
        }
      },
    },
  }
</script>


<style scoped>

.footer{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}

.logo{
  opacity:"0"!important;
  background-color:#E3F2FD;
}

</style>



