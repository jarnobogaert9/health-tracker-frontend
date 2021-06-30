<template>
  <div>
    <h1 class="text-h3 mb-2">Weight progress</h1>
    <simple-table :data="data"></simple-table>
  </div>
</template>

<script>
import SimpleTable from "../components/SimpleTable.vue";
export default {
  components: { SimpleTable },
  created() {
    this.loadWeights();
  },
  methods: {
    async loadWeights() {
      try {
        await this.$store.dispatch("fetchWeights");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    data() {
      return this.$store.state.weights;
    },
  },
};
</script>

<style></style>
