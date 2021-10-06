<template>
        <Imagedetails
        image="<img src='/galerie/dalat_Lycee.png' />" 
        titre="Le lycée Yersin au crépuscule"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        commentaire="Dalat, Vietnam."
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