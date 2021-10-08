<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        intro="Tirées de la série &quot;36 vues de Phnom Penh&quot;, ces images mettent en avant l'architecture de Vann Molyvann (1926-2017)."
        image="<img src='/galerie/phnompenh_Stade.png' />" 
        titre="Football devant le palais des Sports"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh, Stade olympique."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Monument.png' />" 
        titre="L'arbre du voyageur et le monument de l'indépendance"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Phnom Penh, le monument de l'Indépendance vu du carrefour entre la rue Padteur (rue 51) et les boulevard Sihanouk et Suramarit."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_urpp.png' />" 
        titre="Le bâtiment D de l'URPP"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Université royale de Phnom Penh, boulevard de la fédération de Russie."
        collection="(Collection privée)"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Aeroport.png' />" 
        titre="Le dais d'honneur de l'aéroport"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2014"
        commentaire="Aéroport de Pochentong, au sud de Phnom Penh."
        >
        </Imagedetails>     
    </div>
</template>

<script>
import Imagedetails from '@/components/Imagedetails'
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
</script>

<style scoped>

.detailtexte{
    font-family:'Libre Baskerville'!important;
    color:#37474F!important;
    line-height:16px;
    
}

</style>