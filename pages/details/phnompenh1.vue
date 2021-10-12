<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        :intro="$t('details.phnompenh1.a.intro')"
        image="<img src='/galerie/phnompenh_Stade.png' />" 
        :titre="$t('details.phnompenh1.a.title')"
        :formatpapier="$t('details.phnompenh1.a.papersize')"
        :formatimage="$t('details.phnompenh1.a.imagesize')"
        :date="$t('details.phnompenh1.a.date')"
        :commentaire="$t('details.phnompenh1.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Monument.png' />" 
        :titre="$t('details.phnompenh1.b.title')"
        :formatpapier="$t('details.phnompenh1.b.papersize')"
        :formatimage="$t('details.phnompenh1.b.imagesize')"
        :date="$t('details.phnompenh1.b.date')"
        :commentaire="$t('details.phnompenh1.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_urpp.png' />" 
        :titre="$t('details.phnompenh1.c.title')"
        :formatpapier="$t('details.phnompenh1.c.papersize')"
        :formatimage="$t('details.phnompenh1.c.imagesize')"
        :date="$t('details.phnompenh1.c.date')"
        :commentaire="$t('details.phnompenh1.c.comment')"
        :collection="$t('details.phnompenh1.c.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Aeroport.png' />" 
        :titre="$t('details.phnompenh1.d.title')"
        :formatpapier="$t('details.phnompenh1.d.papersize')"
        :formatimage="$t('details.phnompenh1.d.imagesize')"
        :date="$t('details.phnompenh1.d.date')"
        :commentaire="$t('details.phnompenh1.d.comment')"
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