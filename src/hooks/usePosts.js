import axios from 'axios'
import { ref, onMounted } from 'vue'


export async function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostsLoading = ref(true)
  const fetching = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await axios.get(url, {
        params: {
          _page: this.page,
          _limit: this.pageLimit
        }
      })
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
      posts.value = response.data
    } catch (e) {
      alert('Error, see console for details')
      console.log(e.message)
    } finally {
      isPostsLoading.value = false
    }


  }

  onMounted(fetching)
  return {
    posts, isPostsLoading, totalPages
  }
}