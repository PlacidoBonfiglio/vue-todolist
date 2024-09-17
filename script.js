const { createApp } = Vue;

createApp({
    data() {
        return {
            newListElement: '',
            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Pagare le bollette',
                    done: false
                },
                {
                    text: 'Andare al mare',
                    done: false
                },
                {
                    text: 'Pulire la macchina',
                    done: false
                },
            ]
        }
    },

    methods: {
        removeElement(index) {
            this.todoList.splice(index, 1);
        },

        addNewListElement(content) {
            this.todoList.push(
                {
                    text: '',
                    done: false
                }
            );
            this.newListElement = "";
        },

        isDone(index) {
            this.todoList[index].done = !this.todoList[index].done;
        }
    }

}).mount('#app');