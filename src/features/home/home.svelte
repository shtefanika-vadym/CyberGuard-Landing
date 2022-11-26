<script lang="ts">
  import { HOME_LABELS } from './constants/constants'
  import arrowIcon from '../home/assets/arrow-up.svg'
  import FirstScreen from './components/first-screen/first-screen.svelte'
  import SecondScreen from './components/second-screen/second-screen.svelte'
  import ThirdScreen from './components/third-screen/third-screen.svelte'
  import ContactForm from './components/contact-form/contact-form.svelte'
  import { ALT_IMG } from '../../common/constants/constants'
</script>

<div class="home">
  <FirstScreen />
  <div class="screenBorder">
    <div class="content">
      <div class="details">
        <h2 class="screenTitle">{HOME_LABELS.JOINT_THE_WAITLIST}</h2>
        <p class="description">{HOME_LABELS.WAITLIST_DESCRIPTION}</p>
      </div>
      <div class="details subscribe">
        <input type='text' placeholder='Email Address'>
        <button class='subscribeButton'>{HOME_LABELS.JOINT_THE_WAITLIST}
          <img src={arrowIcon} alt={ALT_IMG.ARROW_ICON}>
        </button>
      </div>
    </div>
  </div>
  <SecondScreen />
  <ThirdScreen />
  <div class="screenBorder" />
  <ContactForm />
</div>

<style lang="scss">
  @import "src/common/style/responsive";

  .content {
    column-gap: 50px;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    margin: 0;

    @include device(smallOnly) {
      flex-direction: column;
      text-align: center;
      row-gap: 20px;
    }
  }

  .details, .subscribe {
    width: 50%;
    @include device(smallOnly) {
      width: 100%;
    }
  }

  .screenBorder {
    @include adaptive-value('min-height', 265, 50, 0);
    background: linear-gradient(90deg, #0ACFFE 0%, #495AFF 100%);
    @include adaptive-value('padding-top', 80, 30, 0);
    @include adaptive-value('padding-left', 150, 50, 0);
    @include adaptive-value('padding-bottom', 80, 30, 0);
    @include adaptive-value('padding-right', 150, 50, 0);
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 0 0 0;
  }

  .subscribe {
    display: flex;
    @include adaptive-value('min-height', 56, 20, 0);
    justify-content: space-between;
    @include adaptive-value('border-radius', 8, 4, 0);
    background-color: var(--color-white);
    input {
      width: inherit;
      padding: 0 9px 0 9px;
      background-color: transparent;
      outline: none;
      border: none;
      font-style: normal;
      font-weight: 500;
      color: rgba(5, 10, 18, 0.6);
      line-height: 100%;
      @include adaptive-value('font-size', 16, 12, 0);
    }
  }

  .subscribeButton {
    border: none;
    cursor: pointer;
    background-color: #050A12;
    @include adaptive-value('border-radius', 8, 4, 0);
    font-style: normal;
    font-weight: 700;
    @include adaptive-value('font-size', 16, 12, 0);
    color: var(--color-white);
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    @include adaptive-value('padding', 24, 10, 0);
    white-space: nowrap;
  }
</style>
