<template>
  <div class="home">
    <h1>Dashboard</h1>
    <div>
    <!-- Search bar -->
    <div class="search-section">
      <input
        type="text"
        placeholder="Search Skill"
        v-model="searchQuery"
        class="search-input"
      />
      <button class="search-btn">Search</button>
    </div>

    <!-- Cards grid -->
    <div class="card-grid">
      <div
        class="profile-card"
        v-for="(user, index) in filteredUsers"
        :key="index"
      >
        <div class="avatar"></div>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Skills:</strong> {{ user.skills.join(', ') }}</p>
        <div class="card-actions">
          <button class="btn">Reviews</button>
          <button class="btn">Contact</button>
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
      users: [
        { name: "Alice", skills: ["Vue", "JavaScript"] },
        { name: "Bob", skills: ["Python", "Django"] },
        { name: "Charlie", skills: ["UI/UX", "Figma"] },
        { name: "Diana", skills: ["C#", ".NET"] },
        { name: "Ethan", skills: ["React", "Node.js"] },
        { name: "Fiona", skills: ["SQL", "Data Analysis"] },
      ],
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) return this.users;
      return this.users.filter((user) =>
        user.skills.some((skill) =>
          skill.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
  },
}
</script>
<style>
/* SEARCH BAR */
.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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

/* CARDS */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
}

.profile-card {
  background: #ccc;
  padding: 15px;
  border-radius: 8px;
  width: 200px;
  text-align: left;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  margin: 0 auto 10px;
}

.card-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.btn {
  border: none;
  background: white;
  padding: 5px 12px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>