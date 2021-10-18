<template>
    <div>
        <Retourindex></Retourindex>
        <v-card tile flat min-height="700" color="blue-grey darken-4" class="pa-4 pa-sm-16"> 
            <v-card-text v-html="$t('credits')" class="texteFrEn text-caption text-sm-body-2 ml-md-12 px-md-16">
            </v-card-text>
        </v-card> 
    </div>  
</template>

<script>
import Retourindex from '@/components/Retourindex'

export default{
    components: {
        Retourindex,
    },
    data(){
        return{
        }
    }
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