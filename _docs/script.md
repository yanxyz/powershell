---
permalink: /script/
---

# PowerShell 脚本

```powershell
help about_Scripts
help about_InlineScript
```

PowerShell 脚本是纯文本文件，扩展名为 `.ps1`。

## 运行脚本

Windows 下双击 PowerShell 脚本可以运行脚本。

在运行时，可能报错，提示“此系统上禁止运行脚本”。下面修改运行策略，让当前用户可以运行本地未签名的脚本。修改的设置将保存到注册表中，因此运行一次即可。

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy -List
```

在 console 运行脚本

```powershell
.\hello.ps1 # 以关联程序 powershell.exe 运行
powershell .\hello.ps1
powershell -h  # 帮助
```

PowerShell 将位置参数从 -Command 改为 -File

```powershell
powershell foo.ps1
powershell -File foo.ps1
powershell.exe -Command Get-Command
```

<https://github.com/PowerShell/PowerShell/releases/tag/v6.0.0-beta.3>

## 脚本参数

在脚本内 `@Arg` 变量保存着传给脚本的参数，它是一个数组，从 0 开始。

```powershell
$PSScriptRoot  # 脚本所在目录
$PSCommandPath # 脚本路径
@Arg[0]        # 脚本的第一个参数
```

脚本可以使用 [param 语句](lang/param.md)，从而让脚本像 cmdlet 一样，实现必选参数，开关参数，参数验证等功能；并且 PowerShell console 可以补全参数名字。

## 开发工具

- Windows PowerShell ISE，Windows 内置软件，搜索 ISE 启动。
- [VSCode](https://yanxyz.github.io/software/vscode/languages/powershell/)
