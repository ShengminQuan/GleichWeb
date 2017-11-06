<style src="./MenuComponent.scss" module lang="scss"></style>
<script src="./MenuComponent.js"></script>

<template>
	<div id="menu" :class="$style.header">
		<div class="main-container">
			<div :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#about-us'">关于我们</a></div>
			<div :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#foundation'">信贷基金</a></div>
			<div :class="[$style.item, $style.logo]"><a href="#" :class=""><Icon name="logo"/></a></div>
			<div :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#business'">信贷业务</a></div>
			<div :class="$style.item"><LanguageSwitcher componentId="LanguageSwitcher" /></div>
		</div>
	</div>
</template>

