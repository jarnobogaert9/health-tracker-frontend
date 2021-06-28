<template>
  <div>
    <h1 class="text-h3 mb-2">Weight progress</h1>
    <simple-table :data="data"></simple-table>
  </div>
</template>

<script>
import SimpleTable from "../components/SimpleTable.vue";
import { formatDate } from "../utils";
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
      let weights = this.$store.state.weights;
      weights.forEach((w) => {
        w.date = formatDate(w.date);
      });
      return weights;
    },
  },
};
</script>

<style></style>
