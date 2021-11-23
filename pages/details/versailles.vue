<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Chateau de Versailles de nuit' src='galerie/versailles_Chateau.png' />" 
        :titre="$t('details.versailles.a.title')"
        :formatpapier="$t('details.versailles.a.papersize')"
        :formatimage="$t('details.versailles.a.imagesize')"
        :date="$t('details.versailles.a.date')"
        :commentaire="$t('details.versailles.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le Chateau de Versailles aile nord' src='galerie/versailles_Chateaujour.png' />" 
        :titre="$t('details.versailles.b.title')"
        :formatpapier="$t('details.versailles.b.papersize')"
        :formatimage="$t('details.versailles.b.imagesize')"
        :date="$t('details.versailles.b.date')"
        :commentaire="$t('details.versailles.b.comment')"
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/saigon')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/paris')">
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