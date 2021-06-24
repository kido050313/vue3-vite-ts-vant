<template>
    <div class="content">
        <li class="card-item" v-for="item in 3">
            <card>
                <span>首页card</span>
            </card>
        </li>
        
    </div>
    <div class="footer">
        <tab-bar />
    </div>
</template>
<script lang="ts">
import TabBar from '@/components/TabBar/index.vue';
import Card from '@/components/Card/index.vue';
export default {
    components: {
        TabBar,
        Card,
    },
    setup() {
        console.log(22323)
        // const events = 
        
    }
  }
</script>
<style lang="less" scoped>
.content {
    box-sizing: border-box;
    padding: 20px 20px 75px ;

    .card-item {
        list-style: none;
        padding-bottom: 15px;
    }
}
</style>
