<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/londres_Lexham.png' />" 
        :titre="$t('details.londres.title')"
        :formatpapier="$t('details.londres.papersize')"
        :formatimage="$t('details.londres.imagesize')"
        :date="$t('details.londres.date')"
        :commentaire="$t('details.londres.comment')"
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