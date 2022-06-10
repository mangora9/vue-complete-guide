const app = Vue.createApp({
  data() {
    return {
      counter: 99,
      name: '',
      fullName: '',
    }
  },
  methods: {
    confirmInput() {
      this.fullName = this.name
    },
    submitForm() {
      alert('로귄!!');
    },
    setName(e, lastName) {
      this.name = lastName + e.target.value;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(e) {
      console.log(e.button);
      const clickType = e.button;
      if (clickType === 0) {
        this.counter = this.counter - 1;
      } else if (clickType === 1) {
        this.counter = this.counter - 5;
      } else {
        this.counter = this.counter - 10;
      }
    }
  }
});

app.mount('#events')

