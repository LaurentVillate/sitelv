<template>
  <div>
    <!--Ligne de séparation avec l'en-tête présente seulement sur les pages bleu clair-->
    <v-divider color="#B3E5FC"></v-divider>
    <!--Bouton de retour à la page d'accueil-->
    <v-card tile flat color="blue lighten-5">
      <Retourindex></Retourindex>
    </v-card>
    <!--Titre et phrase d'intro du catalogue-->
    <v-card
      tile
      flat
      color="blue lighten-5"
      min-height="700"
      class="pa-4 pa-sm-16"
    >
      <v-container>
        <v-card-title class="textgrey">
          <b>{{ $t("cataloguetitre") }}</b>
        </v-card-title>
        <v-card-text class="textgrey">
          <i>{{ $t("catalogueintro") }}</i>
        </v-card-text>
        <br /><br />
        <!--Pour chaque série appel à 2 composants: Catalogserie (titre de la série) et catalogimage (image et infos)-->
        <!--Environ 25 images par page du catalogue-->
        <!--AMIENS-->
        <Catalogserie :serie="$t('details.amiens.serie')"></Catalogserie>
        <Catalogimage
          image="<img width='120' alt='Amiens rue de Cottenchy' src='galerie/amiens_Cottenchy.png' />"
          :titre="$t('details.amiens.a.title')"
          :date="$t('details.amiens.a.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Amiens la tour Perret' src='galerie/amiens_Bapaume.png' />"
          :titre="$t('details.amiens.b.title')"
          :date="$t('details.amiens.b.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Cathedrale d'Amiens' src='galerie/amiens_Neige.png' />"
          :titre="$t('details.amiens.c.title')"
          :date="$t('details.amiens.c.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Tour Perret' src='catalog/amiens_Tour.jpg' />"
          :titre="$t('details.amiens.d.title')"
          :date="$t('details.amiens.d.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Gare d'Amiens' src='catalog/amiens_Placegare.jpg' />"
          :titre="$t('details.amiens.e.title')"
          :date="$t('details.amiens.e.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Amiens' src='catalog/amiens_AlsaceLorraine.jpg' />"
          :titre="$t('details.amiens.f.title')"
          :date="$t('details.amiens.f.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Cathédrale Notre-Dame d'Amiens' src='catalog/amiens_Cathedrale.jpg' />"
          :titre="$t('details.amiens.g.title')"
          :date="$t('details.amiens.g.date')"
        ></Catalogimage>
        <!--AMSTERDAM-->
        <Catalogserie :serie="$t('details.amsterdam.serie')"></Catalogserie>
        <Catalogimage
          image="<img height='120' alt='La Gare centrale d'Amsterdam' src='galerie/amsterdam_Gare.png' />"
          :titre="$t('details.amsterdam.a.title')"
          :date="$t('details.amsterdam.a.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Canal et immeubles à Amsterdam' src='galerie/amsterdam_Peniche.png' />"
          :titre="$t('details.amsterdam.b.title')"
          :date="$t('details.amsterdam.b.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Amsterdam de nuit' src='galerie/amsterdam_Pont.png' />"
          :titre="$t('details.amsterdam.c.title')"
          :date="$t('details.amsterdam.c.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Amsterdam' src='catalog/amsterdam_Parapluie.jpg' />"
          :titre="$t('details.amsterdam.d.title')"
          :date="$t('details.amsterdam.d.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Amsterdam Lijnbaansgracht' src='catalog/amsterdam_Vent.jpg' />"
          :titre="$t('details.amsterdam.e.title')"
          :date="$t('details.amsterdam.e.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Amsterdam Keizersgracht' src='catalog/amsterdam_Keizer.jpg' />"
          :titre="$t('details.amsterdam.f.title')"
          :date="$t('details.amsterdam.f.date')"
        ></Catalogimage>
        <!--ANGKOR-->
        <Catalogserie :serie="$t('details.angkor.serie')"></Catalogserie>
        <Catalogimage
          image="<img width='120' alt='Le Bayon à Angkor' src='galerie/angkor_Bayon.png' />"
          :titre="$t('details.angkor.a.title')"
          :date="$t('details.angkor.a.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Le Bayon à Angkor' src='galerie/angkor_Bayonjour.png' />"
          :titre="$t('details.angkor.b.title')"
          :date="$t('details.angkor.b.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Angkor Vat' src='catalog/angkor_Pluie.jpg' />"
          :titre="$t('details.angkor.c.title')"
          :date="$t('details.angkor.c.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Angkor Vat' src='catalog/angkor_Plongeon.jpg' />"
          :titre="$t('details.angkor.d.title')"
          :date="$t('details.angkor.d.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Angkor Vat la nuit' src='catalog/angkor_Visite.jpg' />"
          :titre="$t('details.angkor.e.title')"
          :date="$t('details.angkor.e.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Angkor Vat statue' src='catalog/angkor_Statue.jpg' />"
          :titre="$t('details.angkor.f.title')"
          :date="$t('details.angkor.f.date')"
        ></Catalogimage>
        <!--BATTAMBANG-->
        <Catalogserie :serie="$t('details.battambang.serie')"></Catalogserie>
        <Catalogimage
          image="<img width='120' alt='L'aéroport de Battambang' src='galerie/battambang_Airport.png' />"
          :titre="$t('details.battambang.a.title')"
          :date="$t('details.battambang.a.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img width='120' alt='Le Marché central de Battambang' src='galerie/battambang_Marche.png' />"
          :titre="$t('details.battambang.b.title')"
          :date="$t('details.battambang.b.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Marché de Battambang' src='catalog/battambang_Marchenuit.jpg' />"
          :titre="$t('details.battambang.c.title')"
          :date="$t('details.battambang.c.date')"
        ></Catalogimage>
        <!--DALAT-->
        <Catalogserie :serie="$t('details.dalat1.serie')"></Catalogserie>
        <Catalogimage
          image="<img width='120' alt='Le lycée Yersin à Dalat' src='galerie/dalat_Lycee.png' />"
          :titre="$t('details.dalat1.a.title')"
          :date="$t('details.dalat1.a.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Théâtre Hoa Binh de Dalat' src='catalog/dalat_Theatre.jpg' />"
          :titre="$t('details.dalat1.b.title')"
          :date="$t('details.dalat1.b.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Palais Dinh 3 de Bao Daï' src='catalog/dalat_Palais.jpg' />"
          :titre="$t('details.dalat1.c.title')"
          :date="$t('details.dalat1.c.date')"
        ></Catalogimage>
        <Catalogimage
          image="<img alt='Institut Pasteur de Dalat' src='catalog/dalat_Pasteur.jpg' />"
          :titre="$t('details.dalat1.d.title')"
          :date="$t('details.dalat1.d.date')"
        ></Catalogimage>
        <Catalogserie :serie="$t('details.dalat2.serie')"></Catalogserie>
        <Catalogimage
          image="<img alt='Gare de Dalat' src='catalog/dalat_Gare.jpg' />"
          :titre="$t('details.dalat2.title')"
          :date="$t('details.dalat2.date')"
        ></Catalogimage>
        <!--PAGINATION-->
        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <Catalogpagination></Catalogpagination>
            <v-btn
              fab
              depressed
              small
              color="transparent"
              class="textgrey2 mx-2"
              :to="localePath('catalog2')"
            >
              <v-icon color="#263238">mdi-menu-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-divider color="#B3E5FC"></v-divider>
  </div>
</template>

<script>
import Retourindex from "@/components/Retourindex";
import Catalogserie from "@/components/Catalogserie";
import Catalogimage from "@/components/Catalogimage";
import Catalogpagination from "@/components/CatalogPagination";

export default {
  components: {
    Retourindex,
    Catalogserie,
    Catalogimage,
    Catalogpagination,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.textgrey {
  font-family: "Libre Baskerville" !important;
  color: #263238 !important;
}

.textgrey2 {
  font-family: "Gemunu Libre", sans-serif !important;
  color: #263238 !important;
}
</style>