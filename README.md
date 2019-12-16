<!--
 * @Author: 夏民喜
 * @Date: 2019-12-06 20:01:51
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-16 14:49:55
 * @Description: 请输入文件说明
 -->
## Template

## 下载: git clone https://github.com/xiaminxi/Template.git

## 安装依赖: npm install

## 启动: npm run dev 

## 常规使用

* git status 查看当前状态

* git add -A 添加多文件

* git add .  提交新添加和被修改的文件，不包含被删除的

* git add -u  提交被修改和被删除的文件，不提交新添加的文件

* git commit -m"本次提交说明"

* git push 将本地仓库提交到远程仓库

## 版本回退

* git log --pretty=oneline 查询历史对应不同版本的ID ，用于回退使用

* git reset --hard xxx(版本号) 恢复到历史版本

* git push -f 把修改推到远程服务器

* git pull 重新更新

## 创建与合并分支 

* git checkout -b xxx(分支名称) 创建分支xxx，并切换到xxx分支   相当于 git branch xxx git checkout xxx
    
* git branch    查看当前分支，当前分支带有*星号且为绿色

* git push origin xxx 将xxx分支提交到远程仓库

* git merge xxx 将xxx分支合并到master上

* git branch -d xxx 删除分支xxx

* git push origin :xxx 删除远程仓库分支