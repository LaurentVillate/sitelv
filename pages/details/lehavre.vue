<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='L'Hôtel de ville du Havre' src='/galerie/lehavre_Mairie.png' />" 
        :titre="$t('details.lehavre.title')"
        :formatpapier="$t('details.lehavre.papersize')"
        :formatimage="$t('details.lehavre.imagesize')"
        :date="$t('details.lehavre.date')"
        commentaire=""
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