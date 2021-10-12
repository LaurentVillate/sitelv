<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/dalat_Lycee.png' />" 
        :titre="$t('details.dalat.title')"
        :formatpapier="$t('details.dalat.papersize')"
        :formatimage="$t('details.dalat.imagesize')"
        :date="$t('details.dalat.date')"
        :commentaire="$t('details.dalat.comment')"
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