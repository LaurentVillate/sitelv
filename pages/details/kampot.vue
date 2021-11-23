<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Maison coloniale à Kampot' src='galerie/kampot_Linge.png' />" 
        :titre="$t('details.kampot.a.title')"
        :formatpapier="$t('details.kampot.a.papersize')"
        :formatimage="$t('details.kampot.a.imagesize')"
        :date="$t('details.kampot.a.date')"
        :commentaire="$t('details.kampot.a.comment')"
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/hongkong')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/dalat')">
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
        Retourindex
    },
    data(){
        return{
        }
    }

}