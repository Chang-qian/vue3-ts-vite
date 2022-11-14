import { App } from "vue";
import "element-plus/dist/index.css";
import {
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink
} from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const components = [
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink
];
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}
