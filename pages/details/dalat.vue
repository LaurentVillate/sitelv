<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.dalat.intro')"
        image="<img alt='Le lycée Yersin à Dalat' src='/galerie/dalat_Lycee.png' />" 
        :titre="$t('details.dalat.title')"
        :formatpapier="$t('details.dalat.papersize')"
        :formatimage="$t('details.dalat.imagesize')"
        :date="$t('details.dalat.date')"
        :commentaire="$t('details.dalat.comment')"
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