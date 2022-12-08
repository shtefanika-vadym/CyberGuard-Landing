<script>
  import { keycloakInstance } from '../../../../keycloak'

  let name = ''
  let email = ''
  $: {
    if (keycloakInstance.tokenParsed?.name)
      name = keycloakInstance.tokenParsed?.name
    if (keycloakInstance.tokenParsed?.email)
      email = keycloakInstance.tokenParsed?.email
  }
</script>

<div>
  <h1 class='profileMainTitle'>Change personal info</h1>
  <div class='profileMainInputWrapper'>
    <p class='profileMainInputText'>Name</p>
    <div class='profileMainInputStyle'>
      <input class='profileMainInput' name='name' type='text' value={name} />
    </div>
  </div>
  <div class='profileMainInputWrapper'>
    <p class='profileMainInputText'>Email</p>
    <div class='profileMainInputStyle'>
      <input class='profileMainInput' name='name' type='email' value={email} />
    </div>
  </div>
</div>

<style lang='scss'>
  .profileMainTitle {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    color: #ffffff;
    padding: 0 0 12px 0;
  }

  .profileMainInputStyle {
    border: 1px solid #ffffff;
    height: 40px;
    width: 399px;
    border-radius: 8px;
  }

  .profileMainInput {
    border: none;
    outline: none;
    background-color: unset;
    height: 100%;
    width: 100%;
    padding: 0 0 0 10px;
    color: #b7b7b7;
  }

  .profileMainInputWrapper {
    padding: 17px 0 0 0;
  }

  .profileMainInputText {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    color: #ffffff;
  }
</style>
