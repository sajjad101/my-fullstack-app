<script setup lang="ts">
import { ref } from 'vue'

const clientMessage = ref('Click the button to fetch users!')
const users = ref([])

async function fetchClientData() {
  try {
    clientMessage.value = 'Fetching users...'
    // Fetch users from your MongoDB API
    const response = await $fetch('/api/users', { method: 'GET' })

    // response is an array of users
    users.value = response
    clientMessage.value = `Fetched ${response.length} users successfully!`
  } catch (e: any) {
    clientMessage.value = `Error fetching users: ${e.message}`
  }
}
</script>

<template>
  <div>
    <h2>Client-Side Fetch Example</h2>
    <p>{{ clientMessage }}</p>
    <button @click="fetchClientData" class="btn btn-primary">Fetch Users</button>

    <ul v-if="users.length" class="mt-4">
      <li v-for="user in users" :key="user._id">
        <strong>{{ user.name }}</strong>
        <span v-if="user.posts?.length"> — {{ user.posts.length }} posts</span>
      </li>
    </ul>
  </div>
</template>
