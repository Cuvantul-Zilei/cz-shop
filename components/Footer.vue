<template>
  <footer id="footer" class="footer_area gray-bg pt-115 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer_content text-center">
            <p>un proiect</p>
            <a href="#"><img src="/images/logo.png" alt="Logo" height="100"/></a>
            <ul class="footer_social">
              <li v-for="l in links" :key="l.site">
                <a :href="l.url"><i :class="'lni lni-' + l.site"></i></a>
              </li>
            </ul>
            <!-- <span class="email">someone@example.com</span> -->
            <ul class="footer_menu">
              <li v-for="i in items" :key="i.href">
                <a :href="i.href">{{ i.label }}</a>
              </li>
            </ul>
            <!-- <p class="credit pt-45">
              Created with ❤️ by
              <a href="https://georgebrata.ro/">George</a>
            </p> -->
          </div>
          <!-- footer content -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    items() {
      return this.$store.state.structure.menu;
    },
    links() {
      return this.$store.state.structure.smLinks;
    },
  },
};
</script>
