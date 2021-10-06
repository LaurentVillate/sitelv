<template>
    <div>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Stade.png' />" 
        titre="Football devant le palais des Sports"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh, Stade olympique."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Monument.png' />" 
        titre="L'arbre du voyageur et le monument de l'indépendance"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh."
        >
        </Imagedetails>
        <v-card tile flat color="blue lighten-5">
            <v-row>
                <v-col cols="12" md="6">
                </v-col>
                <v-col cols="12" md="6">
                <v-card tile flat color="blue lighten-5" class="pb-12 pr-sm-4">
                    <v-card-text class="detailtexte text-caption text-sm-body-2">
                    Ces images, tirées de la série "36 vues de Phnom Penh", rendent hommage à l'architecture de Vann Molyvann (1926-2017).
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> 
        </v-card>      
    </div>
</template>

<script>
import Imagedetails from '@/components/Imagedetails'

export default{
    components: {
        Imagedetails,
    },
    data(){
        return{
        }
    }

}
</script>

<style scoped>

.detailtexte{
    font-family:'Libre Baskerville'!important;
    color:#37474F!important;
    line-height:16px;
    
}

</style>