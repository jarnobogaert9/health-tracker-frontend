<template>
  <div>
    <h1 class="text-h3">Dashboard</h1>
    <v-row class="mt-2">
      <v-col>
        <v-card elevation="2">
          <v-card-title>Weight progress</v-card-title>
          <v-sparkline
            :labels="labels"
            :value="value"
            :smooth="radius"
            :line-width="width"
            color="deep-purple darken-1"
            padding="28"
          ></v-sparkline>
          <v-card-text>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="deep-purple accent-1"
                  dark
                  fab
                  v-bind="attrs"
                  v-on="on"
                  @click="showAddDialog"
                >
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Add new weight entry</span>
            </v-tooltip>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col>
        <v-card elevation="2">
          <v-card-title>Exercise tracking</v-card-title>
        </v-card>
      </v-col> -->
    </v-row>
    <!-- <add-weight></add-weight> -->
    <AddWeight></AddWeight>
  </div>
</template>

<script>
import AddWeight from "../components/AddWeight.vue";
export default {
  components: { AddWeight },
  name: "Home",
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
    showAddDialog() {
      this.$store.commit("showAddDialog");
    },
  },
  computed: {
    labels() {
      return this.$store.state.weights.map((x) => {
        // const d = new Date(x.date);
        let str = "";
        // str += x.amount + x.symbol + " - ";
        str += x.amount + x.symbol;
        // str += d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
        return str;
      });
    },
    value() {
      console.log(this.$store.state.weights);
      const w = this.$store.state.weights.map((x) => x.amount);
      return w;
    },
  },
  data: () => ({
    radius: 12,
    width: 1.5,
  }),
};
</script>
