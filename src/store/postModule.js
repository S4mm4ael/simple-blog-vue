import axios from 'axios'

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: true,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    pageLimit: 10,
    totalPages: 0,
    sortOptions: [
      { value: 'title', name: 'By name' },
      { value: 'body', name: 'By content' },
      { value: 'id', name: 'By id' }
    ]

  }),
  getters: {
    selectSort(state) {
      if (state.selectedSort === 'id') {
        return [...state.posts].sort((post1, post2) => post1.id - post2.id)
      }
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      )
    },
    searchInPost(state, getters) {
      return getters.selectSort.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    removePost(state, id) {
      state.posts = state.posts.filter((p) => p.id !== id)
    },
    createPost(state, post) {
      state.posts.push(post)
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true)
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url, {
          params: {
            _page: state.page,
            _limit: state.pageLimit
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.pageLimit))
        commit('setPosts', response.data)
      } catch (e) {
        alert('Error, see console for details')
        console.log(e.message)
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchMorePosts({ state, commit }) {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url, {
          params: {
            _page: state.page,
            _limit: state.pageLimit
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.pageLimit))
        commit('setPage', state.page + 1)
        commit('setPosts', [...state.posts, ...response.data]
        )
      } catch (e) {
        alert('Error, see console for details')
        console.log(e.message)
      }
    }
  },
  namespaced: true
}