import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
        {
          image:"https://ca.slack-edge.com/T02LW4RMXJQ-U08FVNDDHNE-8e777a4d53b3-512",
          name: "Alice",
          skills: ["Vue", "JavaScript"],
          contact: { email: "alice@example.com", phone: "+27 (55)-123-4567" },
          reviews: [
            { name: "Matthew", review: "They are really great at explaining", rating: 4 },
            { name: "John", review: "Very patient and helpful", rating: 5 }
          ]
        },
        {
          name: "Bob",
          image:"https://ca.slack-edge.com/T02LW4RMXJQ-U05SH6EC6DN-983198ea2475-512",
          skills: ["Python", "Django"],
          contact: { email: "bob@example.com", phone: "+27 (78)-987-6543" },
          reviews: []
        },
        {
          name: "Charlie",
          skills: ["UI/UX", "Figma"],
          contact: { email: "charlie@example.com", phone: "+27 (82)-222-1111" },
          reviews: [
            { name: "Sophie", review: "Creative and detailed designs", rating: 5 }
          ]
        },
        {
          name: "Diana",
          skills: ["C#", ".NET"],
          contact: { email: "diana@example.com", phone: "+27 (60)-333-4444" },
          reviews: [
            { name: "Ethan", review: "Knows backend systems well", rating: 4 }
          ]
        },
        {
          name: "Ethan",
          skills: ["React", "Node.js"],
          contact: { email: "ethan@example.com", phone: "+27 (82)-555-1212" },
          reviews: []
        },
        {
          name: "Fiona",
          skills: ["SQL", "Data Analysis"],
          contact: { email: "fiona@example.com", phone: "+27 (79)-777-8888" },
          reviews: [
            { name: "Liam", review: "Helped me understand queries better", rating: 5 },
            { name: "Olivia", review: "Great with database optimization", rating: 4 }
          ]
        },
      ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
