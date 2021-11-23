<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='L'aéroport de Battambang' src='galerie/battambang_Airport.png' />" 
        :titre="$t('details.battambang.a.title')"
        :formatpapier="$t('details.battambang.a.papersize')"
        :formatimage="$t('details.battambang.a.imagesize')"
        :date="$t('details.battambang.a.date')"
        :commentaire="$t('details.battambang.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le Marché central de Battambang' src='galerie/battambang_Marche.png' />" 
        :titre="$t('details.battambang.b.title')"
        :formatpapier="$t('details.battambang.b.papersize')"
        :formatimage="$t('details.battambang.b.imagesize')"
        :date="$t('details.battambang.b.papersize')"
        commentaire=""
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/dalat')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/siemreap')">
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