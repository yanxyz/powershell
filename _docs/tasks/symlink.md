---
permalink: /symlink/
---

# powershell symlink

PowerShell 5 开始支持链接。

## 创建链接

由 New-Item 创建链接

- `-ItemType` 指定链接类型：HardLink, Junction, SymbolicLink
- `-Path` 指定 Link
- `-Value` 或 `-Target` 指定 Target

PowerShell 在创建 SymbolicLink 时

- 需要管理员权限
- 自动分辨文件和目录，不需要分开处理。
- 如果 Target 是相对路径，是相对于当前工作目录。

```powershell
New-Item -ItemType SymbolicLink -Path .\a -Value .\d
```

注意：PowerShell 6 alpha 无法创建 SymbolicLink 目录链接。

Windows 命令行下由 [mklink](../../cmd/utils/mklink.md) 创建链接，跟 PowerShell 有一些不同。

## 查看链接的属性

```powershell
Get-ItemProperty .\t.txt | format-list
Get-ItemPropertyValue .\t.txt -Name LinkType
Get-ItemPropertyValue .\t.txt -Name Target
```

对于 HardLink，上面得到的 Target 为空，那么怎么查找 HardLink 的 Target ？解决方案是使用第三方工具。

比如 [FindLinks](https://technet.microsoft.com/en-us/sysinternals/findlinks)

```powershell
FindLinks.exe -accepteula -nobanner .\t.txt
```

或者使用 [ln](http://schinagl.priv.at/nt/ln/ln.html)，注意不是 Linux 的 ln，只是名字一样而已

```powershell
ln.exe --list .\t.txt
```

```powershell
# v6.0.0-beta.4
Get-ChildItem -FollowSymlink
```

## 删除链接

在删除链接时，我们只是想删除链接而不要删除 Target。删除链接不需要管理员权限。

Remove-Item 删除链接

```powershell
# 删除文件链接（HardLink 或 SymbolicLink）
Remove-Item .\t.txt

# 删除目录链接（Junction 或 SymbolicLink）
Remove-Item .\d -Recurse -Force
```

注意：PowerShell 5 无法删除 SymbolicLink 目录链接。PowerShell 6 修复了这个问题。
