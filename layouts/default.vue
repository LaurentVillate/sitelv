<template>
  <v-app>
    <!--BARRE DE L'APPLI. FIXE.-->
    <v-app-bar
      fixed
      flat
      max-width="1750"
      color="blue lighten-5"
      class="pb-6 pt-2 pr-8 pl-sm-12 pr-sm-16"
    >
      <!--MENU-->
      <v-menu offset-y>
        <!--Bouton Menu sur la page-->
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            fab
            depressed
            color="transparent"
            class="textorange"
            v-bind="attrs"
            v-on="on"
          >
            Menu
          </v-btn>
        </template>
        <!--Items du catalogue apparaissant au clic sur Menu-->
        <v-list color="blue lighten-5">
          <v-list-item :to="localePath('/')">
            <v-icon small color="orange darken-3">mdi-home</v-icon>
            <v-list-item-title class="textorange pl-2">
              {{ $t("home") }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="localePath('catalog1')">
            <v-icon small color="orange darken-3">mdi-cards</v-icon>
            <v-list-item-title class="textorange pl-2">
              {{ $t("catalogue") }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="localePath('bio')">
            <v-icon small color="orange darken-3">mdi-account</v-icon>
            <v-list-item-title class="textorange pl-2">
              {{ $t("about") }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="localePath('contact')">
            <v-icon small color="orange darken-3">mdi-email</v-icon>
            <v-list-item-title class="textorange pl-2">
              {{ $t("contact") }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <!--LANGUE-->
      <nuxt-link
        class="textorange"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}
      </nuxt-link>
    </v-app-bar>
    <!--LOGO-->
    <v-card tile flat color="blue lighten-5" class="d-flex justify-center">
      <v-card tile flat class="logo d-flex justify-center px-16 py-16">
        <!--La taille du logo est différente selon la taille de l'écran. Cf script, computed-->
        <img :height="size" :width="size" src="logo_laurent.png" />
      </v-card>
    </v-card>

    <!--Contenu des pages-->
    <v-main>
      <nuxt />
    </v-main>

    <!--pied de page de l'application-->
    <v-card tile flat color="blue lighten-5">
      <!--Première ligne du pied de page avec des boutons de liens vers les réseaux sociaux-->
      <v-row class="d-flex justify-center py-sm-4">
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <v-btn
              plain
              depressed
              color="transparent"
              href="https://www.instagram.com/laurentvillateimages/"
              target="blank"
            >
              <v-icon color="orange darken-3">mdi-instagram </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <v-btn
              plain
              depressed
              color="transparent"
              href="https://www.facebook.com/laurentvillateimages"
              target="blank"
            >
              <v-icon color="orange darken-3">mdi-facebook </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <v-icon> </v-icon>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <v-icon> </v-icon>
          </v-card-text>
        </v-col>
      </v-row>
      <!--Seconde ligne du pied de page avec boutons renvoyant à: accueil, à propos, contact et crédits-->
      <v-row class="d-flex justify-center py-sm-4">
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <NuxtLink class="textorange" :to="localePath('/')">
              <v-icon color="orange darken-3">mdi-home</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="d-flex justify-center">
            <NuxtLink class="textorange" :to="localePath('bio')">
              <v-icon color="orange darken-3">mdi-account</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="textorange d-flex justify-center">
            <NuxtLink class="textorange" :to="localePath('contact')">
              <v-icon color="orange darken-3">mdi-email</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-text class="textorange d-flex justify-center">
            <NuxtLink class="textorange" :to="localePath('credits')">
              <v-icon color="orange darken-3">mdi-scale-balance</v-icon>
            </NuxtLink>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <!--Footer avec le copyright-->
    <v-footer fluid padless tile flat color="blue lighten-5">
      <v-card-text class="textorange text-body-2 px-sm-8 d-flex justify-center">
        © Laurent Villate – {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),
  //Ajustement de la taille du logo en fonction de l'écran//
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 80;
        case "sm":
          return 120;
        case "md":
          return 120;
        case "lg":
          return 160;
        case "xl":
          return 160;
      }
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.textorange {
  font-family: "Gemunu Libre", sans-serif !important;
  color: #ef6c00 !important;
  text-decoration: none !important;
}

.logo {
  opacity: "0" !important;
  background-color: #e3f2fd;
}
</style>





