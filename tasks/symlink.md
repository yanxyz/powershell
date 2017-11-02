# Symlink

Windows 先了解 [mklink](/note/cmd/utils/mklink.md)；
Linux 先了解 [ln](/shell/utils/ln.md)。
下文主要关注 Windows。

PowerShell 5 开始支持链接，跟 mklink 有一些不同。

## 创建链接

使用 New-Item 创建链接

- `-ItemType` 指定链接类型：HardLink, Junction, SymbolicLink
- `-Path` 或 `-Name` 指定 Link
- `-Value` 或 `-Target` 指定 Target

PowerShell 在创建 SymbolicLink 时

- 需要管理员权限
- 自动分辨文件和目录，不需要分开处理。
- 如果 Target 是相对路径，是相对于当前工作目录。

```powershell
New-Item -ItemType SymbolicLink -Path .\a -Value .\d
```

PowerShell 目前不支持 relative target, [issue](https://github.com/PowerShell/PowerShell/issues/3500)。


## 查看链接的属性

```powershell
Get-ItemProperty .\t.txt | format-list
Get-ItemPropertyValue .\t.txt -Name LinkType
Get-ItemPropertyValue .\t.txt -Name Target
```

## 删除链接

使用 Remove-Item 删除 links，跟删除 file 一样。删除 symbolic link，不需要管理员权限。

在删除 links 时，通常我们只是想删除 links 而不要删除它的 target。

[Remove-Item -Recurse on symlink should recurse when path ends with path separator · Issue #3674 · PowerShell/PowerShell](https://github.com/PowerShell/PowerShell/issues/3674)

### PowerShell 5

删除 junction link

```powershell
Remove-Item path\to\junction -Recurse -Force
```

删除 directory symbolic link

```powershell
[System.IO.Directory]::Delete("path\to\symlink", $true)
cmd /c "rmdir path\to\symlink"
```

## FAQ

### 如何查找 hard links 的 target？

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

### 如何复制 links 本身而不是它的 target？



