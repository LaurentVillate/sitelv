<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Le Bayon à Angkor' src='/galerie/angkor_Bayon.png' />" 
        :titre="$t('details.angkor.a.title')"
        :formatpapier="$t('details.angkor.a.papersize')"
        :formatimage="$t('details.angkor.a.imagesize')"
        :date="$t('details.angkor.a.date')"
        :commentaire="$t('details.angkor.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le Bayon à Angkor' src='/galerie/angkor_Bayonjour.png' />" 
        :titre="$t('details.angkor.b.title')"
        :formatpapier="$t('details.angkor.b.papersize')"
        :formatimage="$t('details.angkor.b.imagesize')"
        :date="$t('details.angkor.b.date')"
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
        Retourindex,
    },
    data(){
        return{
        }
    }

}