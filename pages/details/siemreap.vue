<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='La résidence royale à Siem Reap' src='/galerie/siemreap_Palais.png' />" 
        :titre="$t('details.siemreap.a.title')"
        :formatpapier="$t('details.siemreap.a.papersize')"
        :formatimage="$t('details.siemreap.a.imagesize')"
        :date="$t('details.siemreap.a.date')"
        :commentaire="$t('details.siemreap.a.comment')"
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