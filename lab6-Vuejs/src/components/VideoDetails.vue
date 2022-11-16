<script setup>
    import { ref, reactive, onMounted } from 'vue'

    let username = ref('')
    let description = ref('')

    onMounted( () => {
        const api_url = "/tiktok.json"
        fetch(api_url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            username.value = data.videos[0].username
            description.value = data.videos[0].description
        })
    })
</script>

<template>
    <div>
        <h3>{{ username }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
    
</style>