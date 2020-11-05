<template>
  <div class="menusidebar-infor-user">
    <div class="menusidebar-infor-user-content">
      <ul class="menusidebar-infor-user-center">
        <li>
          Select another shop
        </li>
        <li>Open your site</li>
        <li class="menusidebar-infor-user-center-libottom">Profile</li>

        <li>Earn more with Affiliate program</li>
        <li class="menusidebar-infor-user-center-libottom">
          Balance ($0.00)
        </li>

        <li class="menusidebar-infor-user-center-libottom">FAQs</li>

        <li class="menusidebar-infor-user-center-libottom">Select language</li>

        <li>Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {};
  },
};
</script>

<style>
.menusidebar-infor-user {
  width: 280px;
  height: 260px;

  background-color: hsla(0, 0%, 100%, 0.96);
  border-radius: 13px;
  box-shadow: 0 8px 24px 0 rgba(54, 62, 67, 0.1),
    0 16px 40px 0 rgba(54, 62, 67, 0.1);
}
.menusidebar-infor-user-content {
  padding: 0 auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.menusidebar-infor-user-center {
  margin: 3% 0;
}
.menusidebar-infor-user-center li {
  height: 28px;
  padding-bottom: 5px;
  margin: 0px 10px;
  padding: 4px 10px;
  font-size: 15px;
}
.menusidebar-infor-user-center li:hover,
.menusidebar-infor-user-center li:active {
  font-weight: 600;
  background-color: #f5f6f7;
}
.menusidebar-infor-user-center-libottom {
  border-bottom: 1px solid #8b8888;
}
</style>
