<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        intro="Images extraites de la série &quot;Sept vues de Hong Kong&quot;"
        image="<img src='/galerie/hongkong_Pont.png' />" 
        titre="Le petit pont rouge"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire="Hong Kong, Nan Liang Garden."
        collection="(Collection privée)"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hongkong_Fuite.png' />" 
        titre="Fuite"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hongkong_Apple.png' />" 
        titre="Apple Store à Central"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire=""
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