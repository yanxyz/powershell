# PowerShell Alias

```powershell
help about_Aliases
```

cmdlet, function, script, executable file 等可以有别名。

别名相关 cmdlets

```powershell
Get-Command *-Alias
```

DOS, Bash 等 shell 的命令，在 PowerShell 中是以 cmdlets 实现，并提供别名，比如 "ls", "dir"。不建议在脚本中使用。

查看别名

```powershell
Get-Alias
Get-Alias -Name c*
Get-Alias -Definition Get-ChildItem
```

Get-Alias 的结果会给出别名的 cmdlet。不过仅限于名字没有 `-` 的别名。

别名跟变量类似，也有作用域。

创建的别名只存在于当前会话中，想永久使用，将别名保存到 PowerShell profile。或者 Export-Alias 导出别名到一个文件中，后面再以 Import-Alias 导入。

alias object

```powershell
Get-Alias | Get-Member
Get-Alias -Name dir | Format-List -Property *
```

alias provider

```powershell
Get-ChildItem -Path Alias:
Get-ChildItem -Path Alias:p*
```
