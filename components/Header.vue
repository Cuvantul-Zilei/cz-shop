<template>
  <div id="home" class="header_hero">
    <ul class="header_social d-none d-lg-block">
      <li v-for="l in links" :key="l.url">
        <a :href="l.url"><i :class="'lni lni-' + l.site + '-' + l.type"></i></a>
      </li>
    </ul>
    <div class="container">
      <div
        class="row align-items-center justify-content-center justify-content-lg-between"
      >
        <div class="col-lg-5 offset-1 col-sm-11">
          <div class="header_hero_content">
            <CoreTitle :subtitle="title" />
            <h5>{{subtitle}}</h5>
            <CorePrimaryBtn v-if="primaryBtn" :href="primaryBtn">{{primaryBtnLabel}}</CorePrimaryBtn>
            <CoreSecondaryBtn v-if="secondaryBtn" :href="secondaryBtn">{{secondaryBtnLabel}}</CoreSecondaryBtn>
          </div>
          <!-- header hero content -->
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div
            class="header_hero_image mt-50 wow fadeInRightBig"
            data-wow-duration="1.3s"
            data-wow-delay="1.8s"
          >
            <img :src="imgSrc" alt="hero" />
          </div>
          <!-- header hero image -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
    <div class="header_hero_shape d-none d-lg-block"></div>
    <!-- header hero shape -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    imgSrc: {
      type: String,
      default: '/images/hero.png'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    primaryBtn: {
      type: String,
      default: ''
    },
    primaryBtnLabel: {
      type: String,
      default: ''
    },
    secondaryBtn: {
      type: String,
      default: ''
    },
    secondaryBtnLabel: {
      type: String,
      default: ''
    },
  },
  computed: {
    links() {
      return this.$store.state.structure.smLinks;
    },
  },
};
</script>
