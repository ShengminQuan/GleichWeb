<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
		<MenuComponent componentId="MenuComponent" />
		<HeroSlider />
		<AboutGleich />
		<div id="parallax-bg" :class="$style.wrapper">
			<AboutUs />
			<Business />
		</div>
		<!--<News />-->
		<ContactUs />
		<FooterComponent />
		<FloatButtons />
	</div>
</template>
