<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img src='galerie/londres_Lexham.png' />" 
        :titre="$t('details.londres.a.title')"
        :formatpapier="$t('details.londres.a.papersize')"
        :formatimage="$t('details.londres.a.imagesize')"
        :date="$t('details.londres.a.date')"
        :commentaire="$t('details.londres.a.comment')"
        >
        </Imagedetails>
    <!-- PAGE AVANT-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-start">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/ujiie')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
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
        Retourindex
    },
    data(){
        return{
        }
    }

}