<template>
    <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16"> 
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    <NuxtLink class="footer" to="/">
                        <v-icon color="#EF6C00">mdi-arrow-left</v-icon>
                    </NuxtLink>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="6">
                <v-card-text class="texteFrEn text-caption text-sm-body-2 ml-md-12 px-md-16">
                    <div v-html="$t('bio')"></div>
                    <!--<p>Laurent Villate peint à la gouache sur papier. Il créé des vues urbaines.</p>
                    <p>Il a vécu plusieurs années au Cambodge, où il a réalisé la série "36 vues de Phnom Penh".</p>
                    <p>Après avoir exploré des villes asiatiques, il s’intéresse aux univers urbains européens. Privilégiant les couleurs vives, influencé par la “ligne claire”, il met l’accent sur des contrastes d’atmosphère et d’architecture.</p>-->
                </v-card-text>
            </v-col>
            <v-col cols="12" md="6">
                <v-card tile flat :height="size" :width="size" class="mx-auto mb-12 mb-sm-0">
                    <img :height='size' :width='size' src='/bio/esquisse_Angkor.JPG' />
                </v-card>              
            </v-col>   
        </v-row>
    </v-card>   
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 260
          case 'sm': return 300
          case 'md': return 400
          case 'lg': return 500
          case 'xl': return 500
        }
      },
    },
  }
</script>

<style scoped>

.texteFrEn {
    font-family:'Libre Baskerville'!important;
    color:#37474F!important;
    line-height:26px!important;
    text-indent:0px;
}

.footer{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}




</style>

