import { reactive } from "vue";

export const logged = reactive({
  value: true,
  changeLang() {
    this.value == false ? (this.value = true) : (this.value = false);
  },
});