---
permalink: /lang/objects/
---

# PowerShell Objects

```powershell
help about_Objects
```

obejct 有三种数据：type, properties, methods

## Properties

```powershell
help about_Properties
```

下例获取 FileInfo object 的属性

```powershell
$fileInfo = Get-ChildItem $pshome\PowerShell.exe
$fileInfo | Get-Member -MemberType property
# 格式化输出
$fileInfo | Format-List -property *

$fileInfo.creationtime
```

下例获取 static properties

```powershell
Get-Date | Get-Member -MemberType Property -Static
[System.DateTime]::Now
```

scalar objects 和 collections，通常有着不同的属性，objects 的属性不能用于 collections，反之亦然。不过 PowerShell 自动处理，返回相关的值。

```powershell
# DisplayName 是 service object 的属性
(Get-Service Audiosrv).DisplayName
(Get-Service).DisplayName

# Count 是 service collection 的属性
(Get-Service).Count
(Get-Service Audiosrv).Count
```

## Methods

```powershell
help about_Methods
```

查看对象方法

```powershell
Get-Process | Get-Member -MemberType Method
```

scalar objects 和 collections，跟属性类似

```powershell
$p = Get-Process Notepad
$p.Count
$p.Kill()
```

## cmdlets

```powershell
Get-Command *object
```
