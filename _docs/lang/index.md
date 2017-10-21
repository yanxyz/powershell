---
permalink: /lang/
---

# PowerShell 语法

## 帮助

`about_*` 话题讲解语法。

更新帮助，需要以管理员权限运行。指定下载英文帮助，因为有些命令没有中文帮助。

```powershell
Update-Help -UICulture en-US
```

列出全部 about 话题

```powershell
Get-Help about_*
```

查看某个 about 话题，不过 `-Online` 无效。

```powershell
help about_Operators
```

我写了一个工具 <https://github.com/yanxyz/powershell-reference>，可以将 about 话题下载到本地，方便查看。

## 目录

- [基本词法](basics.md)
- [Types](types.md)
- [Booleans](booleans.md)
- [字符串](strings.md)
    - [通配符](wildcards.md)
    - [正则表达式](regex.md)
- [数组](arrays.md)
- [哈希表](hashtables.md)
- [变量](variables.md)
- [表达式](expressions.md)
- [语句](statements.md)
    - [pipelines](pipelines.md)
    - [redirection](redirection.md)
    - [Requires](requires.md)
    - [Param](param.md)
    - [ForEach](foreach.md)
- [异常](exceptions.md)
- [脚本块](scriptblocks.md)
- [函数](functions.md)
- [高级函数](advanced-functions.md)
- [Classes](classes.md)
- [Objects](objects.md)
<!-- - [模块](modules.md) -->

## 资料

- [Windows PowerShell Language Specification Version 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=36389)
- [Windows PowerShell 4.0 and Other Quick Reference Guides](https://www.microsoft.com/en-us/download/details.aspx?id=42554)
- [PowerShell Reference](https://msdn.microsoft.com/powershell/reference/readme)
- [The PowerShell Best Practices and Style Guide](https://github.com/PoshCode/PowerShellPracticeAndStyle)
