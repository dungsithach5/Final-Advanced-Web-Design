<script setup>
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/foods");
    data.value = response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <NavBar />
  <Header></Header>

  <div class="max-w-6xl mx-auto p-6 bg-white my-40">
  <div class="grid grid-cols-2 grid-rows-2 gap-8">
    <div class="text-xl">
      <p class="font-medium leading-7 text-justify text-gray-600">
        Hikari Sato Japanese Restaurant, founded in 2007 by Chef Takashi Tanaka, is a testament to authentic Japanese cuisine and hospitality. 
        Starting in a modest space, the restaurant quickly gained fame for its fresh, delicious sushi and flavorful ramen, crafted with the finest ingredients. 
        Over the years, it has expanded its menu to include traditional Japanese appetizers, donburi bowls, and seasonal specialties, all served in a warm and inviting ambiance. 
        Chef Tanaka's dedication to culinary excellence and innovation has made Hikari Sato a cherished destination for food enthusiasts, 
        blending the rich heritage of Japan with exceptional service.
      </p>
    </div>

    <div>
      <img src="@/assets/images/res2.png" alt="Chef Preparing Sushi" class="w-full">
    </div>

    <div>
      <img src="@/assets/images/res1.png" alt="Restaurant Interior" class="w-full">
    </div>

    <div class="text-xl">
      <p class="font-medium leading-7 text-justify text-gray-600">
        Over the years, Hikari Sato expanded its reach and relocated to a larger space to accommodate its growing fanbase. 
        With a warm ambiance, the restaurant continues to delight diners with its exquisite sushi rolls, fresh sashimi, and rich ramen bowls. 
        The skilled chefs and friendly staff ensure every visit is memorable, making Umai Yume a top destination for those seeking an authentic taste of Japan. 
        Dedicated to using the freshest ingredients and upholding high service standards, it remains a cherished spot for both regulars and new guests 
        looking for a genuine Japanese dining experience. it remains a cherished spot for both regulars and new guests.
      </p>
    </div>
  </div>
</div>

  <div class="bg-[#FAFAFA] h-auto">
    <div class="max-w-screen-xl mx-auto flex justify-between">
      <h1 class="text-8xl font-extrabold mt-36">
        AUTHENTIC
        <br />
        MENU
      </h1>
      <div class="w-[39rem] mt-36 leading-7 text-justify">
        <h1 class="font-medium text-2xl">
          Fresh Ingredients sourced locally
          <br />
          and prepared manually.
        </h1>
        <h1 class="mt-4 text-gray-600 text-xl">
          Take a look at our diverse menu with Ramen, Soba, and Udon. 
          Indulge in authentic Japanese flavors, prepared fresh and served with care.
          Our dishes are crafted with the finest ingredients for an unforgettable taste experience.
        </h1>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto grid grid-cols-4 place-items-center gap-6">
      <div
        v-for="item in data.slice(0, 4)"
        :key="item.id"
        class="max-w-xl mb-40 mt-20"
      >
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
      </div>
    </div>
  </div>
  
  <div class="relative">
  <img src="../assets/images/imgbooking.jpg" alt="" class="w-full object-cover h-[800px]">
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
    <h1 class="text-9xl font-extrabold">BOOKING <br> RESTAURANT NOW</h1>
    <span class="text-xl font-light tracking-wider">Booking restaurant now and you will get cashback 10%</span>
    <button class="mt-4 px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white">Booking now</button>
    
  </div>
</div>

  <Footer></Footer>
</template>
