const app = Vue.createApp({
  data() {
    return {
      alertMessage: '안녕하세요.',
      text1: '',
      text2: '',
    }
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    outputText1(e) {
      console.log(e);
      this.text1 = e.target.value;
    },
    outputText2(e) {
      this.text2 = e.target.value;
    },
  }
});

app.mount('#assignment');

