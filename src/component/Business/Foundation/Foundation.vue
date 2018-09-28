<style src="./Foundation.scss" module lang="scss"></style>
<script src="./Foundation.js"></script>

<template>
	<div :style="{paddingLeft: paddingLeft + 'px'}">
		<div :class="$style.tab">
			<div :class="$style.tabNav">
				<div :class="$style.tabName"><span>{{ $t('business.foundation.name') }}</span></div>
				<div :class="$style.tabNavContainer">
					<div :class="$style.tabNavContent">
						<div :class="$style.activeBackground" :style="{top: currentSlider*70 + 'px'}"></div>
						<div :class="[$style.tabNavItem, currentSlider == 0 ? $style.active : '']"
						     @click="goToSlider(0)"><span>{{ $t('business.foundation.item_1.name') }}</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 1 ? $style.active : '']"
						     @click="goToSlider(1)"><span>{{ $t('business.foundation.item_2.name') }}</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 2 ? $style.active : '']"
						     @click="goToSlider(2)"><span>{{ $t('business.foundation.item_3.name') }}</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 3 ? $style.active : '']"
						     @click="goToSlider(3)"><span>{{ $t('business.foundation.item_4.name') }}</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 4 ? $style.active : '']"
							 @click="goToSlider(4)"><span>{{ $t('business.foundation.item_5.name') }}</span></div>
					</div>
				</div>
			</div>
			<div :class="$style.tabContent">
				<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="foundationSwiper"
				        :class="$style.foundationSlider">
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">{{ $t('business.foundation.name') }} - {{ $t('business.foundation.item_1.name') }}</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation_1.jpg">
								<p v-html="$t('business.foundation.item_1.desc')"></p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">
								{{ $t('business.foundation.name') }} - {{ $t('business.foundation.item_2.name') }}
							</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation_2.jpg">
								<p v-html="$t('business.foundation.item_2.desc')"></p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">
								{{ $t('business.foundation.name') }} - {{ $t('business.foundation.item_3.name') }}
							</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img class="zh" src="~asset/image/foundation_3_zh.jpg">
								<img class="en" src="~asset/image/foundation_3_en.jpg">
								<p v-html="$t('business.foundation.item_3.desc')"></p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">
								{{ $t('business.foundation.name') }} - {{ $t('business.foundation.item_4.name') }}
							</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation_4.jpg">
								<p v-html="$t('business.foundation.item_4.desc')"></p>
								<a href="mailto:info@gleich.com.au"><b>info@gleich.com.au</b></a>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">
								{{ $t('business.foundation.name') }} - {{ $t('business.foundation.item_5.name') }}
							</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation_5.jpg">
								<p v-html="$t('business.foundation.item_5.desc')"></p>
								
								<a :class="$style.pdfLink" :href="`${$versionRoot}image/pdfs/im_outline.pdf`" target="_blank"><b>{{ $t('business.foundation.link') }}</b></a>
							</div>
						</div>
					</swiper-slide>
					<div :class="$style.foundationPagination" class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

