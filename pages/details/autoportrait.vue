<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img src='galerie/hue_Autoportrait.png' />" 
        :titre="$t('details.autoportrait.a.title')"
        :formatpapier="$t('details.autoportrait.a.papersize')"
        :formatimage="$t('details.autoportrait.a.imagesize')"
        :date="$t('details.autoportrait.a.date')"
        :commentaire="$t('details.autoportrait.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='galerie/phnompenh_Autoportrait.png' />" 
        :titre="$t('details.autoportrait.b.title')"
        :formatpapier="$t('details.autoportrait.b.papersize')"
        :formatimage="$t('details.autoportrait.b.imagesize')"
        :date="$t('details.autoportrait.b.date')"
        :commentaire="$t('details.autoportrait.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='galerie/hongkong_Autoportrait.png' />" 
        :titre="$t('details.autoportrait.c.title')"
        :formatpapier="$t('details.autoportrait.c.papersize')"
        :formatimage="$t('details.autoportrait.c.imagesize')"
        :date="$t('details.autoportrait.c.date')"
        :commentaire="$t('details.autoportrait.c.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='galerie/paris_Autoportrait.png' />" 
        :titre="$t('details.autoportrait.d.title')"
        :formatpapier="$t('details.autoportrait.d.papersize')"
        :formatimage="$t('details.autoportrait.c.imagesize')"
        :date="$t('details.autoportrait.d.date')"
        :commentaire="$t('details.autoportrait.d.comment')"
        >
        </Imagedetails>
    <!-- PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" pr-4 pr-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/tokyo')">
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