<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/saigon_Moto.png' />" 
        titre="Moto, mur et drapeaux"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Saigon Ho-Chi-Minh."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/saigon_Marche.png' />" 
        titre="Le marché Ben Thanh"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Saigon Ho-Chi-Minh."
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