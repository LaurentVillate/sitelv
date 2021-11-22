<template>
  <div>
    <!--Bouton de retour à la page d'accueil-->
    <v-card tile flat color="blue-grey darken-4">
      <Retourindex></Retourindex>
    </v-card>
    <v-card
      tile
      flat
      color="blue-grey darken-4"
      min-height="700"
      class="pa-4 pa-sm-16"
    >
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="6">
          <!--Texte du A propos-->
          <v-card-text
            class="textblue text-caption text-sm-body-2 ml-md-12 px-md-16"
          >
            <div v-html="$t('bio')"></div>
          </v-card-text>
          <!--Lien vers le catalogue-->
          <v-card-text class="ml-md-12 px-md-16">
            <NuxtLink
              class="textblue text-caption text-sm-body-2"
              to="/catalog1"
            >
              <b>{{ $t("cataloguetitre") }}</b>
            </NuxtLink>
          </v-card-text>
          <!--Lien vers le formulaire de contact-->
          <v-card-text class="ml-md-12 px-md-16">
            <NuxtLink
              class="textblue text-caption text-sm-body-2"
              to="/contact"
            >
              <b>{{ $t("contact") }}</b>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6">
          <!--La taille de la photo est différente selon la taille de l'écran. Cf script, computed-->
          <v-card
            tile
            flat
            :height="size"
            :width="size"
            class="mx-auto mb-12 mb-sm-0"
          >
            <img
              :height="size"
              :width="size"
              alt="Laurent Villate"
              src="/bio/laurent_Mains.JPG"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>


<script>
import Retourindex from "@/components/Retourindex";

export default {
  components: {
    Retourindex,
  },
  data() {
    return {};
  },
  //Ajustement de la taille de la photo en fonction de l'écran//
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 300;
        case "md":
          return 400;
        case "lg":
          return 500;
        case "xl":
          return 500;
      }
    },
  },
};
</script>

<style scoped>
.textblue {
  font-family: "Libre Baskerville" !important;
  text-decoration: none !important;
  color: #e3f2fd !important;
  line-height: 26px !important;
  text-indent: 0px;
}
</style>

