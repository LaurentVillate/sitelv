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
            { text: '', value: 'image' },
            { text: this.$t('tab.serie'), value: 'serie' },
            { text: this.$t('tab.titre'), value: 'titre' },
            { text: this.$t('tab.date'), value: 'date' },
        ],
          images: [
          {
            image:"<img src='/bio/esquisse_Angkor.JPG' />",
            serie: this.$t('details.amiens.serie'),
            titre: this.$t('details.amiens.a.title'),
            date: this.$t('details.amiens.a.date'),
          }, 
          {
            serie: this.$t('details.amiens.serie'),
            titre: this.$t('details.amiens.b.title'),
            date: this.$t('details.amiens.b.date'),
          }, 
         ]  
        }
    },
    /*methods: {
      getdatas(){
        axios.get('http://localhost:1337/images?_locale=all')
        //.then(reponse => console.log(reponse.data))//
        .then(reponse => this.images = reponse.data)    
      },
    },
    mounted() {
        this.getdatas();
    }*/
}
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

</style>