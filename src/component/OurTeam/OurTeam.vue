<style src="./OurTeam.scss" module lang="scss"></style>
<script src="./OurTeam.js"></script>

<template>
	<div :class="$style.ourTeam">
		<div class="main-container">
			<div class="container text-center summary-wrap">
				<p>{{ $t('business.desc') }}</p>
			</div>
			<div class="container clearfix" :class="$style.sliderNav">
				<div :class="[$style.sliderNavItem, activeItem == 0 ? $style.active : '' ]" @click="swipeSlider(0)">
					<p>
						{{ $t('about_us_tab.item_2.member_1.name') }}
					</p>
				</div>
				<div :class="[$style.sliderNavItem, activeItem == 1 ? $style.active : '' ]" @click="swipeSlider(1)">
					<p>
						{{ $t('about_us_tab.item_2.member_2.name') }}
					</p>
				</div>
				<div :class="[$style.sliderNavItem, activeItem == 2 ? $style.active : '' ]" @click="swipeSlider(2)">
					<p>
						{{ $t('about_us_tab.item_2.member_3.name') }}
					</p>
				</div>
			</div>
			<div class="container" :class="$style.sliderWrap" >
				<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="memberSwiper">
					<swiper-slide :class="$style.member">
						<div :class="$style.memberPic">
							<img src="~asset/image/member-01.jpg">
							<div :class="$style.memberInfo">
								<span :class="$style.memberName">{{ $t('about_us_tab.item_2.member_1.name') }}</span>
								<span :class="$style.memberTitle">{{ $t('about_us_tab.item_2.member_1.title') }}</span>
							</div>
						</div>
						<div :class="$style.memberDesc">
							<span :class="$style.memberDescName">{{ $t('about_us_tab.item_2.member_1.name') }}</span>
							<span :class="$style.memberDescTitle">{{ $t('about_us_tab.item_2.member_1.title') }}</span>
							<p v-html="$t('about_us_tab.item_2.member_1.desc')"></p>
						</div>
					</swiper-slide>

					<swiper-slide :class="$style.member">
						<div :class="$style.memberPic">
							<img src="~asset/image/member-02.jpg">
							<div :class="$style.memberInfo">
								<span :class="$style.memberName">{{ $t('about_us_tab.item_2.member_2.name') }}</span>
								<span :class="$style.memberTitle">{{ $t('about_us_tab.item_2.member_2.title') }}</span>
							</div>
						</div>
						<div :class="$style.memberDesc">
							<span :class="$style.memberDescName">{{ $t('about_us_tab.item_2.member_2.name') }}</span>
							<span :class="$style.memberDescTitle">{{ $t('about_us_tab.item_2.member_2.title') }}</span>
							<p v-html="$t('about_us_tab.item_2.member_2.desc')"></p>
						</div>
					</swiper-slide>

					<swiper-slide :class="$style.member">
						<div :class="$style.memberPic">
							<img src="~asset/image/member-03.jpg">
							<div :class="$style.memberInfo">
								<span :class="$style.memberName">{{ $t('about_us_tab.item_2.member_3.name') }}</span>
								<span :class="$style.memberTitle">{{ $t('about_us_tab.item_2.member_3.title') }}</span>
							</div>
						</div>
						<div :class="$style.memberDesc">
							<span :class="$style.memberDescName">{{ $t('about_us_tab.item_2.member_3.name') }}</span>
							<span :class="$style.memberDescTitle">{{ $t('about_us_tab.item_2.member_3.title') }}</span>
							<p v-html="$t('about_us_tab.item_2.member_3.desc')"></p>
						</div>
					</swiper-slide>

					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
				<div :class="$style.swiperLeftArrow" class="swiper-button-prev"
				     slot="button-prev"><Icon :class="$style.buttonIcon" name="arrow-left"/></div>
				<div :class="$style.swiperRightArrow" class="swiper-button-next"
				     slot="button-next"><Icon :class="$style.buttonIcon" name="arrow-right"/></div>
			</div>
		</div>
	</div>
</template>

