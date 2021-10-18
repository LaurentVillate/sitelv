<template>
    <v-card tile flat color="blue lighten-5" class="px-4 px-sm-8">       
          <v-row class="py-6 py-sm-12">
            <v-col v-for="galerie in galeries" class="d-flex child-flex" cols="6" md="3">
              <v-card tile flat :to="localePath(galerie.lien)" nuxt>
                <v-img :src="galerie.image" :alt="galerie.alt" aspect-ratio="1" class="blue lighten-5">             
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
            {image: "/galerie/hue_Autoportrait.png", lien:"/details/autoportrait", alt:"En tong sur un terrain vague à Hué"},
            {image: "/galerie/tokyo_Meiji.png", lien:"/details/tokyo", alt:"Vue du Meiji-Jingu dans le parc de Yoyogi à Tokyo. Au loin, le le NTT Docomo Yoyogi Building."},
            {image: "/galerie/phnompenh_Stade.png", lien:"/details/phnompenh1", alt:"Un match de foot devant le palais des Sports, dans le complexe du Stade Olympique de Phnom Penh (architecte: Vann Molyvann)."},
            {image: "/galerie/saigon_Moto.png", lien:"/details/saigon", alt:"Une moto devant un mur jaune et des drapeaux rouges à Saigon Ho Chi Minh."},
            {image: "/galerie/versailles_Chateau.png", lien:"/details/versailles", alt:"Vue de nuit du chateau de Versailles."},
            {image: "/galerie/paris_Pontmarie.png", lien:"/details/paris", alt:"Le Pont Marie vu du quai des Célestins, en face de l’île Saint-Louis."},
            {image: "/galerie/Lehavre_Mairie.png", lien:"/details/lehavre", alt:"L’Hôtel de ville du Havre (architecte: Auguste Perret) vu de nuit."},
            {image: "/galerie/amiens_Cottenchy.png", lien:"/details/amiens", alt:"La rue de Cottenchy au soleil couchant.  Des maisons amiénoises en briques rouges et la tour Perret au loin."},
            {image: "/galerie/phnompenh_Marche.png", lien:"/details/phnompenh2", alt:"Le Marché central de Phnom Penh ou Phsar Thmey (architecte: Jean Desbois) et son dôme."},
            {image: "/galerie/angkor_Bayon.png", lien:"/details/angkor", alt:"A Angkor, le Bayon la nuit avec des singes."},
            {image: "/galerie/hue_Arbres.png", lien:"/details/hue", alt:"Une maison à Hué, la nuit."},
            {image: "/galerie/hongkong_pont.png", lien:"/details/hongkong", alt:"Hong Kong, Diamond Hill, Nan Liang Garden. Le pont rouge vers le pavillon de l’Absolue perfection, des immeubles à l’arrière-plan."},
            {image: "/galerie/kampot_Linge.png", lien:"/details/kampot", alt:"A Kampot, un bâtiment colonial jaune et ses volets bleus."}, 
            {image: "/galerie/dalat_Lycee.png", lien:"/details/dalat", alt:"Le lycée Yersin de Dalat (aujourd’hui Collège pédagogique) de nuit, avec des arbres rouges au premier plan."},
            {image: "/galerie/battambang_Airport.png", lien:"/details/battambang", alt:"La tour de contrôle de l’aéroport de Battambang et un hangar."},
            {image: "/galerie/siemreap_Palais.png", lien:"/details/siemreap", alt:"La Résidence royale de Siem Reap  face au Grand Hôtel d’Angkor (aujourd’hui Raffles)."}, 
            {image: "/galerie/amsterdam_Gare.png", lien:"/details/amsterdam", alt:"La Gare d’Amsterdam Centraal, côté De Ruijterkade, sous un ciel jaune."},    
            {image: "/galerie/ujiie_parking.png", lien:"/details/ujiie", alt:"Le parking du magasin Uniclo à Ujiie (Tochigi), avec en arrière-plan un petit sanctuaire et des silos."},
            {image: "/galerie/londres_Lexham.png", lien:"/details/londres", alt:"Vue de Lexham Mews la nuit."},  
            {image: "/galerie/LaurentVillate.jpeg", lien:"/bio", alt:"Laurent Villate"},          
          ]
      }
    },
  }
</script>
