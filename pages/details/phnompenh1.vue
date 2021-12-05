<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.phnompenh1.a.intro')"
        image="<img alt='Stade olympique de Phnom Penh' src='galerie/phnompenh_Stade.png' />" 
        :titre="$t('details.phnompenh1.a.title')"
        :formatpapier="$t('details.phnompenh1.a.papersize')"
        :formatimage="$t('details.phnompenh1.a.imagesize')"
        :date="$t('details.phnompenh1.a.date')"
        :commentaire="$t('details.phnompenh1.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Monument de l'indépendance à Phnom Penh' src='galerie/phnompenh_Monument.png' />" 
        :titre="$t('details.phnompenh1.b.title')"
        :formatpapier="$t('details.phnompenh1.b.papersize')"
        :formatimage="$t('details.phnompenh1.b.imagesize')"
        :date="$t('details.phnompenh1.b.date')"
        :commentaire="$t('details.phnompenh1.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='L'université royale de Phnom Penh (RUPP)' src='galerie/phnompenh_Urppbatd.png' />" 
        :titre="$t('details.phnompenh1.c.title')"
        :formatpapier="$t('details.phnompenh1.c.papersize')"
        :formatimage="$t('details.phnompenh1.c.imagesize')"
        :date="$t('details.phnompenh1.c.date')"
        :commentaire="$t('details.phnompenh1.c.comment')"
        :collection="$t('details.phnompenh1.c.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='L'aéroport de Phnom Penh Pochentong (Phnom Penh Airport)' src='galerie/phnompenh_Aeroport.png' />" 
        :titre="$t('details.phnompenh1.d.title')"
        :formatpapier="$t('details.phnompenh1.d.papersize')"
        :formatimage="$t('details.phnompenh1.d.imagesize')"
        :date="$t('details.phnompenh1.d.date')"
        :commentaire="$t('details.phnompenh1.d.comment')"
        >
        </Imagedetails>  
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/tokyo')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/saigon')">
                        <v-icon color="#E3F2FD">mdi-arrow-right-thin-circle-outline</v-icon> 
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>   
    </div>
</template>

<script>
import Imagedetails from '@/components/Imagedetails'
import Retourindex from '@/components/Retourindex'

export default{
    components: {
        Imagedetails,
        Retourindex,
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