<template>
        <Imagedetails
        image="<img src='/galerie/londres_Lexham.png' />" 
        titre="London nocturne 2"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Londres, Lexham Mews."
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