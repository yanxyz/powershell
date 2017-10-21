---
permalink: /path/
---

# PowerShell 路径

```powershell
Get-Command *-path
about_Path_Syntax
```

### Test-Path

```powershell
> Test-Path -Path $profile
False
```

`$profile` 这个文件不存在。

```powershell
> Test-Path -Path $profile -IsValid
True
```

`$profile` 这个路径是合法的。

### Join-Path

合并路径

```powershell
Join-Path $PSScriptRoot -ChildPath test
```

### Convert-Path

将 PowerShell drive 转为实际的字符串

```powershell
> Convert-Path hkcu:\software\microsoft\windows
HKEY_CURRENT_USER\software\microsoft\windows
```

https://4sysops.com/archives/validating-file-and-folder-paths-in-powershell-parameters/
