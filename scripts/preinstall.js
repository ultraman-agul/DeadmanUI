if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.log("只能用pnpm安装依赖包");
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
