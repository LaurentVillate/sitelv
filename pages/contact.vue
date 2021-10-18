<template>
    <v-card tile flat color="blue-grey darken-4" min-height="700" class="pt-16"> 
        <Retourindex></Retourindex>
        <v-card-text class="texteFrEn text-caption text-sm-body-2 d-flex justify-center">
            contact.laurentv@gmail.com
        </v-card-text>
    </v-card>   
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

