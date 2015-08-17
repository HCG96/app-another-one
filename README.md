# 另一个
『另一个』是非官方的[『一个』](http://wufazhuce.com/one/)手机客户端。

## 特点

『另一个』的特点（以及它与官方手机客户端的不同点）有：

 + 它提供所有往期内容。官方版本只提供最新的十期内容。
 + 看过的内容都会保存在手机里，所以即使设备离线了，你也可以阅读它们。
 + 你可以将你喜欢的内容添加进“收藏列表”里。

## 设备支持程度

『另一个』能在所有[支持 IndexedDB 或 WebSQL 的浏览器（及设备）](http://caniuse.com/#feat=indexeddb,sql-storage)上运行。

## 项目中用到的技术

 + [Ionic](http://ionicframework.com/)
 + [AngularJS](https://angularjs.org/)
 + [ui-router](https://github.com/angular-ui/ui-router)
 + [Dexie.js](https://github.com/dfahlander/Dexie.js)

## 参与开发

由于本项目使用到了多种技术与辅助工具，所以搭建开发环境会比较麻烦。

### 先决条件

 1. 确保你安装了 [Git](https://git-scm.com/)、[iojs](https://iojs.org/)
 2. 安装 [Bower](http://bower.io/)
 3. （可选 - 如果你不需要生成安装文件的话）安装 [Cordova](http://cordova.apache.org/) 与 [Ionic](http://ionicframework.com/)

### Clone 此项目

1. Fork 这个项目
2. （可选 - 如果你跳过了先决条件里的第三步，则创建一个文件夹即可）在本地开始一个新的 Ionic 项目：`ionic start app-another-one blank`
3. 切换到新建的目录里：`cd app-other-one`
4. 初始化为一个 git 仓库：`git init`
5. 添加一个远程仓库地址：`git remote add origin https://github.com/lmk123/app-another-one.git`（这里的地址换成第一步你 Fork 之后的项目地址）
6. 下载源码：`git fetch --all`
7. 重置仓库状态：`git reset --hard origin/master`
8. 安装 Bower 依赖：`bower install`
9. 安装 npm 依赖：`npm install`

现在你就可以开始开发并提交代码了 :)

### 辅助工具

项目用到了 [SASS](http://sass-lang.com/) 与 [Babel](https://babeljs.io/)，并使用一系列工具用于精简代码，所以在开发之前，你可能会对下面的命令感兴趣 :)

 + `gulp`：精简代码并生成 `www` 文件夹
 + `gulp watch-es6-scss`：监听 *.scss 与 *.es6 文件的变化并自动生成对应文件。这个任务会持续运行，直到你手动终结

更多信息见 [gulpfile.js](https://github.com/lmk123/app-another-one/blob/master/gulpfile.js)。

## 声明
这个程序仅仅是出于兴趣爱好及学习而被开发出来的，里面所有的内容都归[『一个』](http://www.wufazhuce.com/one/)所有。
 
## 许可
 [GNU General Public License Version 3](https://www.gnu.org/licenses/gpl.html) 或更高版本。
