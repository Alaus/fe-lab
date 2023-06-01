<template>
  <div>
    <div class="user-name">姓名：{{ userInfo.name }} 年龄：{{ userInfo.age }}</div>
    <div>token：{{ token }}</div>
    <div>getter值：{{ newName }}</div>
    <el-button @click="handleUser">更新用户</el-button>
    <el-button @click="handleAge">更新年龄</el-button>
    <el-button @click="handleToken">更新token</el-button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user'; //路径别名，引入store
import { getList } from '@/apis/user';
getList({ id: 2 });

const userStore = useUserStore();

//storeToRefs 会跳过所有的 action 属性
const { userInfo, token, newName } = storeToRefs(userStore);

//action 属性直接解构
const { updateUserInfo, updateAge, updateToken } = userStore;

const handleUser = () => {
  updateUserInfo({ name: 'lisi', age: 24 });
};

const handleAge = () => {
  //userInfo是一个ref响应式引用，需通过.value取值
  updateAge(userInfo.value.age + 1);
};

const handleToken = () => {
  updateToken('23234');
};
</script>

<style lang="scss">
.user-name {
  color: $test-color;
}
</style>
