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

很多页面要复用组件、样式，不利于维护，

所以要抽象一个通用的布局（Layout）

组件化


## 数据库表设计

标签的分类（有哪些标签，怎么进行分类）

### 新增标签 （分类）

性别： 男、女

方向：Java、C++、Python、Go、前端

目标：考研、春招、秋招、社招、考公、竞赛、转行、跳槽

段位：初级、中级、高级、王者

身份：大学生、上班族、老板、博士生

状态：已婚、有对象、单身

【用户自定义标签】

字段：

### 修改用户表