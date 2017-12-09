<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
	<div :class="$store.getters.currentLanguage.code ">
		<router-view></router-view>
	</div>
</template>
