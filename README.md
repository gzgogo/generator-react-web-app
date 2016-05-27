# generator-react-web-app
the scaffold of the react web app

## 使用方法

### 1. 安装脚手架工具
```
npm install -g yo
```

### 2. 安装生成器
```
npm install -g generator-react-web-app
```

>使用-g进行全局安装，在以后每次新建项目时不需再次安装，可直接创建项目

### 3. 创建项目
```
yo react-web-app
```

### 4. 目录结构
按上述步骤操作后，会得到如下目录结构：
```
├───package.json                  //包描述文件，包含基本模块的依赖
├───webpack.dev.config.js         //用于开发环境的webpack配置文件
├───webpack.prod.config.js        //用于生产环境的webpack配置文件
├───.gitignore                    //上传到github或gitlab时忽略不必要的文件
├───src/                          //源码的根目录
│   └───fonts                     //放置自定义字体
│   └───images                    //放置图片资源
│   └───javascripts               //存放脚本的根目录
│     └───actions                 //放置redux的actions，该目录只在选择了redux选项时存在
│     └───components              //放置组件
│     └───constants               //放置常量
│     └───containers              //放置容器组件，对于简单的项目，一般用于放置根组件
│     └───libs                    //放置第三方库
│     └───reducers                //放置redux的reducers，该目录只在选择了redux选项时存在
│     └───utils                   //放置项目中的公共代码
│     └───main.js                 //入口脚本文件，对于简单的项目，一般用于绘制根组件
│   └───stylesheets               //放置样式文件
```

## 使用步骤

### 1. 安装依赖
进入到项目根目录，执行：
```
npm install
```

### 2. 进入开发阶段（实时刷新）
```
npm run dev
```

### 2. 编译打包
```
npm run buld
```
编译后会生成dst目录，测试或发布时使用该目录即可。

### 2. 创建组件
在项目根路径下执行
```
yo react-web-app:react-component
```

