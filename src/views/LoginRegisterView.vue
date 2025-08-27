<script>
export default{
    data(){
        return{
            login:false
        }
    }
}
</script>
<template>
    <div v-if="login" class="auth-wrap">
    <form class="card" @submit.prevent>
      <h1>Login</h1>

      <!-- Email -->
      <label class="label" for="email">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        required
      />

      <!-- Password -->
      <label class="label" for="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="••••••••"
        autocomplete="current-password"
        required
      />

      <p class="aux">
        <router-link to="/forgot-password">Forgot password?</router-link>
      </p>

      <!-- Submit -->
      <button class="btn" type="submit">Login</button>

      <p class="foot">
        Don’t have an account?
        <router-link :to="$route.fullPath" @click="login= !login">Sign up here</router-link>
      </p>
    </form>
  </div>
  <div v-else class="signup-wrap">
    <form class="card" @submit.prevent>
      <h1>Create Account</h1>

      <!-- Email -->
      <label class="label" for="email">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        required
      />

      <!-- Password -->
      <label class="label" for="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="••••••••"
        autocomplete="new-password"
        required
      />

      <!-- Confirm Password -->
      <label class="label" for="confirm">Confirm Password:</label>
      <input
        id="confirm"
        type="password"
        placeholder="••••••••"
        autocomplete="new-password"
        required
      />

      <!-- Terms -->
      <label class="terms">
        <input type="checkbox" required />
        <span>
          I agree that I have read the
          <a href="#" target="_blank" rel="noopener">Terms &amp; Conditions</a>
        </span>
      </label>

      <!-- Submit -->
      <button class="btn" type="submit">
        Sign up
      </button>

      <p class="foot">
        Already have an account?
        <router-link :to="$route.fullPath" @click="login = !login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<style scoped>
.signup-wrap, .auth-wrap {
  display: grid;
  place-items: center;
  min-height:65vh ; /* leave space for navbar */
  padding: 2rem 1rem;
}

.card {
  width: 100%;
  max-width: 540px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.label {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  float: left;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-top: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
}

.terms {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.2rem 0;
  font-size: 0.9rem;
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: #5a35f3;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: 1s;
}

.btn:hover {
  background: #000;
}

.foot {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}
a:visited{
  color: #5a35f3
}
</style>
