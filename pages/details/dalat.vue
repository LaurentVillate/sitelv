<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.dalat1.a.intro')"
        image="<img alt='Le lycée Yersin à Dalat' src='/galerie/dalat_Lycee.png' />" 
        :titre="$t('details.dalat1.a.title')"
        :formatpapier="$t('details.dalat1.a.papersize')"
        :formatimage="$t('details.dalat1.a.imagesize')"
        :date="$t('details.dalat1.a.date')"
        :commentaire="$t('details.dalat1.a.comment')"
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