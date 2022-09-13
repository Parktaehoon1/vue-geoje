import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* {
        path:'/home', 
        name: 'Home', 
        component: HomeView (보여줄컴포넌트)
      }  */
  ]
});

// 외부로 내보내서 사용하도록 하겠다.
export default router;