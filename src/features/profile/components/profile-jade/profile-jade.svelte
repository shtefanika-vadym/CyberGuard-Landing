<script>
  import Toggle from 'svelte-toggle'
</script>

<div>
  <h1 class="profileNotification">Change Jade bot settings</h1>
  <div class="profileNotificationToggle">
    <div>
      <p class="profileNotificationTitle">Keep an eye on Facebook</p>
      <p class="profileNotificationTitle subTitle">
        Receive notification about news threat when you<br /> navigate on facebook
      </p>
    </div>
    <div>
      <Toggle hideLabel toggledColor="#45EDF2" />
    </div>
  </div>
</div>

<style lang="scss">
  .profileNotification {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    color: #ffffff;
    padding: 0 0 28px 0;
  }
  .profileNotificationTitle {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #ffffff;
  }
  .subTitle {
    font-size: 14px;
    color: #b7b7b7;
    line-height: 22px;
  }

  .profileNotificationToggle {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
