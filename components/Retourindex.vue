<template>
    <v-card flat tile color="transparent" class=" pl-4 pl-sm-16 pt-sm-12">
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    <NuxtLink class="textorange" :to="localePath('/')">
                        <v-icon color="#EF6C00">mdi-view-grid</v-icon>
                        {{$t("home")}}
                    </NuxtLink>
                </v-card-text>
            </v-col>    
        </v-row>
    </v-card>
</template>

<script>

    export default{
        name: "Retourindex",        
    }
</script>

<style scoped>

.textorange{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}

</style>