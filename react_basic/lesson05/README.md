# React 脚手架使用说明


1. ## 安装react脚手架：create-react-app
* windows 安装nvm(nvm可以安装不同版本的nodejs)
    * 1. [下载nvm](https://github.com/coreybutler/nvm-windows/releases), 选择 <font color=Red>nvm-setup.zip</font> 
    * 2. 解压安装包后可以直接安装
    * 3. 安装nodejs
        ```cmd
            1. nvm list                     -- 查看安装列表
            2. nvm list available           -- 查看可安装的nodejs版本
            3. nvm install 18.12.0 64-bit   -- 安装64位的nodejs
            4. nvm list                     -- 查看安装列表
            5. nvm use 18.12.0              -- 使用安装列表中的nodejs版本
            6. nvm uninstall 18.12.0        -- 卸载nodejs版本
        ```
    * 设置全局目录：node_global和node_cache
        ```cmd
        1. npm config set prefix "D:\Program Files\nodejs\node_global"  
        2. npm config set cache "D:\Program Files\nodejs\node_cache"
        ```

    * 安装create-react-app 
        ```cmd
        1. npx create-react-app my-app    --注意：需要安装的路径。
        2. cd my-app 
        3. npm start                      -- 启动
        ```

2. ## my-app 目录说明
    * public 一般存静态资源文件。页面、样式、公共图片等。其中**index.html**是整个页面的入口。不同功能拆分成多个组件，但是整个项目只有一个html文件。所写的要用被称为SPA应用。
    * robots.txt 爬虫规则文件
    * src目录说明
    ```cmd
    src---------
    |-- App.css     -- App组件的样式
    |-- App.js      -- App组件的js
    |-- App.test.js -- App 组件的测试js文件，一般不用。
    |-- index.css   -- 通用性样式
    |-- index.js    -- 入口文件，对应index.html。
    |-- logo.svg    -- svg图片
    |-- reportWebVitals.js   -- 用于记录页面性能的监测。
    |-- setupTests.js        -- 用于组件测试的。应用的整体测试。
    ```

    * 文件执行流程：  
        * 项目在启动后，来到了src目录下的index.js
        * 然后index.js里面import引入了很多东西，包括核心库，dom等，然后触发ReactDOM.render对App组件进行渲染，然后会自动的去public目录里面的index.html文件进行查找id=root的节点。PS：index.js没有被引入到index.html中，这是因为react里面写的webpackage指定。
        * 

    * [小案例介绍](./my-app/02_src%20todoList/App.js) 
