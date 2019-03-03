import { Getters, Actions, Mutations, Module } from 'vuex-smart-module'

class CountState {
  public count = 0
}

class CountGetters extends Getters<CountState> {
  public count(): number {
    return this.state.count
  }
}

class CountMutations extends Mutations<CountState> {
  public increment(payload: number): number {
    return (this.state.count += payload)
  }
}

class CountActions extends Actions<
  CountState,
  CountGetters,
  CountMutations,
  CountActions
> {
  public asyncIncrement(payload: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 1000)
    }).then(() => {
      this.commit('increment', payload)
    })
  }
}

export default new Module({
  // nested module will not be namespaced
  namespaced: false,

  state: CountState,
  getters: CountGetters,
  mutations: CountMutations,
  actions: CountActions
})
