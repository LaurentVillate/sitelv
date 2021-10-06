<template>
        <Imagedetails
        image="<img src='/galerie/lehavre_Mairie.png' />" 
        titre="L'hôtel de Ville du Havre la nuit"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2020"
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