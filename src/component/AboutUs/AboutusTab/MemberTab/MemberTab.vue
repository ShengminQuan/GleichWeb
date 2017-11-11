<style src="./MemberTab.scss" module lang="scss"></style>
<script src="./MemberTab.js"></script>

<template>
	<div :class="$style.sliderWrap" >
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
					<vue-scrollbar :class="$style.scrollWrap" ref="Scrollbar">
						<div :class="$style.scrollContent">
							<p v-html="$t('about_us_tab.item_2.member_1.desc')"></p>
							<div class="clearfix"></div>
						</div>
					</vue-scrollbar>
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
					<vue-scrollbar :class="$style.scrollWrap" ref="Scrollbar">
						<div :class="$style.scrollContent">
							<p v-html="$t('about_us_tab.item_2.member_2.desc')"></p>
							<div class="clearfix"></div>
						</div>
					</vue-scrollbar>
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
					<vue-scrollbar :class="$style.scrollWrap" ref="Scrollbar">
						<div :class="$style.scrollContent">
							<p v-html="$t('about_us_tab.item_2.member_3.desc')"></p>
							<div class="clearfix"></div>
						</div>
					</vue-scrollbar>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

