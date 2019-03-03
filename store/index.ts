import { createStore, Module } from 'vuex-smart-module'
import count from './modules/count'

const root = new Module({
  modules: {
    count
  }
})

export default () => createStore(root)
