---
permalink: /env/
---

# PowerShell 环境变量

```powershell
help about_Environment_Variables
```

## Env: drive

陈列环境变量

```powershell
Get-ChildItem Env: | Sort-Object Name
Get-ChildItem Env: | Where-Object { $_.Name -like "program*"}
```

创建

```powershell
Set-Item -Path Env:Path -Value ($Env:Path + ";C:\Temp")
```

删除

```powershell
Remove-Item Env:\TestVariable
```

## $env:variable

$env:variable 更简便

```powershell
$env:ProgramFiles
${env:ProgramFiles(x86)}


$Env:Path = $Env:Path + ";C:\Temp"
Add-Content -Path $Profile.CurrentUserAllHosts -Value '$Env:Path = $Env:Path + ";C:\Temp"'
```

## .NET Framework methods

PowerShell cmdlets 对环境变量的修改只对当前 process 有效，想保存修改需要使用 .NET Framework methods。

- [.NET Framework System.Environment Methods](https://msdn.microsoft.com/en-us/library/system.environment_methods.aspx)

访问

```powershell
[environment]::GetEnvironmentVariable("Path", "User")
# 第一个参数是环境变量名字；
# 第一个参数是环境变量类型：Process, User, Machine
```

修改

```powershell
[Environment]::SetEnvironmentVariable("TestVariable", "Test value.", "User")
[environment]::GetEnvironmentVariable("Path", "User")


# 删除
[Environment]::SetEnvironmentVariable("TestVariable", $null, "User")
```

