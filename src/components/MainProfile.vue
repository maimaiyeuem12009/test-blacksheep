<script setup>
import BaseButton from "./BaseButton.vue";

const props = defineProps({profile: Object})

</script>

<template>
  <div class="flex flex-col rounded-2xl p-3 bg-gray-100 items-center">
    <img class="w-36 h-36 rounded-full" :src="props.profile.image"/>
    <div class="profile-data ">
      <h2 class="text-4xl font-semibold">{{props.profile.name}}</h2>
      <p class="text-2xl email">{{props.profile.email}}</p>
    </div>
    <router-link to="/addfriend">
      <baseButton>Add Friend</baseButton>
    </router-link>

  </div>



</template>

<style scoped>

</style>