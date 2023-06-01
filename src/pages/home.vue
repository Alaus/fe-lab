<template>
  <div>
    <!-- 菜单栏 -->
    <router-link v-slot="{ href, navigate, isExactActive }" to="/home/user" custom>
      <div :class="{ active: isExactActive }" :href="href" @dblclick="navigate">跳转user</div>
    </router-link>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup></script>
