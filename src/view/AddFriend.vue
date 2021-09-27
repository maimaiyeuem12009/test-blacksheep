<script setup>
import timezone from '../assets/data/timezone.json'
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue";
import BaseButton from "../components/BaseButton.vue";
import { v1 as uuidv1 } from 'uuid'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const timezoneList = timezone.map(data => data.label)
const router = useRouter()
const store = useStore()

let [time, name, profile] = [
   "Bangkok, Hanoi, Jakarta (Asia/Bangkok)",
    "",
    "https://www.pinterest.com/"
].map((a) => ref(a))
const createFriend = (payload) => store.dispatch('friend/createFriend',payload)

const sendForm = () => {
  let friend = {
    id: uuidv1(),
    name: name.value,
    profile: profile.value,
    time: time.value,
  }
  createFriend(friend)
  router.push({ name: 'Home', params: {id: event.id }})
}

</script>

<template>
  <div class="p-10">
    <form @submit.prevent="sendForm()">
      <BaseInput
          label="Name"
          v-model="name"
      />
      <BaseInput
          label="Profile link"
          v-model="profile"
      />
      <BaseSelect
          :options="timezone"
          v-model="time"
      />
      <BaseButton label="Submit" type="submit"/>
    </form>
  </div>
</template>

<style scoped>

</style>