<style src="./FooterComponent.scss" module lang="scss"></style>
<script src="./FooterComponent.js"></script>

<template>
	<div :class="$style.wrapper">
		<div :class="$style.container">
			<div :class="$style.half">
				<div :class="$style.list">
					<h3 v-scroll-to="'#about-us'">关于 Gleich</h3>
				</div>
				<div :class="$style.list">
					<h3 v-scroll-to="'#foundation'">信贷基金</h3>
					<p>基金概要</p>
					<p>合规投资者</p>
					<p>产品特点</p>
					<p>投资风险</p>
				</div>
			</div>
			<div :class="$style.half">
				<div :class="$style.list">
					<h3 v-scroll-to="'#business'">信贷业务</h3>
					<p>商业抵押贷款</p>
					<p>商业次级抵押贷款</p>
					<p>可转债</p>
				</div>
				<div :class="$style.list">
					<h3 v-scroll-to="'#contact-us'">联系我们</h3>
				</div>
			</div>
		</div>
		<p :class="$style.rights">Gleich all rights reserved 2017</p>
	</div>
</template>

