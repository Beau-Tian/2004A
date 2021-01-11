git常见的命令总结

git clone 远程仓库的地址    本地要创建的文件夹的名字      //把远程的仓库代码克隆到本地

git init  初始化仓库   自动生成 .git文件夹

git status  查看状态  

git add  filename /  .   把工作区的文件提交到暂存区   

git commit -m "提交的信息"

git push origin 本地的分支名:线上分支名

git push origin master  把本地master分支，推到线上master分支上，

**更改链接的远程仓库地址的话**

git remote add origin  远程的url地址仓库

git remote remove orgin   删除远程仓库的管理关系



git log  查看本地的提交日志

git reset --hard  提交的版本号，可以通过git log查看

git中分支的概念2

git  branch   查看本地分支

git branch -r  查看远程分支   

git branch -a  查看所有的分支



git  branch  要创建新分支名字   基于某个分支创建

git checkout  要切换的分支名称  

git checkout -b  要创建新分支名字   基于某个分支创建(可以是远程的分支)   //创建并且切换分支结构给



git merge   你要合并的分支(也可以是远程的分支)

git fetch   把远程分支跟本地进行同步，

git pull   =  git fetch + git merge   更新本地的代码，跟远程master分支代码同步

git配置ssh操作

https://gitee.com/liguanh/myapp.git  公开的地址，所有人都可以访问的，

git@gitee.com:liguanh/myapp.git  比较适合公司内容使用  速度会快一些写



1. 修改仓库远程地址，ssh地址

   git remote remove origin   

   git  remote add  origin  git@gitee.com:liguanh/myapp.git



2. 配置本地的公私钥

   ssh-keygen  生成公私钥命令

   cd ~/.ssh/

   cat  id_ras.pub  打印公钥，拷贝到码云地址中去个人设置>ssh公钥，进行添加