<template>
  <button
    class="base-button"
    v-bind="$attrs"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style scoped lang="scss">
.base-button{
  font-size: 1.953em;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 10px;
  background-color: #e60023;
  color: #fff;
  border-radius: 25px;
}

</style>