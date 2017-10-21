---
permalink: /lang/basics/
---

# PowerShell 基本词法

标识符不区分大小写。

语句不需要 ";" 作为结束符，只有当把多个语句放到一行时才需要。

## 关键字

```powershell
about_Language_Keywords
about_Reserved_Words
```

保留字用引号包裹之后可以用作参数的名字。

## 注释

注释有两种

```powershell
# 单行注释

<#
多行注释
#>

Get-Content -Path <#configuration file#> $$profile
```
