<script>
  import { Sveltik, Form, Field, ErrorMessage } from 'sveltik'

  import logo from '../../assets/logo.svg'
  import logoLine from '../../assets/logo-line.svg'
  import emailIcon from '../../assets/email-icon.svg'
  import passwordIcon from '../../assets/password-icon.svg'
  import { ALT_IMG } from '../../../../common/constants/constants'
  import { AUTH_LABELS } from '../../constants/constants'
  import { AuthService } from '../../../../common/services/auth-service'

  let initialContactValues = { username: '', password: '' }

  let validate = (values) => {
    const errors = {}
    if (!values.username) errors.username = 'Required'
    else if (values.username.length < 3)
      errors.username = 'Invalid username it must contain at least 3 characters'

    if (!values.password) errors.password = 'Required'
    else if (values.password.length < 3) errors.password = 'Invalid password it must contain at least 3 characters'

    return errors
  }

  let onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false)
    const response = await AuthService.doLogin(values)
    console.log(response)
  }
</script>

<div class='screen'>
  <div class='containerLogo'>
    <div class='logoContent'>
      <img alt={ALT_IMG.LOGO_ICON} class='logo' src={logo}>
      <img alt={ALT_IMG.LOGO_ICON} class='logoLine' src={logoLine}>
    </div>

  </div>
  <div class='containerContent'>
    <Sveltik initialValues={initialContactValues} let:errors let:isSubmitting {onSubmit} {validate}>
      <Form autocomplete='off'>
        <div class='loginForm'>
          <h1 class='screenTitle'>{AUTH_LABELS.LOGIN}</h1>
          <div class='fieldParent'>
            <label class='labelField' for='username'>{AUTH_LABELS.USER_NAME}</label>
            <div class='authInput'>
              <img alt={ALT_IMG.EMAIL_ICON} class='loginIcon' src={emailIcon}>
              <Field
                as='input'
                id='username'
                name='username'
                placeholder={AUTH_LABELS.USER_NAME}
                type='text'
              />
            </div>

            <ErrorMessage as='div' class='errorMessage' name='username' />
          </div>
          <div class='fieldParent'>
            <label class='labelField' for='password'>{AUTH_LABELS.PASSWORD}</label>
            <div class='authInput'>
              <img alt={ALT_IMG.EMAIL_ICON} class='loginIcon' src={passwordIcon}>
              <Field
                as='input'
                id='password'
                name='password'
                placeholder={AUTH_LABELS.PASSWORD}
                type='password'
              />
            </div>

            <ErrorMessage as='div' class='errorMessage' name='password' />
          </div>
          <button
            class='button'
            disabled={isSubmitting}
            type='submit'
          >
            {AUTH_LABELS.LOGIN}
          </button>
        </div>

      </Form>
    </Sveltik>
  </div>
</div>

<style lang='scss'>
  @import "src/common/style/responsive";

  .screen {
    display: flex;
    column-gap: 50px;
    position: relative;
    min-height: 100vh;
    @include adaptive-value('padding', 50, 20, 0);
  }

  .screenTitle {
    text-align: center;
    margin-bottom: 40px;
  }

  .inputField {
    display: none !important;
  }

  .logo {
    @include adaptive-value('width', 200, 100, 0);
    margin: 0 auto;
  }

  .labelField {
    color: var(--color-white);
  }

  .logoLine {
    width: 380px;
    @include adaptive-value('width', 380, 280, 0);
  }

  .logoContent {
    display: flex;
    align-items: center;
    row-gap: 10px;
    flex-direction: column;
  }


  .containerLogo,
  .containerContent {
    flex: 5;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }

  .loginIcon {
    width: 20px;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    max-width: 400px;
    margin: 0 auto;
  }

  .button {
    width: 100%;
    height: 40px;
    padding: 0;
    border-radius: 8px;
    margin: 25px 0 0 0;
    @include adaptive-value('font-size', 16, 14, 0);
  }

  .containerLogo {
    @include device(smallOnly) {
      display: none;
    }
  }

  .contactForm {
    display: flex;
    max-width: 700px;
  }
</style>