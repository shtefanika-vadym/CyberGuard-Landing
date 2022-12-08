<script>
  import Header from '../../common/layout/header/header.svelte'
  import ProfileJade from './components/profile-jade/profile-jade.svelte'
  import ProfileMain from './components/profile-main/profile-main.svelte'
  import ProfileNotification from './components/profile-notification/profile-notification.svelte'
  let activeRoute = 'profile'

  const handleNavigation = (child) => {
    activeRoute = child
  }
</script>

<div>
  <Header />
  <div class="profile">
    <div class="profileWrapper">
      <div class="profileNavigationBar">
        <p
          class={activeRoute === 'profile' && 'profileNavigationBarText'}
          on:click={() => handleNavigation('profile')}>
          Profile
        </p>
        <p
          class={activeRoute === 'notification' && 'profileNavigationBarText'}
          on:click={() => handleNavigation('notification')}>
          Notification
        </p>
        <p
          class={activeRoute === 'jade' && 'profileNavigationBarText'}
          on:click={() => handleNavigation('jade')}>
          Jade Bot
        </p>
      </div>
      <div class="profileNavigation">
        {#if activeRoute === 'profile'}
          <ProfileMain />
        {:else if activeRoute === 'notification'}
          <ProfileNotification />
        {:else if activeRoute === 'jade'}
          <ProfileJade />
        {:else}
          <ProfileMain />
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .profileNavigationBar {
    display: flex;
    gap: 42px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #b7b7b7;
    padding-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
  }

  .profileNavigationBarText {
    color: #ffffff;
  }
  .profileNavigation {
    padding: 50px 0 0 0;
  }
  .profile {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    padding-top: 80px;
  }
  .profileWrapper {
    min-width: 600px;
    max-width: 1300px;
    width: 1300px;
  }
</style>
