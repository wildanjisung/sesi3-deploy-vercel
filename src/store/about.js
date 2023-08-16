const state = () => ({
  angka: 1,
});

const mutations = {
  setAngka(state, param) {
    state.angka = param
  }
};

const actions = {
  checkValueAngka(store, param) {
    if (param > 0 && param < 100) {
      store.commit("setAngka", param);
    } else {
      alert("tidak memenuhi kriteria")
    }
  }
};

export default { state, mutations, actions }