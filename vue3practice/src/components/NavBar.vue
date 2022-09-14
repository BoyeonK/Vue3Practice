<template>
  <div class="navBar">
    <div class="navBar-logo"></div>
    <div style="display: flex">
      <div class="navBar-btn">마이페이지</div>
      <div class="navBar-btn">로그아웃</div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.navBar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  top: 0;
}
.navBar-logo {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.navBar-btn {
  width: 200px;
  height: 100px;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}
</style>
