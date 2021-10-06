<template>
    <v-card tile flat min-height="700" color="blue lighten-5" class="pa-4 pa-sm-16"> 
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    <NuxtLink class="footer" to="/">
                        <v-icon color="#EF6C00">mdi-arrow-left</v-icon>
                    </NuxtLink>
                </v-card-text>
            </v-col>
        </v-row>
        <v-card-text class="texteFrEn text-caption text-sm-body-2">
            <p>Textes et images : Laurent Villate</p>
            <br>
            <p>Conception et réalisation : Image Rare, éditeur digital
            <p>Hébergement : 1&1 Ionos</p>
            <br>
            <p>Laurent Villate est membre de la Maison des artistes</p>
            <p>SIRET: 814 475 463 00026</p>
            <br>
            <p>Les contenus de ce site, notamment les images et les textes, sont soumis au droit d'auteur.</p>
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