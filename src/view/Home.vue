<script setup>
import MainProfile from "../components/MainProfile.vue"
import CardName from "../components/CardName.vue";
import { useStore} from "vuex";
import {ref, computed} from "vue";

const store = useStore();
const friends = computed(()=> store.state.friend.friends)
const deleteFriend = (payload) => store.dispatch('friend/removeFriend',payload)
const profile = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  image: "https://ik.imagekit.io/nn95vi04aif/bill_ZzI9cZj5E3.jpg?updatedAt=1632647388240"
}

</script>

<template>
<div class="container">
  {{friends}}
  <MainProfile
  :profile="profile"
  />
  <router-view/>

  <CardName v-for="(friend,id) in friends" :key="id" :friend="friend" v-on:delete="deleteFriend(id)"/>
</div>
</template>

<style scoped>

</style>