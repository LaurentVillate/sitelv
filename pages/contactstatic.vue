<template>
  <div>
    <!--Ligne de séparation avec l'en-tête présente seulement sur les pages bleu clair-->
    <v-divider color="#B3E5FC"></v-divider>
    <!--Bouton de retour à la page d'accueil-->
    <v-card tile flat color="blue lighten-5">
      <Retourindex></Retourindex>
    </v-card>
    <v-card
      tile
      flat
      color="blue lighten-5"
      min-height="700"
      class="pt-16 px-sm-16"
    >
      <!--Formulaire de contact-->
      <div>
        <v-form
        action="https://formspree.io/f/xeqnjoda"
        method="POST">
          <v-container>
            <v-row class="pa-sm-16">
              <v-col cols="12" md="6">
                <v-text-field
                  readonly
                  class="textgrey"
                  color="blue lighten-5"
                  name="_subject"
                  value="Contact Laurent Villate"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6"> </v-col>
            </v-row>
            <v-row class="pa-sm-16">
              <v-col cols="12">
                <v-text-field
                  class="textgrey"
                  outlined
                  type="email"
                  name="_replyto"
                  :placeholder="$t('form.mail')"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pa-sm-16">
              <v-col cols="12">
                <v-textarea
                  class="textgrey"
                  outlined
                  name="message"
                  :placeholder="$t('form.message')"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="pa-sm-16">
              <v-col cols="12">
                <v-btn
                  elevation="0"
                  color="blue-grey darken-4"
                  class="textorange mx-6"
                  type="submit"
                  >{{ $t("form.envoi") }}
                </v-btn>
                <v-btn
                  elevation="0"
                  color="blue-grey darken-4"
                  class="textorange"
                  @click="cancel"
                >
                  {{ $t("form.annulation") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-card>
    <v-divider color="#B3E5FC"></v-divider>
  </div>
</template>

<script>
export default {
  methods: {
    //Fonction cancel: Retour à l'index//
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.textgrey {
  font-family: "Libre Baskerville" !important;
  color: #263238 !important;
}

.textorange {
  font-family: "Gemunu Libre", sans-serif !important;
  color: #ef6c00 !important;
  text-decoration: none !important;
}
</style>
