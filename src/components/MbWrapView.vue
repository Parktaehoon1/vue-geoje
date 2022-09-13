<template>

  <div class="mb-dim" @click="mobileReset"></div>

  <div class="mb-wrap">


    <div class="mb-wrap-top clearfix">
      <a href="#">로그인</a>
      <a href="#">회원가입</a>
    </div>
    <div class="mb-wrap-main">
      <ul class="mb-menu">

        <li v-for="(item, index) in menuData" :key="index">
          <a :href="item.link" class="mb-mainmenu" v-html="item.title"></a>
          <ul class="mb-submenu">
            <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
              <a :href="subitem.sublink" v-html="subitem.subtitle"></a>
            </li>
          </ul>
        </li>

        <!-- <li>
          <a href="#" class="mb-mainmenu">청년센터</a>
          <ul class="mb-submenu">
            <li><a href="#">청년센터소개</a></li>
            <li><a href="#">프로그램안내</a></li>
            <li><a href="#">보유도서목록</a></li>
            <li><a href="#">공간안내</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">청년정책</a>
          <ul class="mb-submenu">
            <li><a href="#">정책소식</a></li>
            <li><a href="#">분야별 청년정책</a></li>
            <li><a href="#">청년네트워크 소개</a></li>
            <li><a href="#">청년주요활동</a></li>
            <li><a href="#">청년정책 검색</a></li>
            <li><a href="#">아카이브</a></li>
            <li><a href="#">청춘다락</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">청년일자리</a>
          <ul class="mb-submenu">
            <li><a href="#">일자리정책</a></li>
            <li><a href="#">구인 및 구직 등록</a></li>
            <li><a href="#">채용정보</a></li>
            <li><a href="#">교육훈련</a></li>
            <li><a href="#">창업정보</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">사업소개</a>
          <ul class="mb-submenu">
            <li><a href="#">사업안내</a></li>
            <li><a href="#">사업일정표</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">공간예약</a>
          <ul class="mb-submenu">
            <li><a href="#">공간신청</a></li>
            <li><a href="#">공간신청 현황</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">커뮤니티</a>
          <ul class="mb-submenu">
            <li><a href="#">이룸소식</a></li>
            <li><a href="#">자유게시판</a></li>
            <li><a href="#">활동갤러리</a></li>
            <li><a href="#">청년뉴스</a></li>
            <li><a href="#">동영상자료</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mb-mainmenu">청년창업공간(내꿈공간)</a>
          <ul class="mb-submenu">
            <li><a href="#">소개</a></li>
          </ul>
        </li> -->
      </ul>
    </div>



  </div>

</template>

<script>
  import $ from 'jquery';
  import {
    useStore
  } from 'vuex';
  import {
    computed,
    onUpdated
  } from 'vue';
  export default {
    setup() {
      const store = useStore();
      const menuData = computed(() => store.getters.getMenuList);
      const mobileReset = () => {
        $('.mb-bt').removeClass('mb-bt-open');
        $('.mb-dim').removeClass('mb-dim-open');
        $('.mb-wrap').removeClass('mb-wrap-open');
        $('.mb-menu > li').height(60);
        $('.mb-mainmenu').removeClass('mb-mainmenu-open')
      }
      // store.dispatch('fetchMenuData');
      onUpdated(() => {
        $('.mb-bt').click(function (e) {
          e.preventDefault();
          $(this).toggleClass('mb-bt-open');
          $('.mb-dim').toggleClass('mb-dim-open');
          $('.mb-wrap').toggleClass('mb-wrap-open');
        });

        // 모바일 메뉴 펼치기 기능
        // 1. 모바일 메뉴 저장
        let mb_mainmenu = $('.mb-mainmenu');
        // 2. 모바일 서브메뉴 저장
        let mb_submenu = $('.mb-submenu');
        // 3. 펼쳐질 서브메뉴의 높이값
        let mb_submenu_high = [];
        // 높이값 계산을 실행
        $.each(mb_submenu, function (index) {
          // 각각의 .mb-submenu 로 가서
          // li 의 개수를 파악한다.
          let count = $(this).find('li').length;
          // 최종 결과를 저장(56*count)
          mb_submenu_high[index] = (56 * count);
        });

        // 최종 결과
        let mb_li = $('.mb-menu > li');
        $.each(mb_mainmenu, function (index) {
          $(this).click(function (e) {
            //  웹브라우저 갱신 막기
            e.preventDefault();

            // mb-mainmenu를 toggleClass 한다.
            $(this).toggleClass('mb-mainmenu-open');
            // 만약에 mb-mainmenu-open 이 있으면 펼치고 없으면 닫고
            let active = $(this).hasClass('mb-mainmenu-open')
            if (active) {
              let temp = mb_submenu_high[index];
              mb_li.eq(index).height(temp + 60);
            } else {
              mb_li.eq(index).height(60);
            }

          });
        });
        // 모바일 메뉴 배경클릭시 사라짐.
        let mb_dim = $('.mb-dim');
        mb_dim.click(function () {
          mobileReset();
        });
        $(window).resize(function () {
          // 화면 너비를 계산한다.
          let temp = $(window).width();
          // 1000 px 보다 크면
          if (temp > 1000) {
            // 모바일 버튼 기능 초기화
            mobileReset();
          }
        });
      })
      return {
        menuData,
      }
    }
  }
</script>

<style scoped>
  .mb-wrap {
    position: fixed;
    right: -400px;
    top: 0;
    display: block;
    width: 400px;
    height: 100%;
    padding: 0 20px;

    background-color: #fff;
    z-index: 99998;
    transition: all 0.3s;
  }

  .mb-wrap-open {
    right: 0;
  }

  .mb-wrap-top {
    position: relative;
    display: block;
    padding-top: 70px;
    padding-bottom: 15px;
  }

  .mb-wrap-top a {
    position: relative;
    display: block;
    float: left;
    font-size: 13px;
    color: #999;
    border: 2px solid #eee;
    line-height: 35px;
    margin-right: 8px;
    padding: 0 20px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.0);
    transition: background-color 0.5s;
  }

  .mb-wrap-top a:hover {
    background-color: rgba(0, 0, 0, 0.1);

  }

  .mb-wrap-main {
    position: relative;
    display: block;
    width: 100%;
    height: calc(100% - 124px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    background-color: #f5f5f5;

    width: 100%;
    height: 60px;
    overflow: hidden;
    transition: all 0.5s;
  }

  .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 18px;
    color: #444;
    line-height: 60px;
    background-color: #fff;
  }

  .mb-mainmenu-open {
    color: #2578de;
  }

  .mb-submenu {
    position: relative;
    display: block;
    padding: 0 20px;
  }

  .mb-submenu li {
    position: relative;
    display: block;
    border-bottom: 1px solid #e9e9e9;
  }

  .mb-submenu li:last-child {
    border-bottom: 0;
  }

  .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
    line-height: 56px;
  }

  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
    z-index: 99997;
  }

  .mb-dim-open {
    display: block;
  }
</style>