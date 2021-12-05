<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.hue.a.intro')"
        image="<img alt='Maison et clôture à Hué' src='galerie/hue_Arbres.png' />" 
        :titre="$t('details.hue.a.title')"
        :formatpapier="$t('details.hue.a.papersize')"
        :formatimage="$t('details.hue.a.imagesize')"
        :date="$t('details.hue.a.date')"
        :commentaire="$t('details.hue.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Maison et clôture à Hué' src='galerie/hue_Cloturebrisee.png' />" 
        :titre="$t('details.hue.b.title')"
        :formatpapier="$t('details.hue.b.papersize')"
        :formatimage="$t('details.hue.b.imagesize')"
        :date="$t('details.hue.b.date')"
        commentaire=""
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/angkor')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/hongkong')">
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