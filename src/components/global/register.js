/**
 * 自动全局注册src/components/global文件夹中的.vue组件
 * 组件名来源：vue文件中定义的name属性；
 */

const registerComponent = function (app) {
  const componentsFile = import.meta.globEager("./*.vue");
  Object.values(componentsFile)
    .map((item) => {
      return item.default;
    })
    .forEach((item) => {
      if (item.name) {
        app.component(item.name, item);
      }
    });
};

export default registerComponent;
