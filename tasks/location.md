# PowerShell Location

```powershell
Get-Command *location
about_Locations
```

### Get-Location

```powershell
Write-Host (Get-Location)
Write-Host (Get-Location).Path
```

### Set-Location

将当前目录改为当前脚本所在的目录

```powershell
Set-Location $PSScriptRoot
```
