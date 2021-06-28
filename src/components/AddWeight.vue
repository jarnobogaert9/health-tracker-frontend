<template>
  <v-row justify="center">
    <v-dialog v-model="showAddDialog" persistent scrollable max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add weight</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Amount*"
                  required
                  v-model="amount"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-select
                  :items="['KG']"
                  label="Symbol*"
                  required
                  v-model="symbol"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-date-picker
                v-model="date"
                :disabled="disable"
                color="deep-purple darken-1"
              ></v-date-picker>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="disable"
                  label="Use today's date"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="addWeight"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  methods: {
    closeDialog() {
      this.$store.commit("closeAddDialog");
    },
    async addWeight() {
      try {
        const { amount, symbol, date, disable } = this;
        await this.$store.dispatch("addWeight", {
          amount: Number(amount),
          symbol,
          date: disable
            ? new Date().toISOString()
            : new Date(date).toISOString(),
        });
        this.$store.commit("closeAddDialog");
      } catch (err) {
        console.log(err);
      }
    },
  },
  data: () => ({
    amount: "",
    symbol: "",
    date: "",
    dialog: true,
    disable: false,
  }),
  computed: {
    showAddDialog() {
      return this.$store.state.showAddDialog;
    },
  },
};
</script>
