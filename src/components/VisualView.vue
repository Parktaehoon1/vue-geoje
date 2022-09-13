<template>
  <section class="visual">
    <!-- Swiper  -->

    <Swiper :modules="modules" :autoplay="{
            delay: 1000,
            disableOnIteraction: false
            }" :loop="true" :pagination="{
              el: '.sw-visual-pg',
              clickable: 'true'
            }" @swiper="visualSlide" :effect="'fade'" class="sw-visual">
      <!-- @swiper는 밑에서 visualSlide 함수로 해당 swiper의 값을 알기위해서 들어간 것 -->

      <SwiperSlide class="swiper-slide" v-for="(item, index) in VisualData" :key="index">
        <a :href="item.link"
           :style="{
            backgroundImage:`url(${ resW ? item.imgurl : item.resimgurl })`,
            backgroundSize:'cover', 
            backgroundPosition: 'center'}"

           :data-bg-mb="item.resimgurl"
           :data-bt="item.imgurl"
            >

        </a>
        
      </SwiperSlide>
<!-- 퍼블릭으로 url 을 옮기게 되면 우선 json 파일 경로를 ./images/이름 으로 바꾸고 background:'url:{{}}' 로 가자 -->
      <div class="sw-visual-control clearfix">
        <div class="sw-visual-pg"></div>
        <button class="sw-visual-bt">
          <span class="material-icons-outlined" @click="controlSlide">
            {{slideState}}
          </span>
        </button>
      </div>

    </Swiper>

  </section>
</template>

<script>
  import {
    ref,computed,onMounted
  } from 'vue';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Autoplay,
    Pagination,
    EffectFade
  } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import "swiper/css/effect-fade";

  import {
    useStore
  } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      // swiper 가 객체라서 값이 없는 null 을 넣음. '' 로 들어가면 문자열이 출력될것
      const slide = ref(null);
      const visualSlide = (swiper) => {
        console.log("swiper옵션확인", swiper)
        slide.value = swiper

        slide.value.slideTo(1);
      }
      const slideState = ref('pause');
      const controlSlide = () => {
        if (slide.value.autoplay.running) {
          slide.value.autoplay.stop();
          slideState.value = 'play_arrow';
        } else {
          slide.value.autoplay.start();
          slideState.value = 'pause';
        }
      }
      const store = useStore();
      const VisualData = computed(() => store.getters.getVisualList);

      const resW = ref(true);
      onMounted( () => {
        // resW 체크 하는 메서드 1400
        const checkWin = () => {
          // window 너비 체크
          let w = window.innerWidth;
          if(w <= 1400) {
            resW.value = false;            
          }else{
            resW.value = true;            
          }
          // console.log(w)
          // console.log(resW.value)
        }
        window.addEventListener('resize', checkWin);
        // resize는 실시간으로 체크함
        // $(window).on('resize', function(){})
        // $(window).resize(function(){})

        // 최초실행
        checkWin()
      })


      return {
        modules: [Autoplay, Pagination, EffectFade],
        visualSlide,
        slideState,
        controlSlide,
        VisualData,
        resW
      }
    }
  }
</script>

<style>
  .visual {
    position: relative;
    display: block;
    height: 477px;
  }

  .sw-visual {
    width: 100%;
    height: 100%;
  }

  .sw-visual a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .vs-1 {
    background: url('@/assets/images/banner_1_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .vs-2 {
    background: url('@/assets/images/banner_2_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .vs-3 {
    background: url('@/assets/images/banner_4_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;

    display: block;
    z-index: 9;
  }

  .sw-visual-pg .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 0.5;
    margin-right: 10px;
  }

  .sw-visual-pg {
    display: inline-block;
    width: auto !important;
  }

  .sw-visual-pg .swiper-pagination-bullet-active {
    opacity: 1.0;
  }

  .sw-visual-bt {
    position: relative;
    display: inline-block;
    width: 23px;
    height: 22px;
    /* float: left; */
    margin-left: 5px;
    background: transparent;

    /* background: url('@/assets/images/pause.png') no-repeat center; */
    cursor: pointer;
    border: 0;

    font-family: 'Material Icons';
    color: #fff;
    font-size: 10px;
    vertical-align: bottom;
  }

  .sw-visual-bt-play {
    background: url('@/assets/images/play1.png') no-repeat center;
  }

  /* visual PC 버전 */
  /* visual 반응형 버전 */
  @media all and (max-width: 1400px) {
    .visual {
      height: 50vw;
    }

  }
</style>