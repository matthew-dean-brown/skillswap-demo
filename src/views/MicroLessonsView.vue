<template>
  <div class="home">
    <h1>Micro Lessons</h1>

    <!-- Search -->
    <div class="search-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search lesson"
        class="search-input"
      />
      <button class="search-btn">Search</button>
    </div>

    <!-- Cards -->
    <div class="card-grid">
      <div
        class="lesson-card"
        v-for="(l, i) in filteredLessons"
        :key="i"
      >
        <div class="thumb" @click="openLesson(l)">
          <img :src="l.thumb" :alt="l.title" />
          <div class="play">▶</div>
        </div>
        <p class="title">{{ l.title }}</p>
        <p class="tags">{{ l.tags.join(' • ') }}</p>
        <div class="card-actions">
          <button class="review" @click="openLesson(l)">Watch</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="active" class="modal" @click.self="close">
      <div class="modal-inner">
        <button class="close" @click="close" aria-label="Close video">✕</button>

        <!-- YouTube iframe -->
        <div v-if="isYouTube(active.src)" class="video-wrap">
          <iframe
            :src="ytEmbed(active.src)"
            title="Micro lesson"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- MP4 video -->
        <div v-else class="video-wrap">
          <video :src="active.src" controls playsinline></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MicroLessonsPage",
  data() {
    return {
      searchQuery: "",
      active: null,
      lessons: [
        {
          title: "Intro to HTML",
          tags: ["html", "beginner"],
          thumb:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=60",
          src: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
        },
        {
          title: "Flexbox Basics",
          tags: ["css", "layout"],
          thumb:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=60",
          src: "https://www.youtube.com/watch?v=phWxA89Dy94",
        },
        {
          title: "JavaScript Array Methods",
          tags: ["js", "intermediate"],
          thumb:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=60",
          src: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      ],
    };
  },
  computed: {
    filteredLessons() {
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return this.lessons;
      return this.lessons.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.tags.some((t) => t.toLowerCase().includes(q))
      );
    },
  },
  methods: {
    openLesson(lesson) {
      this.active = lesson;
      document.documentElement.style.overflow = "hidden"; // lock scroll
    },
    close() {
      this.active = null;
      document.documentElement.style.overflow = ""; // restore scroll
    },
    isYouTube(url) {
      return /youtube\.com|youtu\.be/i.test(url);
    },
    ytEmbed(url) {
      const id =
        url.match(/youtu\.be\/([^?]+)/)?.[1] ||
        url.match(/[?&]v=([^&]+)/)?.[1] ||
        "";
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    },
    onKey(e) {
      if (e.key === "Escape" && this.active) this.close();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKey);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKey);
    document.documentElement.style.overflow = "";
  },
};
</script>

<style scoped>
/* ====== container & search (reuse your styles) ====== */
.home { max-width: 1280px; margin: 0 auto; padding: 0 16px; min-height: 73vh;}
.search-section { display:flex; justify-content:center; align-items:center; margin:20px 0; gap:10px; }
.search-input { width:300px; padding:10px 15px; border-radius:20px; border:1px solid #ccc; box-shadow:2px 2px 5px rgba(0,0,0,.15); outline:none; }
.search-btn { padding:8px 18px; border-radius:20px; border:none; background:#5a35f3; color:#fff; cursor:pointer; box-shadow:2px 2px 5px rgba(0,0,0,.2); }

/* ====== grid ====== */

@media (min-width:480px){ .card-grid{ grid-template-columns:repeat(2,1fr);} }
@media (min-width:768px){ .card-grid{ grid-template-columns:repeat(3,1fr);} }
@media (min-width:1024px){ .card-grid{ grid-template-columns:repeat(4,1fr);} }
@media (min-width:1280px){ .card-grid {
  display: grid;
  gap: 50px;
  padding: 20px 0;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: stretch;
  align-items: stretch;
}}

/* ====== card ====== */
.lesson-card {
  background:#ccc; padding:16px; border-radius:10px;
  box-shadow:2px 2px 6px rgba(0,0,0,.2);
  display:flex; flex-direction:column; gap:8px;
}
.thumb{ position:relative; border-radius:10px; overflow:hidden; cursor:pointer; }
.thumb img{ width:100%; height:140px; object-fit:cover; display:block; }
.play{
  position:absolute; inset:auto 8px 8px auto;
  background:#000a; color:#fff; padding:.25rem .5rem; border-radius:6px; font-weight:700;
}
.title{ font-weight:700; }
.tags{ font-size:.9rem; opacity:.8; }
.card-actions{ margin-top:auto; display:flex; justify-content:center; }
.review{ padding:8px 18px; border-radius:20px; border:none; background:#5a35f3; color:#fff; cursor:pointer; box-shadow:2px 2px 5px rgba(0,0,0,.2); }

/* ====== modal ====== */
.modal{
  position:fixed; inset:0; background:rgba(0,0,0,.6);
  display:grid; place-items:center; z-index:1000;
  padding:24px;
}
.modal-inner{
  position:relative; width:min(100%, 960px); max-width:90vw;
  background:#000; border-radius:12px; padding:0; box-shadow:0 10px 30px rgba(0,0,0,.5);
}
.close{
  position:absolute; top:8px; right:8px; z-index:2;
  border:none; background:#fff; border-radius:8px; padding:.35rem .5rem; cursor:pointer;
}

/* Maintain 16:9 and keep video within viewport */
.video-wrap{
  position:relative; width:min(90vw, 960px); max-height:80vh;
  aspect-ratio:16/9; /* modern browsers */
}
.video-wrap iframe,
.video-wrap video{
  position:absolute; inset:0; width:100%; height:100%;
  border:0; border-radius:12px; background:#000;
}
</style>

