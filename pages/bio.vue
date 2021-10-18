<template>
    <div>
        <Retourindex></Retourindex>
        <v-card tile flat color="blue-grey darken-4" min-height="700" class="pa-4 pa-sm-16"> 
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="6">
                    <v-card-text class="texteFrEn text-caption text-sm-body-2 ml-md-12 px-md-16">
                        <div v-html="$t('bio')"></div>
                    </v-card-text>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card tile flat :height="size" :width="size" class="mx-auto mb-12 mb-sm-0">
                        <img :height='size' :width='size' alt="Laurent Villate" src='/bio/esquisse_Angkor.JPG' />
                    </v-card>              
                </v-col>   
            </v-row>
        </v-card> 
    </div>  
</template>


<script>
import Retourindex from '@/components/Retourindex'

export default {
    components: {
        Retourindex,
    },
    data(){
        return{
        }
    },
    computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 260
          case 'sm': return 300
          case 'md': return 400
          case 'lg': return 500
          case 'xl': return 500
        }
      },
    },
  }
</script>

<style scoped>

.texteFrEn {
    font-family:'Libre Baskerville'!important;
    color:#E3F2FD!important;
    line-height:26px!important;
    text-indent:0px;
}

.footer{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}




</style>

