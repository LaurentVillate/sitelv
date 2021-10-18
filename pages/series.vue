<template>
    <v-card tile flat :to="localePath(link)">
                <v-img width="200" src="/galerie/hue_Autoportrait.png" aspect-ratio="1" class="blue lighten-5">             
                </v-img>
                
              </v-card>
</template>

<script>
export default {
    data () {
        
        return{
            link:"/details/amiens"
        }
    }
}
</script>