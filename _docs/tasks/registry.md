---
permalink: /registry/
---

# PowerShell 注册表

对 Registry 操作和 FileSystem 类似，但注意，registry keys 是 item path，registry entries 是 item property。

Hive 路径

```powershell
Microsoft.PowerShell.Core\Registry::HKEY_CURRENT_USER
Registry::HKEY_CURRENT_USER
Registry::HKCU
HKCU:
```

只有 `HKCU:` 和 `HKLM:`，其它的得用 `Registry::`。


```powershell
Set-Location HKCU:\Software
Get-ChildItem -Name
```

Get

```powershell
# 过滤 keys
Get-ChildItem -Path HKCU:\Software -Recurse | Where-Object -FilterScript {($_.SubKeyCount -le 1) -and ($_.ValueCount -eq 4) }

# 获取 key 全部 entries
Get-ItemProperty -Path HKLM:\Software\Microsoft\Windows\CurrentVersion

# 获取 entry
Get-ItemProperty -Path HKLM:\Software\Microsoft\Windows\CurrentVersion -Name DevicePath

# 获取 entry 的值
Get-ItemPropertyValue -Path HKLM:\SOFTWARE\Microsoft\PowerShell\3\PowerShellEngine -Name PowerShellVersion
```

Set

```powershell
Set-ItemProperty -PropertyType
```

Create

```powershell
# 创建 key
New-Item

# 创建 entry
New-ItemProperty
```

Remove

```powershell
# 清空 entries
Clear-Item HKLM:\Software\MyCompany\MyKey -Confirm

# 删除 entry
Remove-ItemProperty

# 删除 entry 的值
Clear-ItemProperty
```

## 参考

- [Working with Registry Entries](https://msdn.microsoft.com/en-us/powershell/scripting/getting-started/cookbooks/working-with-registry-entries)
- [Working with Registry Keys](https://msdn.microsoft.com/en-us/powershell/scripting/getting-started/cookbooks/working-with-registry-keys)
