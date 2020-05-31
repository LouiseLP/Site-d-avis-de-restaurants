<template>
  <font-awesome-icon
    icon="star"
    class="fa-md"
    :class="`star ${full ? 'yellow' : ''}`"
  />
</template>

<script>
export default {
  props: {
    full: Boolean
  }
};
</script>

<style>
.star {
  width: 32px;
  height: 32px;
  display: block;
  color: white;
}
.yellow {
  color: #dc981b;
}
</style>
