---
permalink: /lang/requires/
---

# PowerShell Requires

```powershell
help about_Requires
```

\#Requires 语句

- 只能用在 script 中，不能用在 funciton, cmdlet 等中
- 可以多次使用
- 可以放在 script 任意的一行，不过必须是此行的第一个语句

要求 PowerShell 最低版本为 "5.0":

```powershell
#Requires -Version 5
```

要求管理员权限:

```powershell
#Requires -RunAsAdministrator
```
