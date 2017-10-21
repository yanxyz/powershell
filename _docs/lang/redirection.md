---
permalink: /lang/redirection/
---

# PowerShell Redirection

```powershell
help about_Redirection
```

有下面几种 output type:

```
*   All output
1   Success output
2   Errors
3   Warning messages
4   Verbose output
5   Debug messages
```

示例：

```powershell
Get-Help about_Redirection

# n> 将 n output 重定向指定文件
Get-Process > Process.txt
Get-Process none 2> $null

# n>> 将 n output 追加到指定文件
Write-Debug "Saving" 5>> debug.txt

# m>&n 将 m output 合并到 n output
Test-Output *>&1 | Out-Null
```
