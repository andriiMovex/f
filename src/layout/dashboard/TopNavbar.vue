<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  aria-label="Navbar toggle button"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#pablo">{{routeName}}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
<!--            <div class="search-bar input-group" @click="searchModalVisible = true">-->
<!--              &lt;!&ndash; <input type="text" class="form-control" placeholder="Search...">-->
<!--              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> &ndash;&gt;-->
<!--              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">-->
<!--                <i class="tim-icons icon-zoom-split"></i>-->
<!--              </button>-->
<!--              &lt;!&ndash; You can choose types of search input &ndash;&gt;-->
<!--            </div>-->
<!--            <modal :show.sync="searchModalVisible"-->
<!--                   class="modal-search"-->
<!--                   id="searchModal"-->
<!--                   :centered="false"-->
<!--                   :show-close="true">-->
<!--              <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">-->
<!--            </modal>-->
<!--            <base-dropdown tag="li"-->
<!--                           :menu-on-right="!$rtl.isRTL"-->
<!--                           title-tag="a" class="nav-item">-->
<!--              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">-->
<!--                <div class="notification d-none d-lg-block d-xl-block"></div>-->
<!--                <i class="tim-icons icon-sound-wave"></i>-->
<!--                <p class="d-lg-none">-->
<!--                  New Notifications-->
<!--                </p>-->
<!--              </a>-->
<!--              <li class="nav-link">-->
<!--                <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>-->
<!--              </li>-->
<!--              <li class="nav-link">-->
<!--                <a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>-->
<!--              </li>-->
<!--              <li class="nav-link">-->
<!--                <a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>-->
<!--              </li>-->
<!--              <li class="nav-link">-->
<!--                <a href="#" class="nav-item dropdown-item">Another notification</a>-->
<!--              </li>-->
<!--              <li class="nav-link">-->
<!--                <a href="#" class="nav-item dropdown-item">Another one</a>-->
<!--              </li>-->
<!--            </base-dropdown>-->
            <div class="name">Mark Cohen</div>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <b class="caret1 d-none d-lg-block d-xl-block">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99998 7C5.78492 7 5.56988 6.91597 5.40591 6.74825L0.24617 1.46804C-0.0820567 1.13215 -0.0820567 0.587565 0.24617 0.251814C0.574264 -0.0839379 1.10632 -0.0839379 1.43458 0.251814L5.99998 4.92404L10.5654 0.251977C10.8936 -0.0837747 11.4256 -0.0837747 11.7537 0.251977C12.0821 0.587728 12.0821 1.13231 11.7537 1.4682L6.59405 6.74842C6.43 6.91616 6.21497 7 5.99998 7Z" fill="#B6B6B6"/>
                  </svg>
                </b>
                <div class="photo">
                  <img src="img/anime3.png">
                </div>
<!--                <p class="d-lg-none">-->
<!--                  Log out-->
<!--                </p>-->
              </a>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Profile</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Settings</a>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import Modal from '@/components/Modal';

  export default {
    components: {
      CollapseTransition,
      Modal
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        if(name === 'service'){
          return 'Speedtest'
        }
        return this.capitalizeFirstLetter(name);
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: ''
      };
    },
    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>
<style>
</style>
