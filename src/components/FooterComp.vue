<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- Brand -->
      <div class="brand">
        <span class="logo">⚡</span>
        <strong>Skill Swap</strong>
      </div>

      <!-- Nav -->
      <nav class="links">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/micro-lessons">Micro lessons</router-link>
        <router-link :to="{ name: 'profile', query: { updateProfile: 'false'} }">Badges</router-link>
        <router-link :to="{ name: 'profile', query: { updateProfile: 'true'} }">Profile</router-link>
      </nav>

      <!-- Actions / social -->
      <div class="right">
        <a href="#" aria-label="Twitter" class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="twitter"></a>
        <a href="#" aria-label="YouTube" class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube"></a>
        <a href="#" aria-label="GitHub" class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"></a>
      </div>
    </div>

    <div class="legal">
      <span>© {{ new Date().getFullYear() }} Skill Swap. All rights reserved.</span>
      <span class="sep">•</span>
      <router-link :to="$route.fullPath">Terms</router-link>
      <span class="sep">•</span>
      <router-link :to="$route.fullPath">Privacy</router-link>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 32px;
  border-top: 1px solid #eee;
  background: #fafafa;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
}
.logo { filter: drop-shadow(0 1px 2px rgba(0,0,0,.2)); }

.links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.links a {
  text-decoration: none;
  color: #222;
  padding: 6px 10px;
  border-radius: 8px;
  color: #5a35f3
}
a:visited{
      color: #5a35f3;
}
.links a:hover { background: #eee; }

.right { display: flex; gap: 10px; }
.icon {
  display: inline-flex;
  width: 32px; height: 32px;
  align-items: center; justify-content: center;
  border-radius: 8px; background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.12);
}
.icon:hover { background: #f1f1f1; }

.legal {
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 16px 16px;
  font-size: .9rem;
  color: #555;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.sep { opacity: .6; }
a img{
    width:20px;
}
</style>
