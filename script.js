const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: '',
                    done: false
                }
            ]
        }
    }

}).mount('#app');