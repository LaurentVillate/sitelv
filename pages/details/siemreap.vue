<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='La résidence royale à Siem Reap' src='/galerie/siemreap_palais.png' />" 
        :titre="$t('details.siemreap.title')"
        :formatpapier="$t('details.siemreap.papersize')"
        :formatimage="$t('details.siemreap.imagesize')"
        :date="$t('details.siemreap.date')"
        :commentaire="$t('details.siemreap.comment')"
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