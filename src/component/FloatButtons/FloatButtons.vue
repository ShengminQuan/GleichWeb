<style src="./FloatButtons.scss" module lang="scss"></style>
<script src="./FloatButtons.js"></script>

<template>
	<div :class="[$style.wrapper, enableFixed ? $style.fix :'']" :style="{right: marginLeft + 'px'}">
		<a :class="$style.button" class="only-showing-desktop" href="#" v-scroll-to="'#contact-us'"><span v-html="$t('float_buttons.contact_us')"></span></a>
		<a :class="$style.button" href="#" v-scroll-to="'#menu'"><img src="~asset/image/icon--scroll-up.png"></a>
	</div>
</template>

