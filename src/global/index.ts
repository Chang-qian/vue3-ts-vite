import type { App } from "vue";
import registerElementPlus from "./registerElement-plus";
export default function globalRegister(app: App): void {
  app.use(registerElementPlus);

}
