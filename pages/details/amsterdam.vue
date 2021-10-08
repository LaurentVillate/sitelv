<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/amsterdam_Gare.png' />" 
        titre="Amsterdam Centraal, ciel jaune"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amsterdam_Peniche.png' />" 
        titre="La péniche multicolore"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Amsterdam."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amsterdam_Pont.png' />" 
        titre="Lijnbaansgracht, nuit"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Amsterdam."
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