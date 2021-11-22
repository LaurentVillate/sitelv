<template>
    <div>
        <!--Bouton de retour à la page d'accueil-->
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
         <!--Les différentes images et leurs infos détaillées, sélectionnées pour la page. Appel au composant imagedetails-->
        </v-card>
        <Imagedetails
        image="<img alt='Amiens rue de Cottenchy' src='/galerie/amiens_Cottenchy.png' />" 
        :titre="$t('details.amiens.a.title')"
        :formatpapier="$t('details.amiens.a.papersize')"
        :formatimage="$t('details.amiens.a.imagesize')"
        :date="$t('details.amiens.a.date')"
        :commentaire="$t('details.amiens.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Amiens la tour Perret' src='/galerie/amiens_Bapaume.png' />" 
        :titre="$t('details.amiens.b.title')"
        :formatpapier="$t('details.amiens.b.papersize')"
        :formatimage="$t('details.amiens.b.imagesize')"
        :date="$t('details.amiens.b.date')"
        :commentaire="$t('details.amiens.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Cathedrale d'Amiens' src='/galerie/amiens_Neige.png' />" 
        :titre="$t('details.amiens.c.title')"
        :formatpapier="$t('details.amiens.c.papersize')"
        :formatimage="$t('details.amiens.c.imagesize')"
        :date="$t('details.amiens.c.date')"
        :commentaire="$t('details.amiens.c.comment')"
        >
        </Imagedetails>
    <!-- 2 boutons pour page avant et page après-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/lehavre')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/phnompenh2')">
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




