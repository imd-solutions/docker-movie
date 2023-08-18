<template>
  <section class="relative pt-28 pb-32 bg-orange-600 overflow-hidden">
    <div class="relative z-10 container px-4 mx-auto">
      <div class="flex flex-wrap -m-8">
        <div class="w-full md:w-1/2 p-8">
          <div class="lg:max">
            <h2
              class="mb-16 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight"
            >
              Have fun choosing you fave quote.
            </h2>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-8">
          <div class="flex flex-wrap -m-8 mb-10">
            <div class="w-full sm:w-1/3 p-8">
              <ul>
                <li class="mb-3.5">
                  <a
                    class="text-white hover:text-gray-200 font-medium leading-relaxed"
                    href="#"
                    >About</a
                  >
                </li>
                <li class="mb-3.5">
                  <a
                    class="text-white hover:text-gray-200 font-medium leading-relaxed"
                    href="#"
                    >Product</a
                  >
                </li>
                <li class="mb-3.5">
                  <a
                    class="text-white hover:text-gray-200 font-medium leading-relaxed"
                    href="#"
                    >Testimonials</a
                  >
                </li>
                <li>
                  <a
                    class="text-white hover:text-gray-200 font-medium leading-relaxed"
                    href="#"
                    >Services</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <p
            class="text-sm text-white text-opacity-50 font-medium leading-relaxed"
          >
            Copyright © 2022 Flaro. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component({})
export default class SiteFooter extends Vue {}
</script>
