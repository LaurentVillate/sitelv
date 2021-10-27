<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Le pont Marie' src='/galerie/paris_PontMarie.png' />" 
        :titre="$t('details.paris.title')"
        :formatpapier="$t('details.paris.papersize')"
        :formatimage="$t('details.paris.imagesize')"
        :date="$t('details.paris.date')"
        :commentaire="$t('details.paris.comment')"
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