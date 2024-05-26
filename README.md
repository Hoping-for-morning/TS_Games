## 前端项目初始化

#### 使用脚手架初始化项目
- Vue CLI https://cli.vuejs.org/guide/#cli
- Vite 脚手架 https://cn.vitejs.dev/guide/
    ```
    pnpm create vite
    ```
#### 整合组件库 Vant：
- 安装 Vant
    ```
    pnpm add vant
    ```
- 按需引入
    ```
    pnpm add @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
    ```
#### 开发页面经验

1. 多参考
2. 从整体到局部
3. 先想清楚页面是什么样子
4. 从小的屏幕去设计


## 前端主页 + 组件概览

### 设计

导航条：显示当前页面的名称

主页搜索框 

内容：

tab 栏：
 - 主页（推荐页 + **广告**）
   - 搜索框
   - banner
   - 推荐信息流
 - 队伍页
 - 用户页
   - 消息
  
### 开发

很多页面要复用组件、样式，不利于维护，所以要抽象一个通用的布局（Layout）