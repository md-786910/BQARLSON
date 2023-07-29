<template>
  <header class="header">
    <img class="logo" @click="onTabClick" src="logo-home.png" alt="EWP" />
    <nav>
      <ul @click="onTabClick">
        <li :class="currentRoute === 'home' ? 'active-tab' : ''">Home</li>
        <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
        <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
        <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact</li>
        <li :class="currentRoute === 'special-offers' ? 'active-tab' : ''">
          special-offers
        </li>
      </ul>
    </nav>
    <div class="dropdown">
      <button class="dropdown-btn" @click="showDropdown = !showDropdown">
        Menu
      </button>
      <div class="dropdown-content" v-if="showDropdown">
        <ul @click="onTabClick">
          <li :class="currentRoute === 'home' ? 'active-tab' : ''">Home</li>
          <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
          <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
          <li :class="currentRoute === 'contact' ? 'active-tab' : ''">
            Contact
          </li>
          <li :class="currentRoute === 'special-offers' ? 'active-tab' : ''">
            special-offers
          </li>
        </ul>
      </div>
    </div>
    <el-popover
      :visible="isVisible"
      :teleported="true"
      :show-arrow="false"
      placement="bottom"
      width="1000"
      trigger="hover">
      <template #reference>
        <div
          class="px-[25px] py-[10px] cursor-pointer"
          @click="isVisible = true">
          Services
        </div>
      </template>
      <div class="grid md:grid-cols-4 gap-4 p-2" @click="isVisible = false">
        <router-link
          v-for="(tab, i) in list"
          :key="tab.key"
          :to="'/service/' + i"
          >{{ tab.key }}</router-link
        >
      </div>
    </el-popover>
  </header>
</template>

<script setup>
import list from "/src/homenew/Components/List";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isVisible = ref(false);
const showDropdown = ref(false);
const currentRoute = computed(() => router?.currentRoute.value.name || "home");
function onTabClick(e) {
  const route = e.target.innerText.toLowerCase();
  if (route.includes("about")) {
    router.push("/about");
  } else if (route.includes("work")) {
    router.push("/work");
  } else if (route.includes("contact")) {
    router.push("/contact");
  } else if (route.includes("special")) {
    router.push("/special-offers");
  } else {
    router.push("/home");
  }
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
.active-tab {
  color: #0078ff;
}
header.header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  padding-inline: 20px;
  color: #fff;
  background: black;
  position: sticky;
  top: 0;
  z-index: 99999;
}

.dropdown-content {
  position: absolute;
  right: 0;
  width: 150px;
  background: #3c6478;
}

nav {
  display: none;
}

ul {
  height: 100%;
  list-style-type: none;
  cursor: pointer;
  z-index: 10;
  background: inherit;
  position: relative;
}
li {
  height: 100%;
  padding: 10px 25px;
  font-weight: 400;
}
img.logo {
  height: 100%;
  padding: 5px;
  cursor: pointer;
}
li:hover {
  color: #5ad9ff;
  background: #ffffff5a;
}
@media only screen and (min-width: 800px) {
  header.header {
    padding-inline: 10%;
    justify-content: center;
  }
  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    align-items: center;
  }
  .dropdown {
    display: none;
  }
}
.dropdown-btn {
  padding: 12px;
  color: #fff;
  background: inherit;
}
</style>
