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
      <div id="contact-form">
                <form>
                <input type="hidden" name="_subject" value="Message de laurentvillate.com" />
                <input type="email" name="_replyto" :placeholder="$t('form.mail')" required>
                <textarea name="message" :placeholder="$t('form.message')" required></textarea>
                <button type="submit">Send</button>
            </form>
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
