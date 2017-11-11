<style src="./FooterComponent.scss" module lang="scss"></style>
<script src="./FooterComponent.js"></script>

<template>
	<div :class="$style.wrapper">
		<div :class="$style.container">
			<div :class="$style.half">
				<div :class="$style.list">
					<h3 v-scroll-to="'#about-us'">{{ $t('nav.about_us') }}</h3>
				</div>
				<div :class="$style.list">
					<h3 v-scroll-to="'#foundation'">{{ $t('nav.fund') }}</h3>
					<p v-scroll-to="'#foundation'" @click="handleFoundationActiveItem(0)">{{ $t('nav.fund_1') }}</p>
					<p v-scroll-to="'#foundation'" @click="handleFoundationActiveItem(1)">{{ $t('nav.fund_2') }}</p>
					<p v-scroll-to="'#foundation'" @click="handleFoundationActiveItem(2)">{{ $t('nav.fund_3') }}</p>
					<p v-scroll-to="'#foundation'" @click="handleFoundationActiveItem(3)">{{ $t('nav.fund_4') }}</p>
				</div>
			</div>
			<div :class="$style.half">
				<div :class="$style.list">
					<h3 v-scroll-to="'#business'">{{ $t('nav.lending') }}</h3>
					<p v-scroll-to="'#business'" @click="handleBusinessActiveItem(0)">{{ $t('nav.lending_1') }}</p>
					<p v-scroll-to="'#business'" @click="handleBusinessActiveItem(1)">{{ $t('nav.lending_2') }}</p>
					<p v-scroll-to="'#business'" @click="handleBusinessActiveItem(2)">{{ $t('nav.lending_3') }}</p>
				</div>
				<div :class="$style.list">
					<h3 v-scroll-to="'#contact-us'">{{ $t('nav.contact_us') }}</h3>
				</div>
			</div>
		</div>
		<p :class="$style.rights">Gleich all rights reserved 2017</p>
	</div>
</template>

