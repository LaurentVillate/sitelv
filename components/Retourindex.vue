<template>
    <v-card flat tile color="transparent" class=" pl-4 pl-sm-16 pt-sm-12">
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    <!--
                    <NuxtLink class="textorange" :to="localePath('/')">
                        <v-icon color="#EF6C00">mdi-arrow-left-thin-circle-outline</v-icon>
                    </NuxtLink>-->
                    <v-btn
              plain
              depressed
              color="transparent"
              @click="retour"
            >
              <v-icon color="orange darken-3">mdi-arrow-left-thin-circle-outline</v-icon>
            </v-btn>
                </v-card-text>
            </v-col>    
        </v-row>
    </v-card>
</template>

<script>

    export default{
        name: "Retourindex",
        methods: {
    //Fonction send:envoi du message si le form est valide. Dans ce cas, la fenêtre de dialogue de succès s'ouvre//
    //Fonction cancel: Retour à la page précédente à son niveau relatif//
    retour() {
      this.$router.go(-1);
    },
  },        
    }
</script>

<style scoped>

.textorange{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}

</style>