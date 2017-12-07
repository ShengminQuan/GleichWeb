<style src="./AboutusTab.scss" module lang="scss"></style>
<script src="./AboutusTab.js"></script>

<template>
	<div :class="$style.wrap">
		<div class="main-container">
			<div :class="$style.tabNav">
				<div :class="$style.navActiveBackground" :style="{left: activeItem*50 + '%'}"></div>
				<div :class="[$style.navItem, activeItem == 0 ? $style.navItemActive : '']" @click="switchTab(0)">
					<span>{{ $t('about_us_tab.nav_1') }}</span>
				</div>
				<!--<div :class="[$style.navItem, activeItem == 1 ? $style.navItemActive : '']" @click="switchTab(1)">-->
					<!--<span>{{ $t('about_us_tab.nav_2') }}</span>-->
				<!--</div>-->
				<div :class="[$style.navItem, activeItem == 1 ? $style.navItemActive : '']" @click="switchTab(1)">
					<span>{{ $t('about_us_tab.nav_3') }}</span>
				</div>
			</div>
			<div :class="$style.tabContent" class="flex-center">
				<div v-if="activeItem == 0" :class="[$style.tabItem, $style.about]">
					<div :class="$style.aboutNav" class="clearfix">
						<div :class="[$style.aboutNavItem, currentAboutItem == 0 ? $style.active : '' ]"
						     @click="switchAboutTab(0)">
							<img src="~asset/image/icon-professional.png">
							{{ $t('about_us_tab.item_1.name_1') }}
						</div>
						<div :class="[$style.aboutNavItem, currentAboutItem == 1 ? $style.active  : '' ]"
						     @click="switchAboutTab(1)">
							<img src="~asset/image/icon-integrity.png">
							{{ $t('about_us_tab.item_1.name_2') }}
						</div>
						<div :class="[$style.aboutNavItem, currentAboutItem == 2 ? $style.active  : '' ]"
						     @click="switchAboutTab(2)">
							<img src="~asset/image/icon-relationship.png">
							{{ $t('about_us_tab.item_1.name_3') }}
						</div>
						<div :class="$style.aboutNavBar">
							<i :class="currentAboutItem == 0 ? $style.active  : ''"
							   @click="switchAboutTab(0)"></i>
							<i :class="currentAboutItem == 1? $style.active  : ''"
							   @click="switchAboutTab(1)"></i>
							<i :class="currentAboutItem == 2 ? $style.active  : ''"
							   @click="switchAboutTab(2)"></i>
						</div>
					</div>
					<div :class="$style.aboutContent">
						<p v-if="currentAboutItem == 0" :class="$style.aboutContentText"
						   v-html="$t('about_us_tab.item_1.desc_1')">
						</p>
						<p v-if="currentAboutItem == 1" :class="$style.aboutContentText"
						   v-html="$t('about_us_tab.item_1.desc_2')">
						</p>
						<p v-if="currentAboutItem == 2" :class="$style.aboutContentText"
						   v-html="$t('about_us_tab.item_1.desc_3')">
						</p>
					</div>
				</div>

				<!--<div v-if="activeItem == 1" :class="[$style.tabItem, $style.team]">-->
					<!--<MemberTab />-->
				<!--</div>-->

				<div v-if="activeItem == 1"  :class="[$style.tabItem, $style.rule]" v-html="$t('about_us_tab.item_3')">

				</div>
			</div>
		</div>
	</div>
</template>

