<template>
  <div>
    <v-divider color="#B3E5FC"></v-divider>
    <v-card tile flat color="blue lighten-5">
        <Retourindex></Retourindex>
    </v-card>
    <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16">
      <v-card-title class="textgrey">
      {{$t("tab.titretab")}}
        <v-spacer></v-spacer>
        <v-text-field class="textgrey"
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('tab.recherche')"
        single-line
        hide-details
        ></v-text-field>
      </v-card-title>
      <br>
      <v-data-table dense class="textgrey"
      :headers="headers"
      :items="images"
      :search="search"
      ></v-data-table>
  </v-card>
  <v-divider color="#B3E5FC"></v-divider>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data () {        
        return{
            search: '',
            headers: [
            /*{
                text: this.$t('tab.titre'),
                align: 'start',
                sortable: false,
                value: 'titre',
            },*/
            { text: this.$t('tab.titre'), value: 'titre' },
            { text: this.$t('tab.serie'), value: 'serie' },
            { text: this.$t('tab.ville'), value: 'ville' },
            { text: this.$t('tab.pays'), value: 'pays' },
            { text: this.$t('tab.an'), value: 'an' },
            { text: this.$t('tab.dispo'), value: 'dispo' },
        ],
          images: [
          {
            titre: '',
            serie: '',
            ville: '',
            pays: '',
            an: '',
            dispo: '',
          }, 
         ]  
        }
    },
    methods: {
      getdatas(){
        //axios.get('http://localhost:1337/images').then(reponse => this.datacatalog = reponse.data);//
        axios.get('http://localhost:1337/images')
        .then(reponse => this.images = reponse.data)
        .catch(this.items = [{item:"Oups! Erreur de chargement"}]);
      }
    },
    mounted() {
        this.images = this.getdatas();
    }
}
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

</style>