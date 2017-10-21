---
permalink: /profiles/
---

# PowerShell Profiles

```powershell
help about_Profiles
```

profile 是特殊的 PowerShell 脚本，PowerShell 在启动时会运行它。profile 当中的 cmdlets, aliases, functions, variables 等可以用在所有的 session。

profile 有多个

```powershell
$profile | get-member -type noteproperty
```

优先级从高到低

1. $profile
1. $Profile.CurrentUserAllHosts
1. $Profile.AllUsersCurrentHost
1. $Profile.AllUsersAllHosts

$profile 变量保存着 "Current User, Current Host" profile 的位置。

默认 profile 不存在，需要自己创建。其中 AllUsers profile 在 %ProgramFiles% 目录下，因此创建时需要管理员权限。

创建或修改 profile 之后要重启 PowerShell。

```powershell
PowerShell -noprofile
```

不会加载 profile。

PowerShell host，比如 PowerShell Integrated Scripting Environment (ISE) ，有它们自己的 profiles。

## remote sessions

remote sessions 不会自动运行 profile， 用 Invoke-Command 来运行

本地

```powershell
invoke-command -session $s -filepath $profile
```

远程，$profile 变量没有值

```powershell
invoke-command -session $s {invoke-command "$home\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"}
```
