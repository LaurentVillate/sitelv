<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.hongkong.a.intro')"
        image="<img alt='Hong Kong, Diamond Hill, Nan Liang Garden' src='/galerie/hongkong_Pont.png' />" 
        :titre="$t('details.hongkong.a.title')"
        :formatpapier="$t('details.hongkong.a.papersize')"
        :formatimage="$t('details.hongkong.a.imagesize')"
        :date="$t('details.hongkong.a.date')"
        :commentaire="$t('details.hongkong.a.comment')"
        :collection="$t('details.hongkong.a.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Hong Kong IFC Two building by night' src='/galerie/hongkong_Fuite.png' />" 
        :titre="$t('details.hongkong.b.title')"
        :formatpapier="$t('details.hongkong.b.papersize')"
        :formatimage="$t('details.hongkong.b.imagesize')"
        :date="$t('details.hongkong.b.date')"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Hong Kong Apple Central' src='/galerie/hongkong_Apple.png' />" 
        :titre="$t('details.hongkong.c.title')"
        :formatpapier="$t('details.hongkong.c.papersize')"
        :formatimage="$t('details.hongkong.c.imagesize')"
        :date="$t('details.hongkong.c.date')"
        commentaire=""
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/hue')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/kampot')">
                        <v-icon color="#E3F2FD">mdi-arrow-right-thin-circle-outline</v-icon> 
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
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