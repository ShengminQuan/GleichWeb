<style src="./ContactMap.scss" module lang="scss"></style>
<script src="./ContactMap.js"></script>

<template>
	<div :class="$style.mapWrapper">
		<baidu-map :class="$style.map" :center="{lng: 151.25829, lat: -33.889387}" :zoom="15">
			<bm-marker :position="{lng: 151.25829, lat: -33.889387}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
			</bm-marker>
		</baidu-map>
		<gmap-map
			id="google-map"
			:class="[$style.map, $style.googleMap, googleEnabled ? $style.show : '']"
			:center="{lat: -33.872433, lng: 151.207652}"
			:zoom="15"
			:options="{
		      disableDefaultUI: true
	        }"
		>
			<gmap-marker
				:position="{lat: -33.872433, lng: 151.207652}"
			></gmap-marker>
		</gmap-map>
	</div>
</template>

