---
permalink: /lang/exceptions/
---

# PowerShell 异常

```
about_Errors
```

PowerShell 有两种错误：terminating 和 non-terminating errors。

non-terminating errors 不会中止脚本运行。可以用 Write-Error 创建，用 ErrorAction 或 ErrorVariable parameters 处理。

```powershell
Write-Error 'An error occurred' -ErrorAction SilentlyContinue
```

terminating errors 中止脚本运行。可以用 throw 抛出。不能用 ErrorAction 或 ErrorVariable parameters 处理，而是用 try 或 trap 处理。

```
about_Try_Catch_Finally
about_Trap
```

实际上，non-terminating errors 的行为由 `$ErrorActionPreference` automatic variable 控制，默认值是 'Continue'，如果改为 'Stop'，non-terminating errors 就变成 terminating errors 了。

`$Error` 保存着 errors。

## 参考

- [Exceptions and errors in PowerShell](https://4sysops.com/archives/exceptions-and-errors-in-powershell/)
