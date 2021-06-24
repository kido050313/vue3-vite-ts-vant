<template>
  <div class="tab-wrap">
    <ul>
      <router-link
        v-for="(tab, index) in tabs"
        v-slot="{ isActive, isExactActive, href }"
        :key="index"
        :to="tab.path"
        custom
      >
        <a
          :class="[
            isActive && 'router-link-active active',
            isExactActive && 'router-link-exact-active active'
          ]"
          :href="href"
          @click="navigate"
        >
          <van-icon :name="tab.icon" :color="isActive || isExactActive ? '#1890FF' : ''" />
          <span>{{ tab.title }}</span>
        </a>
      </router-link>
      <!-- <router-link to="/">
                <van-icon name="chat-o" />
                <span>发现</span>
            </router-link>
            <router-link to="/book-self">
                <van-icon name="chat-o" />
                <span>书架</span>
            </router-link>
            <router-link to="/look" >
                <van-icon name="chat-o" />
                <span>看一看</span>
            </router-link>
            <router-link  to="/mine">
                <van-icon name="chat-o" />
                <span>我的</span>
            </router-link> -->
    </ul>
  </div>
</template>
<script lang="ts">
  import { Icon } from 'vant'
  import { useRouter } from 'vue-router'
  export default {
    components: {
      VanIcon: Icon
    },
    setup() {
      const router = useRouter()
      const tabs = [
        {
          path: '/',
          title: '发现',
          icon: 'chat-o'
        },
        {
          path: '/book-self',
          title: '书架',
          icon: 'chat-o'
        },
        {
          path: '/look',
          title: '看一看',
          icon: 'chat-o'
        },
        {
          path: '/mine',
          title: '我的',
          icon: 'chat-o'
        }
      ]

      const routeTo = (path) => {
        console.log(path)
        router.push(path)
      }

      return {
        tabs,
        routeTo
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-wrap {
    ul {
      display: flex;
      width: 100vw;
      height: 80px;
      a {
        flex: 1;
        height: 100%;
        display: flex;
        width: 100vw;
        height: 60px;
        border-top: 1px solid #dedede;
        background-color: #fff;
        a {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #333;
            &.active {
                color: #1890FF;
            }
            span {
                margin-top: 3px;
            }
        }
      }
    }
  }
</style>
