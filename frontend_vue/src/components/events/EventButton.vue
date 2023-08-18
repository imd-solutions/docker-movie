<template>
  <button :class="btnCss">
    <template v-if="btnImage">
      <img :src="btnImage.icon" :alt="btnImage.altText" :class="btnImage.imgCss" />
    </template>
    <img
      v-if="processing"
      :src="images.processingGif"
      alt="Processing Gif"
      width="20"
    />
    {{ btnTxt }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-facing-decorator";
import { images } from "./../../constants";
@Component({
  name: "EventButtons",
})
export default class EventButton extends Vue {
  @Prop
  btnCss: string;
  @Prop
  btnImage: string;
  @Prop
  btnTxt: string;
  @Prop
  processing: string;
}
</script>
