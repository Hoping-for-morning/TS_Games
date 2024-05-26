<script setup lang="ts">

const onClickLeft = () => history.back();
const onClickRight = () => alert('按钮');

const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<template>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">标签 1</van-tabbar-item>
        <van-tabbar-item icon="search">标签 2</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签 3</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签 4</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="scss" scoped></style>