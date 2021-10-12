<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/kampot_Linge.png' />" 
        :titre="$t('details.kampot.title')"
        :formatpapier="$t('details.kampot.papersize')"
        :formatimage="$t('details.kampot.imagesize')"
        :date="$t('details.kampot.date')"
        :commentaire="$t('details.kampot.comment')"
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