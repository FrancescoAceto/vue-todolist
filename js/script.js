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
        
        NewElementText: "",

        NewElement: {
            text: "",
            done: false
        },
      }
    },

    methods: {
        deleteElement(ListElementsIndex){
            this.ToDoList.splice(ListElementsIndex, 1);
        },
        
        addElement(){

            this.ToDoList.push(this.NewElement);
        }
    },
    
  }).mount('#app')