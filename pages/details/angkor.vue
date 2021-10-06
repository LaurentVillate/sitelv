<template>
        <Imagedetails
        image="<img src='/galerie/angkor_Bayon.png' />" 
        titre="La nuit au Bayon"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
        Commentaire="Angkor."
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