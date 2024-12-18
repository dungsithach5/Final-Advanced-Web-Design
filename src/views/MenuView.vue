<script setup>
import Footer from '@/components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const MainMealdata = ref([]);
const AppetizersData = ref([]);
const BeveragesData = ref([]);
const DessertsData = ref([]);

const filteredData = ref([]);
const loading = ref(true);

const categoryFilter = ref('main meal');

const filterData = () => {
  const categoryMap = {
    'main meal': MainMealdata.value,
    'appetizers': AppetizersData.value,
    'beverages': BeveragesData.value,
    'desserts': DessertsData.value,
  };

  filteredData.value = categoryMap[categoryFilter.value] || data.value.filter(
    (item) => item.category === categoryFilter.value
  );
};

onMounted(async () => {
  try {
    const [responseMainMeal, responseAppetizers, responseBeverages, responseDesserts] = await Promise.all([
      axios.get("http://localhost:3000/api/foods"),
      axios.get("http://localhost:3000/api/appetizers"),
      axios.get("http://localhost:3000/api/beverages"),
      axios.get("http://localhost:3000/api/desserts")
    ]);
    MainMealdata.value = responseMainMeal.data;
    AppetizersData.value = responseAppetizers.data;
    BeveragesData.value = responseBeverages.data;
    DessertsData.value = responseDesserts.data;
    filterData();
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <NavBar />
  <img src="../assets/images/headerMenu.png" alt="" class="w-full h-[400px] object-cover">
  <div class="max-w-screen-xl mx-auto pt-10 py-2 flex justify-center gap-6 text-black">
    <button 
      class="px-14 py-2 border-b-2 border-black font-medium hover:bg-black hover:text-white"
      @click="categoryFilter = 'main meal'; filterData()"
    >
      MAIN MEAL
    </button>
    <button 
      class="px-14 py-2 border-b-2 border-black font-medium hover:bg-black hover:text-white"
      @click="categoryFilter = 'appetizers'; filterData()"
    >
      APPETIZERS
    </button>
    <button 
      class="px-14 py-2 border-b-2 border-black font-medium hover:bg-black hover:text-white"
      @click="categoryFilter = 'beverages'; filterData()"
    >
      BEVERAGES
    </button>
    <button 
      class="px-14 py-2 border-b-2 border-black font-medium hover:bg-black hover:text-white"
      @click="categoryFilter = 'desserts'; filterData()"
    >
      DESSERTS
    </button>
  </div>
  <h1 class="pt-10 text-center text-5xl font-m tracking-widest">MENUS</h1>
  <div class="max-w-screen-xl mx-auto grid grid-cols-4 place-items-center gap-6">
    <div
      v-for="item in filteredData"
      :key="item.id"
      class="max-w-xl mt-14"
    >
    <router-link :to="{ name: 'productdetail', params: { id: item._id } }">
      <a href="#">
        <img class="" :src="item.img" alt="" />
      </a>
      <div class="text-left">
        <a href="#">
          <h5
            class="mt-3 text-xl font-semibold tracking-tight text-gray-900"
          >
            {{ item.name }}
          </h5>
        </a>
        <p class="font-medium text-lg text-gray-700">
          {{ item.japanese }}
        </p>
        <p class="mb-3 text-lg text-gray-700">
          ${{ item.price }}
        </p>
      </div>
    </router-link>
    </div>
  </div>

  <div class="relative mt-14">
    <img 
      src="../assets/images/imgbooking.jpg" 
      alt="" 
      class="w-full object-cover h-[800px]">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
      <h1 class="text-9xl font-extrabold">
        BOOKING <br /> RESTAURANT NOW
      </h1>
      <span class="text-xl font-light tracking-wider">
        Booking restaurant now and you will get cashback 10%
      </span>
      <button 
        class="mt-4 px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white">
        Booking now
      </button>
    </div>
  </div>
  
  <Footer />
</template>
