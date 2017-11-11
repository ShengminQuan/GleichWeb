<style src="./BusinessSlider.scss" module lang="scss"></style>
<script src="./BusinessSlider.js"></script>

<template>
	<div>
		<div :class="$style.sliderWrap" class="main-container">
			<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="businessSwiper">
				<swiper-slide>
					<div :class="$style.content">
						<h2>{{ $t('business.business.name_1') }}</h2>
						<img src="~asset/image/business_1.jpg">
						<div :class="$style.description">
							<p>{{ $t('business.business.desc_1') }}</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div :class="$style.content">
						<h2>{{ $t('business.business.name_2') }}</h2>
						<img src="~asset/image/business_2.jpg">
						<div :class="$style.description">
							<p>{{ $t('business.business.desc_2') }}</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div :class="$style.content">
						<h2>{{ $t('business.business.name_3') }}</h2>
						<img src="~asset/image/business_3.jpg">
						<div :class="$style.description">
							<p>{{ $t('business.business.desc_3') }}</p>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

