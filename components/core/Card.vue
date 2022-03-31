<template>
  <div class="col-lg-4 col-sm-6 text-center">
    <div
      class="single_service mt-30 wow fadeInUpBig"
      data-wow-duration="1.3s"
      data-wow-delay="0.2s"
      style="
        visibility: visible;
        animation-duration: 1.3s;
        animation-delay: 0.2s;
        animation-name: fadeInUpBig;
      "
    >
      <div class="service_icon">
        <i :class="'lni lni-' + icon"></i>
      </div>
      <div class="service_content">
        <h4 class="service_title">
          <a href="#">{{ title }}</a>
        </h4>
        <p>
          {{ description }}
        </p>
        <slot></slot>
        <!-- <ul class="d-flex flex-row">
                <li v-for="l in links" :key="l.url" class="mr-4 my-2">
                  <a :href="l.url"
                    ><i :class="'lni lni-' + l.site + '-' + l.type"></i
                  ></a>
                </li>
              </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
