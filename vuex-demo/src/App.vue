<template>
  <div id="app">
  <div>{{ current }}</div>
  <button @click="remoter">remoter</button>
  <button @click="hot">hot</button>
  </div>
</template>

<script>
const App = {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    current () {
      return this.$store.state.current
    }
  },
  methods: {
    remoter() {
      this.$store.dispatch('press');
    },

    hot() {
      this.$store.dispatch('hot');
    }
  }
}

export default App;

</script>

<style></style>