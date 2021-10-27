<template>
  <div>
    <v-divider color="#B3E5FC"></v-divider>
    <v-card tile flat color="blue lighten-5">
      <Retourindex></Retourindex>
    </v-card>
    <v-card tile flat color="blue lighten-5" min-height="700" class="pt-16 px-sm-16">     
      <!--Formulaire de contact-->
      <v-form v-model="valid">
        <v-container>
          <v-row class="py-sm-16">
            <v-col cols="12" md="4">
            <!--Champ prénom obligatoire. 20 caractères max.-->
              <v-text-field class="textgrey"
              v-model="firstname"
              :rules="nameRules"
              :counter="20"
              :label="$t('form.prenom')"
              required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
            <!--Champ nom obligatoire. 20 caractères max.-->
              <v-text-field class="textgrey"
              v-model="lastname"
              :rules="nameRules"
              :counter="20"
              :label="$t('form.nom')"
              required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
            <!--Champ mail obligatoire. 20 caractères max. Vérification de la validité du format mail-->
              <v-text-field class="textgrey"
              v-model="email"
              :rules="emailRules"
              :label="$t('form.mail')"
              required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="py-sm-16">
            <v-col cols='12'>
            <!--Champ message obligatoire. 250 caractères max.-->
              <v-textarea class="textgrey"
              outlined
              :counter="250"
              v-model="message"
              :rules="messagerules"
              name="input-7-4"
              :label="$t('form.message')"
              value=""
              ></v-textarea>
            </v-col>         
          </v-row>
          <v-row>
          <!--Bouton Envoyer. Au clic: fonction send.-->
            <v-btn elevation="0" color="blue-grey darken-4" class="textorange mx-6" @click="send">
          {{$t('form.envoi')}}
            </v-btn>
          <!--Bouton Envoyer. Au clic: fonction cancel.-->
            <v-btn elevation="0" color="blue-grey darken-4" class="textorange" @click="cancel">
          {{$t('form.annulation')}}
            </v-btn>
          </v-row>
        <!--Fenêtre qui s'ouvre si l'envoi du message est un succès. Au clic sur X: retour à l'index-->
          <v-dialog
          v-model="dialog"
          persistent
          max-width="400">
            <v-card color="blue lighten-5" class="pa-4">
              <v-icon color="orange darken-3" class="d-flex justify-center pa-12">
              mdi-emoticon-happy
              </v-icon>
              <v-card-text class="textgrey d-flex justify-center">
              {{$t('form.succes')}}
              </v-card-text>
              <v-card-text class="d-flex justify-end pt-12">
                <NuxtLink class="textorange" :to="localePath('/')">
                  <v-icon color="orange darken-3">
                  mdi-close-circle
                  </v-icon>
                </NuxtLink>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-alert
        v-model="alert" 
        color="transparent" 
        class="form text-caption red--text">
        {{$t('form.erreur')}}
          </v-alert>
        </v-container>
      </v-form>
    </v-card>
    <v-divider color="#B3E5FC"></v-divider> 
  </div>  
</template>

<script>
export default{
  data: () => ({
    alert: false,
    dialog: false,
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Champ obligatoire / Required field',
      v => v.length <= 20 || '20 charactères max / max 20 characters max',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Champ obligatoire / Required field',
      v => /.+@.+/.test(v) || 'E-mail non valide / Invalid e-mail',
    ],
    message:'',
    messagerules: [v => v.length <= 250 || '250 caractères max / Max 250 characters'],
  }),
  methods: {
    //Fonction send:envoi du message si le form est valide. Dans ce cas, la fenêtre de dialogue de succès s'ouvre//
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Message reçu de laurentvillate.com',
        text: this.message,
      })
      if (this.valid === true) {
        this.dialog = true;
      } 
      else{
        this.alert = true;
      } 
    },
  //Fonction cancel: Retour à l'index//
    cancel() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

.textorange{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}

</style>

