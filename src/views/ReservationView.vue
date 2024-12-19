<script setup>
import Footer from '@/components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

const submitReservation = async () => {
    try {
        const reservationData = {
            name: document.getElementById('your-name').value,
            branch: document.getElementById('branch').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phone-number').value,
            adult: parseInt(document.getElementById('adult').value, 10),
            children: parseInt(document.getElementById('children').value, 10),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            note: document.getElementById('message').value,
        };

        const response = await axios.post('http://localhost:3000/api/reservation', reservationData);
        reservationData.value = response.data;
        if (response.status === 201) {
            const successMessage = document.getElementById('toast-success');
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    } catch (error) {
        // console.error('Error submitting reservation:', error);
        const successMessage = document.getElementById('toast-danger');
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
};
</script>

<template>
    <NavBar />
    <div class="relative">
    <img 
        src="../assets/images/headerMenu.png" 
        alt="Header Menu" 
        class="w-full h-[400px] object-cover"
    />
    <h1 
        class="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold tracking-widest"
    >
        TABLE RESERVATION
    </h1>
    </div>

    <h1 class="text-center text-4xl font-bold mt-20">
    TABLE RESERVATION
    </h1>
    <p 
    class="text-center text-lg  max-w-screen-lg mx-auto mt-3 text-gray-600"
    >
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </p>

    <div class="w-full h-auto">
    <div 
        class="max-w-screen-lg h-full mx-auto mt-14 grid grid-cols-2 gap-6"
    >
        <form>
        <div class="mb-5">
            <label 
            for="your-name" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Your name <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="text" 
            id="your-name" 
            class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md"
            required
            />
        </div>
        <div class="mb-5">
            <label 
            for="email" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Email <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="email" 
            id="email" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg w-full p-3"
            required
            />
        </div>
        <div class="mb-5">
            <label 
            for="adult" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Adult <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="number" 
            id="adult" 
            class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md"
            required
            />
        </div>
        <div>
            <label 
            for="date" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Date <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="date" 
            id="date" 
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md"
            required
            />
        </div>
        </form>

        <form>
        <div class="mb-5">
            <label 
            for="branch" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Branch <span class="text-red-500">(*)</span>
            </label>
            <select 
            id="branch" 
            class="block w-full p-3.5 text-gray-900 border border-gray-300 rounded-lg"
            required
            >
            <option value="" disabled selected>Choose branch</option>
            <option value="Hokkaido">Hokkaido</option>
            <option value="Akihabara">Akihabara</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Osaka">Osaka</option>
            </select>
        </div>
        <div class="mb-5">
            <label 
            for="phone-number" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Phone Number <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="number" 
            id="phone-number" 
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-3 text-md"
            required
            />
        </div>
        <div class="mb-5">
            <label 
            for="children" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Children <span class="text-red-500">(*)</span>
            </label>
            <input 
            type="number" 
            id="children" 
            class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md"
            required
            />
        </div>
        <div>
            <label 
            for="time" 
            class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
            Time <span class="text-red-500">(*)</span>
            </label>
            <select 
            id="time" 
            class="block w-full p-5 text-gray-900 border border-gray-300 rounded-lg"
            required
            >
            <option value="" disabled selected>Choose time</option>
            <option value="18:15">18:15</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:45">19:45</option>
            <option value="20:00">20:00</option>
            </select>
        </div>
        </form>
    </div>

    <form class="max-w-screen-lg mx-auto mt-5">
        <label 
        for="message" 
        class="block mb-2 font-medium text-gray-900 dark:text-white"
        >
        Note
        </label>
        <textarea 
        id="message" 
        rows="4" 
        class="block p-4 w-full h-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" 
        placeholder="Leave a comment..."
        ></textarea>
    </form>
    <div class="flex justify-center">
      <button
        type="button"
        class="text-center text-lg mt-10 px-10 py-3 border-2 border-black 
              text-black font-semibold rounded-full 
              hover:bg-black hover:text-white"
        @click="submitReservation"
      >
        Book a table
      </button>
    </div>
    </div>

    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.4716825998928!2d108.220122932110ch5!3d16.07136658383438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218314984c6bd%3A0xb53a043f246ab8cb!2zMTU4YSBMw6ogTOG7o2ksIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1734524765192!5m2!1svi!2s" 
    width="1000" 
    height="500" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    class="w-full mt-20"
    ></iframe>

    <!-- Alert Success -->
    <div id="toast-success" class="hidden fixed bottom-5 right-5 z-50 flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="sr-only">Check icon</span>
        </div>
        <div class="ms-3 text-sm font-medium">You have successfully booked a table.</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>

    <!-- Alert Failed -->
    <div id="toast-danger" class="hidden fixed bottom-5 right-5 z-50 flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
            </svg>
            <span class="sr-only">Error icon</span>
        </div>
        <div class="ms-3 text-sm font-medium">You have failed booked a table.</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-danger" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>

    <Footer />
</template>
  