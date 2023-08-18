<template>
  <section class="bg-blueGray-50">
    <div class="container mx-auto overflow-hidden">
      <div class="flex items-center justify-between px-4 py-5 bg-blueGray-50">
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto mr-14">
              <a href="#">
                <img v-if="application" src="#" :alt="application.name" />
              </a>
            </div>
          </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <NavigationHeader />
            <div class="w-auto lg:hidden">
              <a href="#">
                <svg
                  class="navbar-burger text-indigo-600"
                  width="51"
                  height="51"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
      >
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
          <div class="flex flex-wrap justify-between h-full">
            <div class="w-full">
              <div class="flex items-center justify-between -m-2">
                <div class="w-auto p-2">
                  <a class="inline-block" href="#">
                    <img v-if="application" src="#" :alt="application.name" />
                  </a>
                </div>
                <div class="w-auto p-2">
                  <a class="navbar-burger" href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center py-16 w-full">
              <ul>
                <li class="mb-12">
                  <a class="font-medium hover:text-gray-700" href="#"
                    >Features</a
                  >
                </li>
                <li class="mb-12">
                  <a class="font-medium hover:text-gray-700" href="#"
                    >Solutions</a
                  >
                </li>
                <li class="mb-12">
                  <a class="font-medium hover:text-gray-700" href="#"
                    >Resources</a
                  >
                </li>
                <li>
                  <a class="font-medium hover:text-gray-700" href="#"
                    >Pricing</a
                  >
                </li>
              </ul>
            </div>
            <div class="flex flex-col justify-end w-full pb-8">
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="block">
                    <button
                      class="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-orange-600 hover:bg-orange-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Try 14 Days Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Prop, Component, Vue } from "vue-facing-decorator";
import { NavigationHeader } from "./../navigation";
import { Application } from "./../../types";

@Component({
  components: {
    NavigationHeader,
  },
})
export default class SiteHeader extends Vue {
  @Prop
  application?: Application;
}
</script>
