<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        :intro="$t('details.hue.a.intro')"
        image="<img alt='Maison et clôture à Hué' src='/galerie/hue_Arbres.png' />" 
        :titre="$t('details.hue.a.title')"
        :formatpapier="$t('details.hue.a.papersize')"
        :formatimage="$t('details.hue.a.imagesize')"
        :date="$t('details.hue.a.date')"
        :commentaire="$t('details.hue.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Maison et clôture à Hué' src='/galerie/hue_Cloture.png' />" 
        :titre="$t('details.hue.b.title')"
        :formatpapier="$t('details.hue.b.papersize')"
        :formatimage="$t('details.hue.b.imagesize')"
        :date="$t('details.hue.b.date')"
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