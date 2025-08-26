import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
        {
          image:"https://matthew-dean-brown.github.io/skillswap-demo/public/img/jaimy.jpg",
          name: "Jaimy",
          skills: ["Vue", "JavaScript"],
          contact: { email: "alice@example.com", phone: "+27 (55)-123-4567" },
          reviews: [
            { name: "Matthew", review: "They are really great at explaining", rating: 4 },
            { name: "John", review: "Very patient and helpful", rating: 5 }
          ]
        },
        {
          name: "Phatshimo",
          image:"https://matthew-dean-brown.github.io/skillswap-demo/public/img/phatshimo.jpg",
          skills: ["Python", "Django"],
          contact: { email: "bob@example.com", phone: "+27 (78)-987-6543" },
          reviews: []
        },
        {
          image:"https://matthew-dean-brown.github.io/skillswap-demo/public/img/kenny.jpg",
          name: "Kenny",
          skills: ["UI/UX", "Figma"],
          contact: { email: "charlie@example.com", phone: "+27 (82)-222-1111" },
          reviews: [
            { name: "Sophie", review: "Creative and detailed designs", rating: 5 }
          ]
        },
        {
          image:"https://matthew-dean-brown.github.io/skillswap-demo/public/img/pia.jpg",
          name: "Pia",
          skills: ["C#", ".NET"],
          contact: { email: "diana@example.com", phone: "+27 (60)-333-4444" },
          reviews: [
            { name: "Ethan", review: "Knows backend systems well", rating: 4 }
          ]
        },
        {image:"https://matthew-dean-brown.github.io/skillswap-demo/public/img/matthew.png",
          name: "Matthew",
          skills: ["React", "Node.js"],
          contact: { email: "ethan@example.com", phone: "+27 (82)-555-1212" },
          reviews: []
        }
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
