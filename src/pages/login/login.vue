<template>
  <div class="all">
    <div class="box">
      <h2>登录</h2>
      <input type="text"><br>
      <input type="text">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 300px;
  padding: 20px;
  background: #fff7;
  position: relative;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  border-radius: 15px
}
.all {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, rgb(48, 21, 99), rgb(85, 99, 23));
}
.box input{
  width: 100%;
  height: 30px;
  margin: 20px 0
}
.box h2{
  color: #000;
  text-align: center
}
.box button{
  width: 100%;
  background: rgb(16, 137, 196);
  color: #fff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: none
}
</style>
