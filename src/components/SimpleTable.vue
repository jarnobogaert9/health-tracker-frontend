<template>
  <v-simple-table fixed-header height="100%">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">KG</th>
          <th class="text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i">
          <td>{{ item.amount }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ["data"],
  // data() {},
};
</script>
