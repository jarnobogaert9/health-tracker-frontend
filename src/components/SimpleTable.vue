<template>
  <v-simple-table fixed-header height="100%">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">KG</th>
          <th class="text-left">Date</th>
          <th class="text-left">Action(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i">
          <td>{{ item.amount }}</td>
          <td>{{ item.date | formatDate }}</td>
          <td>
            <v-btn icon color="error" @click="removeWeight(item._id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { formatDate } from "../utils";
export default {
  props: ["data"],
  // data() {},
  methods: {
    // TODO Edit weight
    removeWeight(id) {
      console.log(id);
      this.$store.dispatch("removeWeight", id);
    },
  },
  filters: {
    formatDate(rawDate) {
      return formatDate(rawDate);
    },
  },
};
</script>
