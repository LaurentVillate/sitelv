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
                <v-form>
                    <v-container>
                <v-text-field type="hidden" name="_subject" value="Message de laurentvillate.com"></v-text-field>
                <v-row class="py-sm-16">
                <v-col cols="12">
                <v-text-field 
                class="textgrey"
                type="email" 
                name="_replyto" 
                :placeholder="$t('form.mail')" 
                required
                ></v-text-field>
                </v-col>
                </v-row>
                <v-row class="py-sm-16">
                <v-col cols="12">
                <v-textarea 
                class="textgrey"
                outlined
                name="message" 
                :placeholder="$t('form.message')" 
                required
                ></v-textarea>
                </v-col>>
            </v-row>
            <v-row class="py-sm-16">
            <v-col cols="12">
                <v-btn 
                elevation="0"
                color="blue-grey darken-4"
                class="textorange mx-6"
                type="submit"
                >Send</v-btn>
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
