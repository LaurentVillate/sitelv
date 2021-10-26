<template>
    <v-card tile flat color="blue-grey darken-4" min-height="700" class="pa-4 pa-sm-16">
    <v-card-title>
      {{$t("tab.titretab")}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('tab.recherche')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="images"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
    data () {        
        return{
            search: '',
            headers: [
            {
                text: this.$t('tab.titre'),
                align: 'start',
                sortable: false,
                value: 'titre',
            },
            { text: this.$t('tab.serie'), value: 'serie' },
            { text: this.$t('tab.ville'), value: 'ville' },
            { text: this.$t('tab.pays'), value: 'pays' },
            { text: this.$t('tab.an'), value: 'an' },
            { text: this.$t('tab.dispo'), value: 'dispo' },
        ],
            
        }
    }
}
</script>