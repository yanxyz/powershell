# PowerShell DateTime

```powershell
Get-Date -Format s
Get-Date -Format yyyy-MM-dd_HH_mm_ss
(Get-Date).DayOfYear
```

```powershell
New-Item "$(Get-Date -Format s).txt"
```
