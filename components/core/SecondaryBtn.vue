<template>
  <a :href="href" rel="nofollow" class="main-btn main-btn-2">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SecondaryBtn",
  props: {
    href: {
      type: String,
      default: "",
    }
  },
};
</script>
