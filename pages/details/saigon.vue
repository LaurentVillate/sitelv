<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img src='/galerie/saigon_Moto.png' />" 
        :titre="$t('details.saigon.a.title')"
        :formatpapier="$t('details.saigon.a.papersize')"
        :formatimage="$t('details.saigon.a.imagesize')"
        :date="$t('details.saigon.a.date')"
        :commentaire="$t('details.saigon.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le marché Ben Thanh à Saigon' src='/galerie/saigon_Marche.png' />" 
        :titre="$t('details.saigon.b.title')"
        :formatpapier="$t('details.saigon.b.papersize')"
        :formatimage="$t('details.saigon.b.imagesize')"
        :date="$t('details.saigon.b.date')"
        :commentaire="$t('details.saigon.b.comment')"
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