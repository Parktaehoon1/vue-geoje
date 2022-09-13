<template>
	<div>
		<!-- 안내창 -->
		<!-- <div class="modal-wrap">
		<div class="modal-main">
			<img src="images/free-icon-warning-752755.png" alt="경고아이콘" class="modal-warning">
			<h1>거제청년센터이룸 클론코딩</h1>
			<p class="modal-desc">
				이 사이트는 <span class="checkfont">스터디용</span>으로 제작되었으며 리소스는 <span class="checkfont">원저작자</span>에게 있습니다.
				<br>
				해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다.
			</p>
			<h2>수정사항</h2>
			<p class="modal-list">
				1. json타입으로 데이터 연동하였습니다..<br>
				2. 파비콘 제작 후 적용 하였습니다.<br>
				3. Swiper 부분 반응형으로 추가 수정 하였습니다.<br>
			</p>
			<p class="modal-chrome">본 사이트는 <span class="checkfont">Chrome</span> 에 최적화되어 있습니다.</p>
			<button class="modal-close">
				CLOSE
			</button>
		</div>
	</div> -->

		<!-- 더보기 메뉴 -->
		<more-wrap-view></more-wrap-view>

		<!-- 모바일 버튼 -->
		<mb-bt></mb-bt>

		<!-- 모바일 메뉴 내용 -->
		<mb-wrap></mb-wrap>

		<div class="wrap">
			<!-- 상단 영역 -->
			<header-view></header-view>
			<!-- 비주얼 영역 -->
			<visual-view></visual-view>
			<!-- 퀵메뉴 영역 -->
			<quick-view></quick-view>
			<!-- 커뮤니티 영역-->
			<comm-view></comm-view>
			<!-- 갤러리 영역-->
			<gallery-view></gallery-view>
			<!-- 배너 영역-->
			<banner-view></banner-view>
			<!-- 하단 영역-->
			<footer-view></footer-view>
		</div>

	</div>

</template>

<script>
	import MoreWrapView from '@/components/MoreWrapView.vue';
	import MbBt from '@/components/MbBt.vue';
	import MbWrap from '@/components/MbWrapView.vue';
	import HeaderView from '@/components/HeaderView.vue';
	import VisualView from '@/components/VisualView.vue';
	import QuickView from '@/components/QuickView.vue';
	import CommView from '@/components/CommView.vue';
	import GalleryView from '@/components/GalleryView.vue';
	import BannerView from '@/components/BannerView.vue';
	import FooterView from '@/components/FooterView.vue';

	import {
		useStore
	} from 'vuex';
	export default {
		name: 'App',
		components: {
			MoreWrapView,
			MbBt,
			MbWrap,
			HeaderView,
			VisualView,
			QuickView,
			CommView,
			GalleryView,
			BannerView,
			FooterView
		},
		setup() {
			const store = useStore();
			store.dispatch('fetchMenuData');
			store.dispatch('fetchGalleryData');
			store.dispatch('fetchNewsData');
			store.dispatch('fetchInfoData');
			store.dispatch('fetchVisualData');
			store.dispatch('fetchBannerData');
			store.dispatch('fetchMovieData');
			return {

			}
		}
	}
</script>

<style>
	@charset 'utf-8';
	@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
	@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
	@import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	@font-face {
		font-family: 'GmarketSansLight';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'GmarketSansMedium';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'GmarketSansBold';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	#app {}

	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
		outline-style: none;
	}

	ul,
	li {
		list-style: none;
	}

	img {
		vertical-align: middle;
		border: 0;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	/* scrollbar */
	::-webkit-scrollbar {
		width: 8px;
		height: 5px;
		background-color: #f7f7f7;
		-moz-border-radius: 0px;
		-webkit-border-radius: 0px;
		border-radius: 0px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #aaa;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		border-radius: 2px;
	}

	/* 위쪽은 기본작업입니다. */

	html {
		font-size: 16px;
	}

	body {
		font-family: 'Open Sans', GmarketSansMedium, GmarketSansLight, GmarketSansBold, '맑은 고딕', '돋움', Dotum, '굴림', Gulim, Sans-serif;
		font-size: 12px;
		font-size: 15px;
		line-height: 1.5;
		letter-spacing: -0.6px;
		min-width: 375px;
	}

	/* 공통요소(재사용할 내용) */

	.clearfix::after {
		content: '';
		position: relative;
		display: block;
		width: 100%;
		clear: both;
	}

	.inner {
		position: relative;
		display: block;
		margin: 0 auto;
		max-width: 1400px;
	}

	/* 안내창 */
	.modal-wrap {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		z-index: 99999;
	}

	.modal-warning {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		height: 200px;
		color: red;
		opacity: 0.3;
		z-index: -9;
	}

	.modal-main {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 400px;
		background-color: #fff;
		border-radius: 8px;
		padding: 10px;
		box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 70%);
		border: 5px solid rgba(0, 0, 0, 0.1);
	}

	.modal-main h1 {
		font-size: 30px;
		font-weight: 600;
		text-align: center;
		color: #000;
		padding: 10px 0;
	}

	.modal-desc {
		text-align: center;
		font-size: 16px;
		font-weight: 300;
		color: #111;
		line-height: 1.8;
	}

	.modal-main b {
		font-weight: 600;
		text-decoration: underline;
		color: #ed1c24;
	}

	.modal-main strong {
		font-weight: 600;
		text-decoration: underline;
		color: #ed1c24;
	}

	.modal-main h2 {
		font-size: 20px;
		font-weight: 600;
		text-align: center;
		color: #000;
		padding: 10px 0;
	}

	.modal-main .modal-list {
		text-align: left;
		padding: 0 80px;
	}

	.modal-chrome {
		position: absolute;
		left: 50%;
		top: 73%;
		display: block;
		width: 100%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-size: 15px;
		font-weight: 500;
		color: #111;
		line-height: 1.8;
	}

	.modal-close {
		position: absolute;
		left: 50%;
		bottom: 40px;
		transform: translateX(-50%);
		display: block;
		width: 200px;
		padding: 5px 10px;
		border: 1px solid #000;
		cursor: pointer;
		font-size: 25px;
		background: transparent;
		color: #000;
		border-radius: 5px;
		transition: all 0.5s;
	}

	.modal-close:hover {
		color: red;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3)
	}

	.modal-warning {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		height: 200px;
		color: red;
		opacity: 0.3;
		z-index: -9;
	}

	.checkfont {
		font-weight: 600;
		text-decoration: underline;
		color: #ed1c24;
	}

	.wrap {
		position: relative;
		display: block;
	}
</style>