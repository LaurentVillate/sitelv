<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/hue_Autoportrait.png' />" 
        titre="Autoportrait en pied"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire="Extrait de la série &quot;Fumeurs de Hué&quot;."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Autoportrait.png' />" 
        titre="Autoportrait en pied"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Extrait de la série &quot;36 vues de Phnom Penh&quot;. Sur un trottoir de la rue Pasteur (rue 51) à Phnom Penh."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hongkong_Autoportrait.png' />" 
        titre="Autoportrait en pied"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire="Extrait de la série &quot;7 vues de Hong Kong&quot;."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/paris_Autoportrait.png' />" 
        titre="Été indien"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Extrait de la série &quot;5 saisons à Paris&quot;."
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