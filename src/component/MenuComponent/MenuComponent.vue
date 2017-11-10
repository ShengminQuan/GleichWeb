<style src="./MenuComponent.scss" module lang="scss"></style>
<script src="./MenuComponent.js"></script>

<template>
	<div id="menu" :class="$style.header">
		<div :class="$style.mainMenu">
			<div class="main-container" :class="$style.wrapper">
				<div :class="[$style.burger, shownSubMenu ? $style.open : '']" class="only-showing-mobile"
				     @click="switchSubMneu"><span></span></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#about-us'">关于我们</a></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#foundation'">信贷基金</a></div>
				<div :class="[$style.item, $style.logo]"><a href="#" :class=""><Logo name="logo"/></a></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine]"><a href="#" v-scroll-to="'#business'">信贷业务</a></div>
				<div :class="[$style.item, $style.switcher]"><LanguageSwitcher componentId="LanguageSwitcher" /></div>
			</div>
		</div>
		<div :class="[$style.submenu, shownSubMenu ? $style.open : '']">
			<p v-scroll-to="'#about-us'">关于Gleich</p>
			<p v-scroll-to="'#foundation'">Gleich 信贷基金</p>
			<p v-scroll-to="'#business'">Gleich 信贷业务</p>
			<p v-scroll-to="'#contact-us'">联系我们</p>
		</div>
	</div>
</template>

