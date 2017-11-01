<style src="./News.scss" module lang="scss"></style>
<script src="./News.js"></script>

<template>
	<div :class="$style.newsWrap">
		<h2 class="heading-01 text-center">News</h2>
		<div :class="$style.sliderWrap" class="container">
			<swiper :options="swiperOption" :class="$style.newsSlider">
				<swiper-slide :key="index" v-for="(news, index) in data">
					<NewsItem
						:news="news"
					/>
				</swiper-slide>

				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<div :class="$style.swiperLeftArrow" class="swiper-button-prev"
			     slot="button-prev"><Icon :class="$style.buttonIcon" name="arrow-left"/></div>
			<div :class="$style.swiperRightArrow" class="swiper-button-next"
			     slot="button-next"><Icon :class="$style.buttonIcon" name="arrow-right"/></div>
		</div>

	</div>
</template>

