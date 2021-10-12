<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        :intro="$t('details.hongkong.a.intro')"
        image="<img src='/galerie/hongkong_Pont.png' />" 
        :titre="$t('details.hongkong.a.title')"
        :formatpapier="$t('details.hongkong.a.papersize')"
        :formatimage="$t('details.hongkong.a.imagesize')"
        :date="$t('details.hongkong.a.date')"
        :commentaire="$t('details.hongkong.a.comment')"
        :collection="$t('details.hongkong.a.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hongkong_Fuite.png' />" 
        :titre="$t('details.hongkong.b.title')"
        :formatpapier="$t('details.hongkong.b.papersize')"
        :formatimage="$t('details.hongkong.b.imagesize')"
        :date="$t('details.hongkong.b.date')"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hongkong_Apple.png' />" 
        :titre="$t('details.hongkong.c.title')"
        :formatpapier="$t('details.hongkong.c.papersize')"
        :formatimage="$t('details.hongkong.c.imagesize')"
        :date="$t('details.hongkong.c.date')"
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