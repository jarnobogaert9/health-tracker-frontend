<template>
  <v-app>
    <v-navigation-drawer
      class="deep-purple darken-1"
      v-model="drawer"
      app
      permanent
      expand-on-hover
      dark
    >
      <!-- -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Health Tracker</v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-divider></v-divider> -->

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mx-5 mt-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
      {
        title: "Weight tracking",
        icon: "mdi-weight",
        link: "/weight-tracking",
      },
      { title: "Settings", icon: "mdi-cog", link: "/settings" },
    ],
    drawer: false,
  }),
};
</script>
