<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/paris_PontMarie.png' />" 
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