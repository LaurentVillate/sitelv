<template>
  <v-app>
    <!--en-tête de l'application-->
    <v-card tile flat color="blue lighten-5" height="220" class="d-flex justify-center"> 
      <v-card tile flat class="logo d-flex justify-center px-16 py-12" link to="/" nuxt>   
        <img :height='size' :width='size' src='/logo_laurent.png' />
      </v-card>  
    </v-card>
    <v-toolbar height="72" flat color="blue lighten-5" class="pl-4 pl-sm-16">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="orange darken-3"></v-app-bar-nav-icon>  
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" color="blue lighten-5" absolute temporary>
      <v-list flat dense class="py-12 pl-8">
        <v-list-item-group v-model="group">
          <v-list-item to="/">
            <v-list-item-icon>
               <v-icon color="orange darken-3">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="footer text-uppercase">{{$t("home")}}</v-list-item-title>
          </v-list-item>

          <v-list-item to="/bio">
            <v-list-item-icon>
              <v-icon color="orange darken-3">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="footer text-uppercase">{{$t("about")}}</v-list-item-title>
          </v-list-item>

          <v-list-item to="/series">
            <v-list-item-icon>
              <v-icon color="orange darken-3">mdi-cards</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="footer text-uppercase">{{$t("series")}}</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
              <v-list-item-icon>
            <v-icon color="orange darken-3">mdi-email</v-icon>
              </v-list-item-icon>
            <v-list-item-title class="footer text-uppercase">{{$t("contact")}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
              <v-icon color="orange darken-3">mdi-home</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <NuxtLink class="footer" to="/bio">
              <v-icon color="orange darken-3">mdi-account</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="footer d-flex justify-center">      
            <NuxtLink class="footer" to="/contact">
              <v-icon color="orange darken-3">mdi-email</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="footer d-flex justify-center">      
            <NuxtLink class="footer" to="/credits">
              <v-icon color="orange darken-3">mdi-scale-balance</v-icon>
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
    data: () => ({
      drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
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



