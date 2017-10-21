---
permalink: /help/
---

# PowerShell 帮助

使用 Get-Help 查看帮助，也可以用 help（别名 man）。两者的区别是，Get-Help 一次性输出全部的帮助；help 的行为跟 bash less 类似，一次输出一屏，方向键滚屏，Esc 退出。PowerShell 6 help 存在问题，在中文系统下每行只显示一个字符。

```powershell
Get-Help Get-Help
Get-Help Get-Help -Examples
Get-Help Get-Help -ShowWindow
```

本地帮助并不完整，或者查看在线帮助

```powershell
help Get-Help -Online
```

或者更新本地帮助。注意以管理员身份运行；指定下载英文帮助，许多命令没有中文帮助

```powershell
Update-Help -UICulture en-US
```

可以保存下载的帮助，供没网的电脑使用

```powershell
Save-Help -DestinationPath C:\tmp
Update-Help -SourcePath C:\tmp
```
