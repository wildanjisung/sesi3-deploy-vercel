import axios from 'axios'

const state = () => ({
  list: [],
});

const mutations = {
  setList(state, param) {
    state.list = param
  }
};

const actions = {
  fetchList(store) {
    axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 5,
        offset: store.state.list.length,
      }
    })
    .then((response) => {
      store.commit("setList", [
        ...store.state.list,
        ...response.datA.results
      ])
    })
    .catch((err) => {
      alert(err)
    })
  }
};

export default { state, mutations, actions }