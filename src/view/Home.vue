<script setup>
import MainProfile from "../components/MainProfile.vue"

const profile = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  image: "https://ik.imagekit.io/nn95vi04aif/bill_ZzI9cZj5E3.jpg?updatedAt=1632647388240"
}


</script>

<template>
<div class="container">
  <MainProfile
  :profile="profile"
  />

</div>
</template>

<style scoped>

</style>