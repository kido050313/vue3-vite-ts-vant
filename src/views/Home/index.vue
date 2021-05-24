<template>
    <!--   <Suspense>
        <template #default>
            <async-component></async-component>
        </template>
        <template #fallback>
            <div>
                Loading...
            </div>
        </template>
  </Suspense> -->
</template>

<script lang="ts">
import { reactive } from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex';
// import AsyncComponent from './asyncComponent.vue';
import { article } from '@/api/index';
export default {
    components: {
        AsyncComponent
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const goLogin = () => {
            router.push("/login")
        };
        const add = () => {
            store.commit("addNum");
            state.num = store.state.num;
            state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
        };

        // article().then((res: any) => {
        //     console.log(res)
        // })

        const state = reactive({
            name: 'kido',
            num: 10,
            color: "#ccc"
        });
    }
}

</script>
<style>
    .text {
        color: v-bind("state.color");
    }
    .login {
        width: 100%;
        height: 100px;
        line-height: 100px;
        background-color: pink;
    }
</style>