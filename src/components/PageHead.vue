<template>
  <header class="header">
   <div class="img-container">
    <img class="logo" @click="onTabClick" src="logo-home.png" alt="EWP" />
   </div>
    <nav>
      <ul @click="onTabClick">
        <li :class="currentRoute === 'home' ? 'active-tab' : ''">Home</li>
        <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
        <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
        <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact</li>
        <li :class="currentRoute === 'special-offers' ? 'active-tab' : ''">
          Special Offers
        </li>
        <li :class="currentRoute === 'internship' ? 'active-tab' : ''">
          Internship
        </li>
        <li :class="currentRoute === 'internship' ? 'active-tab' : ''">
            <a href="https://e-certification.vercel.app/" target="_blank">

              Download Certificate
            </a>
          </li>
      </ul>
    </nav>
    <el-popover
      :visible="isVisible"
      :teleported="true"
      :show-arrow="false"
      placement="bottom"
      width="1000"
      trigger="click">
      <template #reference>
        <div
          class="px-[25px] py-[10px] cursor-pointer rounded-[8px] hover:bg-[#fff] hover:text-[#000]"
          @click="isVisible = true">
          Services
        </div>
      </template>
      <div class="grid md:grid-cols-4 gap-x-8" @click="isVisible = false">
        <span
          v-for="(tab, i) in list"
          :key="tab.key"
          class="flex items-center w-full border-b-[yellow] border-solid border-b py-2">
          <span class="bg-[yellow] h-[8px] w-[8px] mr-2 rounded-full"></span>
          <router-link :to="'/service/' + i">{{ tab.key }}</router-link>
        </span>
      </div>
    </el-popover>
    <div class="dropdown relative">
      <button class="dropdown-btn" @click="showDropdown = !showDropdown">
        <Icon icon="material-symbols:menu" class="text-[32px]" />
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
            Special Offers
          </li>
          <li :class="currentRoute === 'internship' ? 'active-tab' : ''">
            Internship
          </li>
          <li :class="currentRoute === 'internship' ? 'active-tab' : ''">
            <a href="https://e-certification.vercel.app/" target="_blank">

              Download Certificate
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import list from "/src/homenew/Components/List";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

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
  } else if (route.includes("internship")) {
    router.push("/internship");
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
  height: 80px;
  padding: 15px 0;
  border-bottom: 1px solid rgb(91, 91, 90);
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
  @apply truncate;
  height: 100%;
  padding: 10px 25px;
  font-weight: 400;
}
ul li:hover {
  color: #000;
  background: #fff;
  border-radius: 8px;
}

img.logo {
  display: block;
  object-fit: cover;
  height: 100%;
  height: 100%;
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
