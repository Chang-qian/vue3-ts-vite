// 验证规则
export const rules = {
  name: [
    {
      required: true,
      message: "用户名为必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5-10位的数字或英文",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码为必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码必须三位以上的数字或英文",
      trigger: "blur",
    },
  ],
};
