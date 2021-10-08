<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/ujiie_Parking.png' />" 
        titre="Ujiie, parking"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Parking du magasin Uniclo à Ujiie, Japon."
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
        Retourindex,
    },
    data(){
        return{
        }
    }

}