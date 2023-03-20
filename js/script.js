const { createApp } = Vue

  createApp({

    data() {
      return {
        ToDoList: [
        {
            text: "Fare la spesa",
            done: false
        },
        {
            text: "Annaffiare le piante",
            done: false
        },
        {
            text: "Fare gli esercizi",
            done: false
        },
        {
            text: "Riordinare la stanza",
            done: false
        },
            
        ],
      }
    }
  }).mount('#app')