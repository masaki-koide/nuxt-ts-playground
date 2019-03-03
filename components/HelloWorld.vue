<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>count:{{ count() }}</div>
    <button @click="increment(1)">
      increment
    </button>
    <button @click="asyncIncrement(1)">
      asyncIncrement
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import count from '~/store/modules/count'
@Component({
  computed: count.mapGetters(['count']),
  methods: {
    ...count.mapMutations(['increment']),
    ...count.mapActions(['asyncIncrement'])
  }
})
export default class HelloWorld extends Vue {
  message: string = 'Hello world !'
}
</script>
