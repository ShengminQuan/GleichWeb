<style src="./HeroSlider.scss" module lang="scss"></style>
<script src="./HeroSlider.js"></script>

<template>
	<div>
		<div :class="$style.sliderContent">
			<h2 class="heading-01">{{ $t('hero_slider.slider_1.title_1') }}<i class="icon-diamond"></i>{{
				$t('hero_slider.slider_1.title_2') }}</h2>
			<hr class="heading-01--underline"/>
			<p>{{ $t('hero_slider.slider_1.desc') }}</p>
		</div>
		<!-- swiper -->
		<swiper :options="swiperOption" :class="$style.slider">
			<swiper-slide class="flex-center" :class="$style.slider1">
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider2">
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider3">
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider4">
			</swiper-slide>
			<swiper-slide class="flex-center" :class="$style.slider5">
			</swiper-slide>
			<div :class="$style.pagination" class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

