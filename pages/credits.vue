<template>
  <div>
    <!--Bouton de retour à la page d'accueil-->
    <v-card tile flat color="blue-grey darken-4">
      <Retourindex></Retourindex>
    </v-card>
    <v-card
      tile
      flat
      min-height="700"
      color="blue-grey darken-4"
      class="pa-4 pa-sm-16"
    >
      <!--Texte des crédits-->
      <v-card-text
        v-html="$t('credits')"
        class="textblue text-caption text-sm-body-2 ml-md-12 px-md-16"
      >
      </v-card-text>
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
};
</script>

<style scoped>
.textblue {
  font-family: "Libre Baskerville" !important;
  color: #e3f2fd !important;
  text-decoration: none !important;
  line-height: 26px !important;
  text-indent: 0px;
}
</style>