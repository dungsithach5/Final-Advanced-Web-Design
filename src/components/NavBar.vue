<template>
    <nav class="absolute z-40 w-full px-44 flex items-center justify-between text-white py-4 text-lg font-light">
        <div class="w-full md:w-auto" id="navbar-default">
            <ul class="flex items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-6 md:mt-0">
                <li>
                    <router-link to="/">HOME</router-link>
                </li>
                <li>
                    <router-link to="/menu">MENU</router-link>
                </li>
                <li>
                    <router-link to="/reservation">RESERVATION</router-link>
                </li>
                <li>
                    <a href="#">ABOUT US</a>
                </li>
            </ul>
        </div>
        <span>(+84) 090 5694 164</span> 
    </nav>
</template>