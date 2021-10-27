<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Le Temple de Meiji' src='/galerie/tokyo_Meiji.png' />" 
        :titre="$t('details.tokyo.title')"
        :formatpapier="$t('details.tokyo.papersize')"
        :formatimage="$t('details.tokyo.imagesize')"
        :date="$t('details.tokyo.date')"
        :commentaire="$t('details.tokyo.comment')"
        :collection="$t('details.tokyo.collection')"
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