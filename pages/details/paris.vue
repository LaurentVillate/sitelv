<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/paris_PontMarie.png' />" 
        titre="Regard sur le pont Marie"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Paris, le pont Marie vu du quai des Célestins, face à l'île Saint-Louis."
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