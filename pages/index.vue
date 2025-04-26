<template>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref(null)

const fetchData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products')
    data.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(fetchData)
</script>
