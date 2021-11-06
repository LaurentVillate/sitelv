<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Le pont Marie' src='/galerie/paris_PontMarie.png' />" 
        :titre="$t('details.paris2.a.title')"
        :formatpapier="$t('details.paris2.a.papersize')"
        :formatimage="$t('details.paris2.a.imagesize')"
        :date="$t('details.paris2.a.date')"
        :commentaire="$t('details.paris2.a.comment')"
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