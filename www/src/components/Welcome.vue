<template>
  <div class="welcome text-dark">
    <div class="pb-5">
      <topBar></topBar>

      <div class="welcome-message container">
        <h1 class="text-center m-3">Welcome!</h1>
        <p>Use this productivity app to organize your projects, todo-lists, and collaborators.</p>
        <ul>
          <li>Register/sign-in to access your private account</li>
          <li>Create a 'Board' dedicated to each of your projects</li>
          <li>Within a Board, create Lists and post Tasks and Comments</li>
          <li>Rearrange Tasks in any order or swap them from List to List</li>
          <li>Invite new team-members to collaborate on shared Boards</li>
          <li>Don't worry: Your own contributions cannot be deleted by a collaborator</li>
        </ul>
      </div>

      <errorMsg v-if="authError.error">{{authError.message}}</errorMsg>

      <signIn v-on:showRegisterForm="showSignIn = false" v-if="showSignIn"></signIn>

      <register v-on:showSignInForm="showSignIn = true" v-if="!showSignIn"></register>
    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  import ErrorMsg from './ErrorMsg'
  import SignIn from './SignIn'
  import Register from './Register'
  export default {
    name: 'Welcome',
    components: {
      topBar: TopBar,
      errorMsg: ErrorMsg,
      signIn: SignIn,
      register: Register
    },
    data() {
      return {
        showSignIn: true
      }
    },
    computed: {
      authError() {
        return this.$store.state.authError
      }
    }
  }
</script>

<style scoped>
  .welcome-message {
    max-width: 600px;
  }

  @media (min-width: 576px) {
    .welcome-message {
      width: 75%;
    }
  }
</style>