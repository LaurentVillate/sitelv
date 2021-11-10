<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Le Temple de Meiji à Tokyo' src='/galerie/tokyo_Meiji.png' />" 
        :titre="$t('details.tokyo.a.title')"
        :formatpapier="$t('details.tokyo.a.papersize')"
        :formatimage="$t('details.tokyo.a.imagesize')"
        :date="$t('details.tokyo.a.date')"
        :commentaire="$t('details.tokyo.a.comment')"
        :collection="$t('details.tokyo.a.collection')"
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