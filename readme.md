### 流程

1. 安装tailwindcss

   - 命令行

   ```js
   npm install -D tailwindcss
   npx tailwindcss init
   ```

   - tailwind.config.js

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   - css file

   ```js
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. 调整babel

   ```js
   npm install --save-dev @babel/plugin-proposal-private-property-in-object
   ```

   



