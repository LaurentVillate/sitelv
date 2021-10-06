<template>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Marche.png' />" 
        titre="Les parasols du Marché central"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh."
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