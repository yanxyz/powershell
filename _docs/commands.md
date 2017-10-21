---
permalink: /commands/
---

# PowerShell Commands


## cmdlets

[Cmdlet Overview](https://msdn.microsoft.com/en-us/library/ms714395.aspx)

常用的 cmdlets

```powershell
help about_Core_Commands
```

查找 cmdlets

```powershell
Get-Command –Verb get
Get-Command –Name *item*
```

查看 cmdlet 帮助

```powershell
Get-Help Get-Command
Get-Help Get-Command -Online # 在线帮助
Get-Help Get-Command -ShowWindow # Windows 中打开一个浏览窗口
```



同名命令，优先级从高到低：

1. Alias
1. Function
1. Cmdlet
1. Native Windows commands

```powershell
Get-Help about_Command_Precedence
```




## 语法

```powershell
help about_Command_Syntax
```

command name 为 "Verb-Noun" 形式。

[推荐动词](https://msdn.microsoft.com/en-us/library/ms714428.aspx)

command parameter name 以 "-" 开始，不像 Unix Shell 那样分为 short option 和 long option。

没有值的 parameters 称为 switch parameters。

## Data Sections

```powershell
Get-Help about_Data_Sections
```
