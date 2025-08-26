<template>
  <nav id="navbar">
    <div class="nav-container">
      <!-- Left side -->
      <div id="logo">
        Skill Swap
      </div>

      <!-- Right side -->
      <ul class="nav-links">
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/about">Micro lessons</router-link> |
        <router-link to="/about">Profile</router-link> |
        <router-link to="/about">Login/Register</router-link> 

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* NAV BAR STYLES */
#navbar {
  background-color: #5a35f3; /* same purple as screenshot */
  padding: 15px 30px;
}

/* Container flex */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo text */
#logo {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

/* Nav links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-links li a, a{
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight:400;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
