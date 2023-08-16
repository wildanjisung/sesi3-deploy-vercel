<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>nilai store: {{ getAngkaFromStore }}</h1>

    <v-col>
      <v-row>
        <!-- <input type="number" v-model="inputAngka"> -->

        <v-text-field
          label="Regular"
          outlined
          v-model="inputAngka"
        ></v-text-field>

        <!-- <v-text-field
          label="Outlined"
          outlined
        ></v-text-field> -->
      </v-row>
      <v-row>
        <!-- <button @click="changeAngka">ganti angka</button> -->

        <v-btn block @click="changeAngka" color="primary">
          ganti angka
        </v-btn>
      </v-row>

      <v-row>
        <v-layout>
          <v-flex>
            <v-btn color="#1976D2" outline @click="changeTheme('#1976D2')">
              Biru
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn color="#39AC37" outline @click="changeTheme('#39AC37')">
              Hijau
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn color="#DB9600" outline @click="changeTheme('#DB9600')">
              Orange
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn color="##cccbca" outline @click="switchTheme()">
              Gelap/Terang
            </v-btn>
          </v-flex>
        </v-layout>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      inputAngka: 0
    }
  },
  computed: {
    getAngkaFromStore() {
      return this.$store.state.about.angka
    }
  },
  methods: {
    changeAngka() {
      // this.$store.commit("setAngka", 80)
      this.$store.dispatch("about/checkValueAngka", this.inputAngka)
    },
    changeTheme(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color
      } else {
        this.$vuetify.theme.themes.light.primary = color
      }
    },
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary = this.$vuetify.theme.themes.dark.primary
      } else {
        this.$vuetify.theme.themes.dark.primary = this.$vuetify.theme.themes.light.primary
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark 
    },

  }
}
</script>
