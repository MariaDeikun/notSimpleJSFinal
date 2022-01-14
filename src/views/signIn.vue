<template>
  <div class="wrapper">
    <div class="block">
      <form @submit.prevent="onSubmit()">
        <h2>log in</h2>
        <input
          class="email"
          v-model="email"
          type="email"
          @blur="isEmailTouched = true"
          :class="{ error: isEmailError }"
          placeholder="Email"
        />
        <div v-if="isEmailError">Wrong filled field</div>
        <input
          class="password"
          v-model="password"
          type="password"
          @blur="isPasswordTouched = true"
          :class="{ error: isPasswordError }"
          placeholder="Password"
        />
        <div v-if="isPasswordError">Wrong filled field</div>

        <button
          :disabled="!isEmailValid || !isPasswordValid"
          type="submit"
          @click="login"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const emailCheckRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default {
  data() {
    return {
      email: null,
      password: null,
      isEmailTouched: false,
      isPasswordTouched: false,
    };
  },

  computed: {
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },

    isEmailError() {
      return !this.isEmailValid && this.isEmailTouched;
    },
    isPasswordValid() {
      return this.password;
    },
    isPasswordError() {
      return !this.isPasswordValid && this.isPasswordTouched;
    },
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      console.log(user);
      alert("you are signed up");
    },
    login: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
  },
};
</script>



<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(148, 148, 148);

  .block {
    padding: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    form {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
      border: 2px solid black;
      background: #fff;
      width: 30%;
      padding: 4rem;
      flex-direction: column;
      h2 {
        margin: 0;
        background-color: black;
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 300;
        font-size: 30px;
        text-transform: uppercase;
        flex: auto;
        margin-bottom: 1.5rem;
      }
      .email {
        box-sizing: border-box;
        flex: auto;
        padding: 1rem;
        margin-bottom: 1.5rem;
        font-weight: 300;
        font-size: 16px;

        width: 100%;
        text-align: left;
      }
      .password {
        box-sizing: border-box;
        flex: auto;
        padding: 1rem;
        margin-bottom: 1.5rem;
        font-weight: 300;
        font-size: 16px;

        width: 100%;
        text-align: left;
      }
      button {
        flex: auto;
        border: none;
        background: none;
        text-align: center;
        border: 1px solid black;
        padding: 1rem 4rem;

        font-size: 16px;
        text-transform: uppercase;
        color: #000;
        &:hover {
          background-color: rgb(0, 117, 20);
          color: white;
        }
      }
    }
  }
}
</style>
