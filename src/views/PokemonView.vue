<template>
  <div class="about">
    <h1>This is an Pokemon page</h1>
    <ul>
      <li v-for="itemPokemon in listPokemon" :key="itemPokemon.name">
        {{ itemPokemon.name }}
      </li>
    </ul>
    <button @click="ambilData">fetch list</button>
  </div>
</template>

<script>
export default {
  name: "PokemonView",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list
    }
  },
  methods: {
    ambilData() {
      this.$store.dispatch("pokemon/fetchList")
    }
  },
  mounted() {
    this.ambilData()
  }
}
</script>
