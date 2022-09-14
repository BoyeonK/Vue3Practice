<template>
  <div class="mainpage">메인페이지
    <div style="margin-top: 340px; height:60px;">
      <a>지친 당신을 위한 여행지 추천 서비스</a>
    </div>
    <div style="height:220px;">
      여기다
    </div>
    <div>
      <p>{{height}}</p>
      <p>{{width}}</p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
const height = ref(null);
const width = ref(null);

function resize() {
  height.value = window.innerHeight;
  width.value = window.innerWidth;
}

onMounted(() => {
  resize()
  window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
});
</script>

<style>
.mainpage {
  min-height: 100%;
  width: 100%;
  background-image: url("../assets/main1-1.jpg");
  background-size: cover;
  position: fixed;
  margin-top: -100px;
  z-index: 0;
}
</style>
