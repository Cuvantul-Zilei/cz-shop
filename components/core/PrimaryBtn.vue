<template>
  <a :target="target ? '_blank' : ''" :href="href" rel="nofollow" class="main-btn"><slot></slot></a>
</template>

<script>
export default {
  name: "PrimaryBtn",
  props: {
    href: {
      type: String,
      default: "",
    },
    target: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
