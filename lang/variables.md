# PowerShell 变量

```powershell
help about_Variables
```

有这样几种变量

- User-created variables
- Automatic variables
- Preference variables
- Environment variables

## User-created variables

变量不需要声明，赋值之后就可以使用。

变量名字以 `$` 开始。变量名字不区分大小写。

变量默认值是 $null。

```powershell
$message = "hello world"
$MESSAGE
# hello world
```

指定变量类型，cast notation，在赋值时自动转换类型，如果转换失败将报错。

```powershell
[string]$s = "a"
$s = 2
$s + 10
# 210
```

变量名字包含字母，数字和 `_`。如果包含其它的字符，应将名字放在 `{}` 内。

```powershell
$env:ProgramFiles
${env:ProgramFiles(x86)}
```

## Automatic Variables

```powershell
help about_Automatic_Variables
```

PowerShell 自动创建的变量，不能修改它们的值。

- `$HOME` 用户目录
- `$PSCOMMANDPATH` 脚本路径

## Preference Variables

```powershell
help about_Preference_Variables
```

preference variables 保存着 PowerShell 的配置，可以修改它们的值。

## Environment Variables

```powershell
help about_Environment_Variables
```

跟其它变量不一样，环境变量会被 child sessions（比如 jobs）继承。

通过 Environment Provider 获取环境变量。

```powershell
${env:ProgramFiles(x86)}
```

## Cmdlets

与变量相关的 cmdlets

```powershell
Get-Command *-Variable
```

查看当前 session 中的变量

```powershell
get-variable
```

readonly variable

```powershell
> New-Variable -Name max -Value 256 -Option ReadOnly
> $max = 128
# Cannot overwrite variable max because it is read-only or constant.

> New-Variable -Name max -Value 1024 -Force
> $max
# 1024
```

private variable

```powershell
New-Variable -Name counter -Visibility private
Get-Variable c*
```

重置变量的值

```powershell
$message = $null
Clear-Variable -name message
```

删除变量

```powershell
remove-variable -name message
remove-item -path variable:\message
```

## Variable provider

Variable provider 创建 Variable: drive

例如 $PSCulture 可以这样访问

```powershell
get-item variable:\PSCulture
```
