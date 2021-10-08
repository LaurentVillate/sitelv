<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        intro="Ces images sont tirées de la série &quot;36 vues de Phnom Penh&quot;."
        image="<img src='/galerie/phnompenh_Marche.png' />" 
        titre="Les parasols du Marché central"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Hallurpp.png' />" 
        titre="Les lumières dans l'auditorium de l'URPP"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
        commentaire="Université royale de Phnom Penh, boulevard de la Confédération de Russie."
        collection="(Collection privée)"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Whitebuilding.png' />" 
        titre="Inondation devant le 'White Building"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Boulevard Sothearos, vu de la rue 294."
        collection="(Collection privée)"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Musee.png' />" 
        titre="Le jardin du Musée national"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
        commentaire=""
        collection="(Collection privée)"
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