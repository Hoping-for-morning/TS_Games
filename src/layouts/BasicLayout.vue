<script setup lang="ts">

const onClickLeft = () => history.back();

const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">队伍</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">用户</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="scss" scoped></style>