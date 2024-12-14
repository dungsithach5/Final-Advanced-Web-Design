<template>
  <NavBar class="bg-black" />
  <!-- ramen -->
  <div class="max-w-screen-xl mx-auto pt-32">
    <div v-if="foodItem" class="grid grid-cols-2">
      <img :src="foodItem.img" alt=""class="h-[800px]"  />
      <div class="space-y-5">
        <h3 class="text-4xl font-medium">{{ foodItem.name }}</h3>
        <h3 class="text-xl">{{ foodItem.japanese }}</h3>
        <p class="text-xl">${{ foodItem.price }}</p>
        <p class="leading-7 text-justify">{{ foodItem.description }}</p>
        <button class="mt-4 px-7 py-3 bg-black text-white font-semibold rounded-full">Booking now</button>
      </div>
    </div>

    <!-- Appetizers -->
    <div v-if="productItem" class="grid grid-cols-2">
      <img :src="productItem.img" alt=""class="h-[800px]"  />
      <div class="space-y-5">
        <h3 class="text-4xl font-medium">{{ productItem.name }}</h3>
        <h3 class="text-xl">{{ productItem.japanese }}</h3>
        <p class="text-xl">${{ productItem.price }}</p>
        <p class="leading-7 text-justify">{{ productItem.description }}</p>
        <button class="mt-4 px-7 py-3 bg-black text-white font-semibold rounded-full">Booking now</button>
      </div>
    </div>
  </div>

  <div class="relative mt-20">
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

<script>
import Footer from '@/components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'ProductDetail',
  components: {
    NavBar,
    Footer,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productItem: null,
      foodItem: null,
    };
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const [productResponse, foodResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/appetizers/${this.id}`),
          axios.get(`http://localhost:3000/api/foods/${this.id}`),
        ]);

        this.productItem = productResponse.data;
        this.foodItem = foodResponse.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
  },
};
</script>