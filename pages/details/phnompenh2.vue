<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        :intro="$t('details.phnompenh2.a.intro')"
        image="<img src='/galerie/phnompenh_Marche.png' />" 
        :titre="$t('details.phnompenh2.a.title')"
        :formatpapier="$t('details.phnompenh2.a.papersize')"
        :formatimage="$t('details.phnompenh2.a.imagesize')"
        :date="$t('details.phnompenh2.a.date')"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Hallurpp.png' />" 
        :titre="$t('details.phnompenh2.b.title')"
        :formatpapier="$t('details.phnompenh2.b.papersize')"
        :formatimage="$t('details.phnompenh2.b.imagesize')"
        :date="$t('details.phnompenh2.b.date')"
        :commentaire="$t('details.phnompenh2.b.comment')"
        :collection="$t('details.phnompenh2.b.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Whitebuilding.png' />" 
        :titre="$t('details.phnompenh2.c.title')"
        :formatpapier="$t('details.phnompenh2.c.papersize')"
        :formatimage="$t('details.phnompenh2.c.imagesize')"
        :date="$t('details.phnompenh2.c.date')"
        :commentaire="$t('details.phnompenh2.c.comment')"
        :collection="$t('details.phnompenh2.c.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/phnompenh_Musee.png' />" 
        :titre="$t('details.phnompenh2.d.title')"
        :formatpapier="$t('details.phnompenh2.d.papersize')"
        :formatimage="$t('details.phnompenh2.d.imagesize')"
        :date="$t('details.phnompenh2.d.date')"
        commentaire=""
        :collection="$t('details.phnompenh2.d.collection')"
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