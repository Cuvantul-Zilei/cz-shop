<template>
  <div class="header_navbar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/">
              <img src="/images/logo.png" alt="Logo" height="125" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="showMenu = !showMenu"
            >
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse sub-menu-bar"
              v-bind:class="{ show: showMenu }"
              id="navbarSupportedContent"
            >
              <ul id="nav" class="navbar-nav ml-auto">
                <li
                  class="nav-item"
                  v-bind:class="{ active: activeMenuIndex === index }"
                  v-for="(i, index) in items"
                  :key="i.href"
                >
                  <a class="page-scroll" :href="i.href"
                    >{{ i.label }}<span></span
                  ></a>
                </li>
              </ul>
            </div>
            <!-- navbar collapse -->
          </nav>
          <!-- navbar -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    activeMenuIndex: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    items() {
      return this.$store.state.structure.menu;
    },
  },
  data() {
    return {
      showMenu: false
    }
  }
};
</script>
