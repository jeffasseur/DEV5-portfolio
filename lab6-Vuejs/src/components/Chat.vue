<script setup>
import { onMounted, reactive, ref } from 'vue'

let comments = reactive( { comments: [] } )
let message = ref('')

onMounted( () => {
    fetch('https://lab5-p379.onrender.com/api/v1/messages')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            comments.comments = data
        })
})

const addMessage = () => {
    fetch('https://lab5-p379.onrender.com/api/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: 'Jef',
            text: message.value
        })
    }) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        comments.comments.push({
            _id: data.data._id,
            user: data.data.user,
            text: data.data.text
        })
    })
}
</script>

<template>
    <div class="chat">
        <div v-for="m in comments.comments" :key="m._id" class="chat__single">
            <h4>{{m.user}}</h4>
            <p>{{m.text}}</p>
        </div>
    </div>
    <div class="input">
        <input type="text" name="text" id="text" v-model="message">
        <button @click.prevent="addMessage">Verzenden</button>
    </div>
</template>

<style scoped>
    .chat {
        display: flex;
        flex-direction: column;
        gap: 2em;
        background: lightgray;
        padding: .2em 1em;
        border-radius: .5em;
        height: 80vh;
        overflow-y: scroll;
    }
    .chat__single {
        padding: .5em;
        background: gray;
        color: #fff;
    }
    .chat__single h4 {
        color: blue;
    }
    .input {
        padding: 1em 0;
    }
</style>