<template>
  <div class="container">
    <div>
      <logo />
      <div>
        <div>
          <h2 class="title">
            {{ title }}
          </h2>
          <ul v-if="profiles.length > 0">
            <li v-for="(profile, email) in profiles" v-bind:key="email">
                <p>{{profile.firstname}}</p>
                <p>{{profile.lastname}}</p>
                <p>{{profile.email}}</p>
            </li>
          </ul>
          <p v-else>Aucune profile enregistrer pour le moment.</p>
        </div>
        <!-- <div>
          <p> On a {{ countProfile }} profile</p>
        </div> -->
        <div>
          <h2 class="title">
            Ajouter un profile
          </h2>
          <form @submit.prevent="addProfile">
            <ul>
              <li>
                <input type="text" placeholder="Entrez votre prénom" v-model="newfirstname"/>
              </li>
              <li>
                <input type="text" placeholder="Entrez votre nom" v-model="newlastname"/>
              </li>
              <li>
                <input type="email" placeholder="Entrez votre email" v-model="newemail"/>
              </li>
              <li>
                <input type="submit" value='valide'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Logo
  },
  data(){
    return {
      newfirstname:'',
      newlastname:'',
      newemail:'',
    }
  },
  computed: {
    title(){
      return this.$store.state.profile.title
    },
    profiles(){
      return this.$store.state.profile.list
    }
  },
  methods:{
    addProfile: function() {
      this.$store.commit(
        'profile/add',
        { 
          firstname: this.newfirstname, 
          lastname: this.newlastname, 
          email: this.newemail
        }
      )
      this.newfirstname = ''
      this.newlastname = ''
      this.newemail = ''
    },
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
