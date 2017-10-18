<style src="./LanguageSwitcher.scss" module lang="scss"></style>
<script src="./LanguageSwitcher.js"></script>

<template>
	<div>
		<span v-for="language in avaliableLanguage" @click="switchLanguage(language.code)" :class="[$style.language,
		{[$style.isActive]: currentLanguage.code == language.code}]">{{language.urlPrefix}}</span>
	</div>
</template>

