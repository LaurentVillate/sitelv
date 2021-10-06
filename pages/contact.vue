<template>
    <v-card tile flat color="blue lighten-5" min-height="700" class="pt-16"> 
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    <NuxtLink class="footer" to="/">
                        <v-icon color="#EF6C00">mdi-arrow-left</v-icon>
                    </NuxtLink>
                </v-card-text>
            </v-col>
        </v-row>
        <v-card-text class="texteFrEn text-caption text-sm-body-2 d-flex justify-center">
            contact.laurentv@gmail.com
        </v-card-text>
    </v-card>   
</template>

<style scoped>

.texteFrEn {
    font-family:'Libre Baskerville'!important;
    color:#37474F!important;
    line-height:26px!important;
    text-indent:0px;
}

.footer{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}



</style>

