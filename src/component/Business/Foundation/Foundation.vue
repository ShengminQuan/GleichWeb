<style src="./Foundation.scss" module lang="scss"></style>
<script src="./Foundation.js"></script>

<template>
	<div :style="{paddingLeft: paddingLeft + 'px'}">
		<div :class="$style.tab">
			<div :class="$style.tabNav">
				<div :class="$style.tabName"><span>信贷基金</span></div>
				<div :class="$style.tabNavContainer">
					<div :class="$style.tabNavContent">
						<div :class="$style.activeBackground" :style="{top: currentSlider*70 + 'px'}"></div>
						<div :class="[$style.tabNavItem, currentSlider == 0 ? $style.active : '']"
						     @click="goToSlider(0)"><span>基金概要</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 1 ? $style.active : '']"
						     @click="goToSlider(1)"><span>合规投资者</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 2 ? $style.active : '']"
						     @click="goToSlider(2)"><span>产品特点</span></div>
						<div :class="[$style.tabNavItem, currentSlider == 3 ? $style.active : '']"
						     @click="goToSlider(3)"><span>投资风险</span></div>
					</div>
				</div>
			</div>
			<div :class="$style.tabContent">
				<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="foundationSwiper"
				        class="foundation-slider">
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">信贷基金 - 基金概要</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation-1.jpg">
								<p>Gleich信贷基金主要投资住宅、工业及商业地产抵押贷款，主要的收入来源为借贷者所付利息。借贷者为各类房产开发商，及拥有物业的商业公司。作为投资者作为地产物业的第一抵押权方，确保资金的安全性。相比银行存款，投资者会获得更高的利息收入。</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">信贷基金 - 基金概要</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation-1.jpg">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   </p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">信贷基金 - 基金概要</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation-1.jpg">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   </p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide :style="{width: swiperContentWidth + 'px'}">
						<div :class="$style.swiperContent">
							<span :class="$style.subtitle">信贷基金 - 基金概要</span>
							<span :class="$style.dotLine"></span>
							<div :class="$style.content">
								<img src="~asset/image/foundation-1.jpg">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   </p>
							</div>
						</div>
					</swiper-slide>
					<div :class="$style.foundationPagination" class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

