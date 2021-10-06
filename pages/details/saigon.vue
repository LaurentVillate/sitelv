<template>
        <Imagedetails
        image="<img src='/galerie/saigon_Moto.png' />" 
        titre="Moti, mur et drapeaux"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Saigon Ho-Chi-Minh."
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