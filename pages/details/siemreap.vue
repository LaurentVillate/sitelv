<template>
        <Imagedetails
        image="<img src='/galerie/siemreap_palais.png' />" 
        titre="La résidence du roi à Siem Reap"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
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