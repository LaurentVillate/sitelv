<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/lehavre_Mairie.png' />" 
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