<style src="./NewsItem.scss" module lang="scss"></style>
<script src="./NewsItem.js"></script>

<template>
	<div>
		<div :class="$style.thumnail" :style="{backgroundImage:`url('${$versionRoot}image/news/1.jpg')`}">
			<div :class="$style.title"><p>{{news.title}}</p></div>
		</div>
		<div :class="$style.box">
			<p :class="$style.description">{{news.description[currentLanguage.urlPrefix] }}</p>
			<span>.......</span>
			<a :class="$style.button">>></a>
		</div>
	</div>
</template>

