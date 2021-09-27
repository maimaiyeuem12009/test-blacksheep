<script setup>
import {ref, computed} from 'vue'
import BaseButton from "./BaseButton.vue";
import { useStore } from 'vuex'
import moment from "moment-timezone"

const emit = defineEmits(['delete'])

const store = useStore()
const {friend} = defineProps({friend: Object, now: Object})

const timezone = friend.time.substring(
    friend.time.lastIndexOf("(") + 1,
    friend.time.lastIndexOf(")")
);
let now = ref()
setInterval(()=>{
  now.value = new Date().toLocaleString('en-US', { timeZone: timezone })
},1000)

</script>

<template>

<div class="flex m-2 flex-row bg-gray-200 rounded-xl h-24 items-center justify-between px-10">
  <a :href="friend.profile">
    <h1 class="text-2xl">{{friend.name}}</h1>
  </a>
  <h2 class="text-4xl font-mono">{{now}}</h2>
  <BaseButton @click="emit('delete')">Delete</BaseButton>
</div>
</template>

<style scoped>


</style>