# PowerShell Providers

```powershell
help about_Providers
```

查看 Providers

```powershell
Get-PSProvider
help -Category provider
Get-PSDrive Function | Format-List *
```

一些 cmdlets 不只用于 FileSystem，也可以用于其它 Providers。

```powershell
Get-Item Alias:

# 切换到 Environment
Set-Location Env:
Get-ChildItem

# 切换到 Registry
Set-Location HKLM:\Software\Microsoft
Get-ChildItem .\PowerShell

# 切换到 FileSystem（用户目录）
Set-Location $HOME
```

