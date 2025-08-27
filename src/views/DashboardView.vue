<template>
  <div class="home">
    <h1>Dashboard</h1>
    <div>
      <!-- Search bar -->
      <div class="search-section">
        <input type="text" placeholder="Search Skill" v-model="searchQuery" class="search-input" />
        <button class="search-btn">Search</button>
      </div>
      <!-- Cards grid -->
      <div class="card-grid">
        <div class="profile-card" v-for="(user, index) in filteredUsers" :key="index">
          <div class="avatar"><img :src="user.image" alt="picture"></div>
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Skills:</strong> {{ user.skills.join(', ') }}</p>
          <div class="card-actions">
            <router-link class="review" :to="{name:'dashboardIndex',params:{index:index}}">Reviews & Contact</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) return this.$store.state.users;
      return this.$store.state.users.filter((user) =>
        user.skills.some((skill) =>
          skill.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
  },
}
</script>
<style>
/* LAYOUT CONTAINER (optional but nice) */
.home {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  min-height:73vh ;
}

/* SEARCH BAR (unchanged) */
.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
}

.search-input {
  width: 300px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  outline: none;
}

.search-btn {
  padding: 8px 18px;
  border-radius: 20px;
  border: none;
  background: #5a35f3;
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

/* CARDS GRID */
.card-grid {
  display: grid;
  gap: 24px;
  padding: 20px 0;
  grid-template-columns: 1fr;                 /* mobile default: 1 per row */
  justify-items: stretch;                      /* make each card fill its grid cell */
  align-items: stretch;
}

/* Breakpoints for even spacing */
@media (min-width: 480px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }  /* small phones/tablets */
}
@media (min-width: 768px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }  /* tablets */
}
@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(4, 1fr); }  /* laptops */
}
@media (min-width: 1280px) {
  .card-grid { grid-template-columns: repeat(5, 1fr); }  /* large laptop/desktop -> exactly 5 */
}

/* CARD */
.profile-card {
  background: #ccc;
  padding: 16px;
  border-radius: 10px;
  width: 210px;  /* REMOVE fixed width so grid can size evenly */
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;                 /* make equal height look tidy */
  flex-direction: column;
  gap: 8px;
}

/* Avatar — fix selector to avoid styling all <img> globally */
.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  object-fit: cover;
}

/* Actions */
.card-actions {
  margin-top: auto; /* pushes actions to bottom for equal-height cards */
  display: flex;
  justify-content: center;
}

.review {
  padding: 8px 18px;
  border-radius: 20px;
  border: none;
  background: #5a35f3;
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(118, 47, 47, 0.2);
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}
.review:hover {
  background: #f5f5f5;
  color: black;
  transform: translateY(-1px);
}

</style>