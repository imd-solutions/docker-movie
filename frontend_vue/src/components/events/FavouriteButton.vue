<template>
  <button
    class="bg-transparent focus:outline-none"
    style="color: red"
    @click="isClicked = !isClicked"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :fill="isClicked ? 'currentColor' : 'none'"
      :stroke="isClicked ? '' : 'currentColor'"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      class="w-6 h-6"
    >
      <path
        :stroke-linecap="isClicked ? '' : 'round'"
        :stroke-linejoin="isClicked ? '' : 'round'"
        :d="
          isClicked
            ? 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            : 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        "
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-facing-decorator";

@Component
export default class FavouriteButton extends Vue {
  isClicked: boolean = false;
}
</script>
