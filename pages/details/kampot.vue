<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Maison coloniale à Kampot' src='/galerie/kampot_Linge.png' />" 
        :titre="$t('details.kampot.title')"
        :formatpapier="$t('details.kampot.papersize')"
        :formatimage="$t('details.kampot.imagesize')"
        :date="$t('details.kampot.date')"
        :commentaire="$t('details.kampot.comment')"
        >
        </Imagedetails>
    </div>    
</template>

<script>
import Imagedetails from '@/components/Imagdetails'
import Retourindex from '@/components/Retourindex'

export default{
    components: {
        Imagedetails,
        Retourindex
    },
    data(){
        return{
        }
    }

}