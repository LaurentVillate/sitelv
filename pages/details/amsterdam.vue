<template>
        <Imagedetails
        image="<img src='/galerie/amsterdam_Gare.png' />" 
        titre="Amsterdam Centraal, ciel jaune"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        commentaire=""
        >
        </Imagedetails>
</template>

<script>
import Imagedetails from '@/components/Imagdetails'

export default{
    components: {
        Imagedetails,
    },
    data(){
        return{
        }
    }

}