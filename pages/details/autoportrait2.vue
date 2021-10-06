<template>
        <Imagedetails
        image="<img src='/galerie/hue_Autoportrait.png' />" 
        titre="Autoportrait en pied 2"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Hué, Vietnam."
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