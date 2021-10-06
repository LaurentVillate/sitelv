
<template>
    <v-card flat color="grey">
        <v-card-text>
            <p>{{nom}}</p>
             <p>{{portrait}}</p>
              <p>{{biographie}}</p>
        </v-card-text>
                
    </v-card>    
</template>


<script>

    export default{
        name: "Auteur",
        props: ["nom", "portrait", "biographie"],
    }
</script>

