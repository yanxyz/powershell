---
permalink: /install/
---

# 安装 PowerShell

Windows 自 Windows 7 开始内置 PowerShell。

打开 [PowerShell console](console.md)，查看 PowerShell 的版本：

```powershell
$PSVersionTable
```

## 版本历史

PowerShell     | Windows
----------     | -------
PowerShell 5.1 | Windows 10 Anniversary Update
PowerShell 5.0 | Windows 10
PowerShell 4.0 | Windows 8.1
PowerShell 3.0 | Windows 7 sp1, Windows 8
PowerShell 2.0 | Windows 7

- <https://en.wikipedia.org/wiki/PowerShell#Versions>
- <https://4sysops.com/archives/powershell-versions-and-their-windows-version/>

PowerShell 自 v5.1 开始分为两种版本：

- Desktop Edition，建立在 .NET Framework 上
- Core Edition，建立在 .NET Core 上

## 升级

升级到 PowerShell 5，建议升级系统到 Windows 10。[不升级系统的方法](https://msdn.microsoft.com/en-us/powershell/wmf/5.1/install-configure)。

PowerShell 6 是测试版。这个版本建立在 .Net Core 上，可以跨平台使用，[下载](https://github.com/PowerShell/PowerShell#get-powershell)。Windows 下是与系统内置的 PowerShell 平行安装。

注意，PowerShell 6 目前有较多问题。
