<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.dalat.a.intro')"
        image="<img alt='Le lycée Yersin à Dalat' src='/galerie/dalat_Lycee.png' />" 
        :titre="$t('details.dalat.a.title')"
        :formatpapier="$t('details.dalat.a.papersize')"
        :formatimage="$t('details.dalat.a.imagesize')"
        :date="$t('details.dalat.a.date')"
        :commentaire="$t('details.dalat.a.comment')"
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