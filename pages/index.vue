<template>
    <v-card tile flat color="blue lighten-5" class="px-4 px-sm-8">       
          <v-row class="py-6 py-sm-12">
            <v-col v-for="galerie in galeries" class="d-flex child-flex" cols="6" md="3">
              <v-card tile flat :to="galerie.lien" nuxt>
              <v-img :src="galerie.image" aspect-ratio="1" class="blue lighten-5">
             
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="orange lighten-3">                     
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
               </v-card>
            </v-col>
          </v-row>                
    </v-card>
</template>

<script>
export default {
    data () {
      return{
          galeries: [
            {image: "/galerie/hue_Autoportrait.png", lien:"/details/autoportrait2"},
            {image: "/galerie/tokyo_Meiji.png", lien:"/details/tokyo"},
            {image: "/galerie/phnompenh_Stade.png", lien:"/details/phnompenh1"},
            {image: "/galerie/saigon_Moto.png", lien:"/details/saigon"},
            {image: "/galerie/versailles_Chateau.png", lien:"/details/versailles"},
            {image: "/galerie/paris_Pontmarie.png", lien:"/details/paris"},
            {image: "/galerie/Lehavre_Mairie.png", lien:"/details/lehavre"},
            {image: "/galerie/amiens_Cottenchy.png", lien:"/details/amiens"},
            {image: "/galerie/phnompenh_Marche.png", lien:"/details/phnompenh2"},
            {image: "/galerie/angkor_Bayon.png", lien:"/details/angkor"},
            {image: "/galerie/hue_Arbres.png", lien:"/details/hue"},
            {image: "/galerie/hongkong_pont.png", lien:"details/hongkong"},
            {image: "/galerie/kampot_Linge.png", lien:"/details/kampot"}, 
            {image: "/galerie/dalat_Lycee.png", lien:"/details/dalat"},
            {image: "/galerie/battambang_Airport.png", lien:"/details/battambang"},
            {image: "/galerie/siemreap_Palais.png", lien:"/details/siemreap"}, 
            {image: "/galerie/amsterdam_Gare.png", lien:"/details/amsterdam"},    
            {image: "/galerie/ujiie_parking.png", lien:"details/ujiie"},
            {image: "/galerie/londres_Lexham.png", lien:"/details/londres"},  
            {image: "/galerie/LaurentVillate.jpeg", lien:"/bio"},          
          ]
      }
    },
  }
</script>
