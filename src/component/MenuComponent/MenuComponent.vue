<style src="./MenuComponent.scss" module lang="scss"></style>
<script src="./MenuComponent.js"></script>

<template>
	<div id="menu" :class="$style.header">
		<div :class="$style.mainMenu">
			<div class="main-container" :class="$style.wrapper">
				<div :class="[$style.burger, shownSubMenu ? $style.open : '']" class="only-showing-mobile"
				     @click="switchSubMneu"><span></span></div>
				<div
					:class="[$style.item, $style.logo]"><a href="#" :class=""><img src="~asset/image/logo.png"></a></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine, activeItem == 1 ? $style.active : '']"><a href="#" v-scroll-to="'#about-us'">{{ $t('nav.about_us') }}</a></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine, activeItem == 2 ? $style.active : '']"><a href="#" v-scroll-to="'#foundation'">{{ $t('nav.fund') }}</a></div>
				<div class="only-showing-desktop" :class="[$style.item, $style.topLine, activeItem == 3 ? $style.active : '']"><a href="#" v-scroll-to="'#business'">{{ $t('nav.lending') }}</a></div>
				<div :class="[$style.item, $style.switcher]"><LanguageSwitcher componentId="LanguageSwitcher" /></div>
			</div>
		</div>
		<div :class="[$style.submenu, shownSubMenu ? $style.open : '']">
			<p v-scroll-to="'#about-us'">{{ $t('nav.about_us') }}</p>
			<p v-scroll-to="'#foundation'">{{ $t('nav.fund') }}</p>
			<p v-scroll-to="'#business'">{{ $t('nav.lending') }}</p>
			<p v-scroll-to="'#contact-us'">{{ $t('nav.contact_us') }}</p>
		</div>
	</div>
</template>

