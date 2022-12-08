<script>
  import userIcon from '../../assets/user.svg'
  import msgIcon from '../../assets/msg.svg'
  import { onMount } from 'svelte'
  import { TaskManagerAPI } from '../../services/dashboard-call-api'

  let contactData

  onMount(async () => {
    const res = await TaskManagerAPI.getContact()
    console.log(res.data)
    contactData = res.data
  })
</script>

<div class="messagesMain">
  <h1 class="dashboardMessagesTitle">Messagess</h1>
  <div class="boxStyle">
    {#if contactData}
      {#each contactData as element}
        <div class="dashboardMessagessBox">
          <p class="titleText">{element.subject}</p>
          <p class="contentText space">{element.message}</p>
          <div class="userWrapper">
            <img src={userIcon} alt="" />
            <p class="contentText">{element.name}</p>
          </div>
          <div class="userWrapper">
            <img src={msgIcon} alt="" />
            <p class="contentText">{element.email}</p>
          </div>
          <div>
            <button class="buttonStyle">Reply</button>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .messagesMain {
    margin: 0 0 0 20px;
  }
  .dashboardMessagesTitle {
    margin: 50px 0 20px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: var(--color-white--second);
  }

  .dashboardMessagessBox {
    position: relative;
    height: 200px;
    width: 320px;
    display: flex;
    flex-direction: column;
    background: #1f2025;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .titleText {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    padding: 23px 0 12px 23px;
  }

  .space {
    width: 274px;
    padding: 0 0 15px 23px;
  }

  .contentText {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #b7b7b7;
    margin: 0 23px 0 0;
  }

  .userWrapper {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 0 0 23px;
  }

  .buttonStyle {
    border: none;
    outline: none;
    background-color: unset;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    width: 77px;
    height: 25px;
    color: #ffffff;
    position: absolute;
    bottom: 16px;
    right: 20px;
    cursor: pointer;
  }

  .boxStyle {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
</style>
