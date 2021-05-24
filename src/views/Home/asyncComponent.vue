<template>
  <div>
    <h4>这个是一个异步加载数据</h4>
    <p>用户名：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  async setup() {
    const fetchUser = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ name: "Carlo", age: "20" });
          //reject("获取信息失败！");
        }, 3000);
      });
    };

    const user = await fetchUser();
    return { user };
  },
});
</script>
