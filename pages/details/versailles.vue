<template>
        <Imagedetails
        image="<img src='/galerie/versailles_chateau.png' />" 
        titre="Ronde de nuit au château de Versailles"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        Commentaire="Versailles, le chateau vu depuis le parterre du Nord."
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