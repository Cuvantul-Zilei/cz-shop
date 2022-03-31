<template>
  <div class="row" v-bind:class="{ 'justify-content-center': center }">
    <div class="col-12">
      <div class="section_title pb-30" v-bind:class="{ 'text-center': center, 'text-right': right, 'text-left': left }">
        <h5 class="sub_title">{{ title }}</h5>
        <h3 class="main_title">{{ subtitle }}</h3>
        <ul class="line">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    center: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
