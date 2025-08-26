<template>
  <div class="profile-page">
    <!-- Tabs -->
    <nav class="tabs">
      <router-link
        class="tab"
        :class="{ active: !updateProfile }"
        @click="updateProfile = false"
        :to="$route.fullPath"
      >
        Badges
      </router-link>
      <router-link
        class="tab"
        :class="{ active: updateProfile }"
        @click="updateProfile = true"
        :to="$route.fullPath"
      >
        Update Profile
      </router-link>
    </nav>
    <!-- Update Profile Card -->
    <section v-if="updateProfile" class="card">
      <h2>Your Profile</h2>

      <!-- Avatar -->
      <div class="avatar-wrap">
        <div class="avatar" aria-label="Profile picture">
          <span>Profile pic</span>
        </div>
        <input id="avatarFile" type="file" accept="image/*" class="file-input" />
        <label for="avatarFile" class="change-link">Change Profile picture</label>
      </div>

      <!-- Form -->
      <label class="label" for="name">Name</label>
      <input id="name" type="text" class="input" placeholder="Your name" />

      <label class="label" for="password">New Password</label>
      <input id="password" type="password" class="input" placeholder="••••••••" />

      <div class="actions">
        <button class="btn btn-save" type="button">Save changes</button>
        <button class="btn btn-cancel" type="button">Cancel</button>
      </div>
    </section>

    <!-- Badges Card -->
    <section v-else class="card">
      <h2>Your Badges</h2>

      <!-- Filter -->
      <div class="toolbar">
        <div class="summary">
          <span class="dot earned"></span>{{ earnedCount }} earned
          <span class="sep">•</span>
          <span class="dot progress"></span>{{ progressCount }} in progress
          <span class="sep">•</span>
          <span class="dot locked"></span>{{ lockedCount }} locked
        </div>

        <label class="filter">
          <span>Show:</span>
          <select v-model="filter">
            <option value="all">All</option>
            <option value="earned">Earned</option>
            <option value="progress">In progress</option>
            <option value="locked">Locked</option>
          </select>
        </label>
      </div>

      <!-- Badge Grid -->
      <div class="badge-grid">
        <article
          v-for="(b, i) in filteredBadges"
          :key="i"
          class="badge-card"
          :data-state="b.state"
        >
          <div class="medal">
            <img :src="b.icon" :alt="b.title" />
          </div>
          <h3 class="title">{{ b.title }}</h3>
          <p class="meta">
            <strong>Track:</strong> {{ b.track }}
            <span class="sep">•</span>
            <strong>Level:</strong> {{ b.level }}
          </p>

          <div v-if="b.state === 'earned'" class="earned-row">
            <span class="badge earned-pill">Earned</span>
            <span class="date">on {{ b.earnedOn }}</span>
          </div>
          <div v-else-if="b.state === 'progress'" class="progress-row">
            <div class="progress">
              <div class="bar" :style="{ width: b.progress + '%' }"></div>
            </div>
            <span class="pct">{{ b.progress }}%</span>
          </div>
          <div v-else class="locked-row">
            <span class="badge locked-pill">Locked</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateProfile: true,
      filter: "all",
      badges: [
        {
          title: "HTML Foundations",
          track: "Web",
          level: "Beginner",
          state: "earned",
          earnedOn: "2025-08-20",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          title: "CSS Layout Master",
          track: "Web",
          level: "Intermediate",
          state: "progress",
          progress: 60,
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          title: "JavaScript Arrays",
          track: "Web",
          level: "Intermediate",
          state: "locked",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        },
      ],
    };
  },
  mounted() {
    // Read from query
    this.updateProfile = this.$route.query.updateProfile === 'true'
  },
  computed: {
    filteredBadges() {
      if (this.filter === "all") return this.badges;
      return this.badges.filter((b) => b.state === this.filter);
    },
    earnedCount() {
      return this.badges.filter((b) => b.state === "earned").length;
    },
    progressCount() {
      return this.badges.filter((b) => b.state === "progress").length;
    },
    lockedCount() {
      return this.badges.filter((b) => b.state === "locked").length;
    },
  },
};
</script>

<style scoped>
/* --- Reuse your styles for profile page (kept intact) --- */
.profile-page { max-width: 720px; margin: 0 auto; padding: 24px 16px 0px;}
.tabs { display:flex; gap:12px; justify-content:center; margin-bottom:16px; }
.tab { display:inline-block; padding:8px 16px; border-radius:999px; background:#f2f2f2; color:#222; text-decoration:none; box-shadow:0 2px 6px rgba(0,0,0,.12); border:1px solid #eee; }
.tab:hover { background:#eaeaea; }
.tab.active { background:#fff; border:1px solid #dcdcdc; box-shadow:0 4px 12px rgba(0,0,0,.15); font-weight:600; }
.card { background:#fff; border-radius:18px; padding:24px 22px; box-shadow:0 12px 26px rgba(0,0,0,.08); border:1px solid #eee; position:relative;min-height:55vh ; }
.card::after { content:""; position:absolute; left:18px; right:18px; bottom:-8px; height:10px; border-radius:12px; background:rgba(0,0,0,.08); filter:blur(8px); z-index:-1; }
.card h2 { text-align:center; margin:0 0 18px; font-size:1.35rem; font-weight:800; }

/* Avatar (same as yours) */
.avatar-wrap { display:grid; justify-items:center; gap:8px; margin-bottom:18px; }
.avatar { width:80px; height:80px; border-radius:999px; background:#d9d9d9; display:grid; place-items:center; color:#333; font-size:.85rem; box-shadow:inset 0 2px 4px rgba(0,0,0,.12); }
.file-input { display:none; }
.change-link { color:#2161e0; cursor:pointer; text-decoration:underline; font-size:.9rem; }
.change-link:hover { color:#0d4bd1; }
.label { display:block; margin-top:12px; margin-bottom:6px; font-weight:600; }
.input { width:100%; padding:10px 12px; border:1px solid #ccc; border-radius:8px; font-size:.95rem; outline:none; transition:box-shadow .2s, border-color .2s; }
.input:focus { border-color:#5a35f3; box-shadow:0 0 0 3px rgba(90,53,243,.15); }
.actions { display:flex; gap:12px; margin-top:18px; }
.btn { padding:10px 16px; border-radius:8px; border:none; font-weight:600; cursor:pointer; box-shadow:0 2px 6px rgba(0,0,0,.15); }
.btn-save { background:#34a853; color:#fff; }
.btn-save:hover { background:#2e9449; }
.btn-cancel { background:#d60000; color:#fff; }
.btn-cancel:hover { background:#b80000; }

/* --- New styles for badges --- */
.toolbar { display:flex; gap:12px; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:12px; }
.summary { font-size:.95rem; display:flex; align-items:center; gap:8px; }
.sep { opacity:.6; margin:0 6px; }
.dot { width:10px; height:10px; display:inline-block; border-radius:999px; margin-right:4px; }
.dot.earned { background:#34a853; }
.dot.progress { background:#fbbc05; }
.dot.locked { background:#d60000; }
.filter { display:flex; align-items:center; gap:8px; font-size:.95rem; }
.filter select { padding:6px 10px; border:1px solid #ccc; border-radius:8px; }
.badge-grid { --min:180px; display:grid; gap:18px; grid-template-columns:repeat(auto-fill,minmax(var(--min),1fr)); }
.badge-card { background:#f7f7f7; border:1px solid #e7e7e7; border-radius:14px; padding:14px; box-shadow:0 2px 6px rgba(0,0,0,.06); display:flex; flex-direction:column; gap:8px; }
.badge-card[data-state="locked"] { opacity:.75; }
.medal { width:72px; height:72px; border-radius:999px; background:#fff; display:grid; place-items:center; box-shadow:0 2px 6px rgba(0,0,0,.08); overflow:hidden; }
.medal img { width:44px; height:44px; object-fit:contain; }
.title { font-weight:800; margin-top:4px; }
.meta { font-size:.9rem; opacity:.85; }
.earned-row, .progress-row, .locked-row { display:flex; align-items:center; gap:10px; margin-top:auto; }
.badge { padding:4px 8px; border-radius:999px; font-size:.8rem; font-weight:700; }
.earned-pill { background:#e7f6ec; color:#2e9449; }
.locked-pill { background:#fde7e7; color:#b80000; }
.progress { flex:1; height:8px; background:#e9e9e9; border-radius:999px; overflow:hidden; }
.bar { height:100%; background:#fbbc05; width:0; transition:width .3s ease; }
.pct { min-width:36px; text-align:right; font-weight:700; }
.date { font-size:.85rem; opacity:.85; }
</style>
