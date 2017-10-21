---
permalink: /lang/param/
---

# PowerShell Param

```powershell
about_Functions_Advanced_Parameters
```

Param 语句可以用在 script, scriptblock, function 等中。它必须是第一个语句。

```powershell
function Hello {
    param(
        [parameter(mandatory = $true)]
        [string]
        $FirstName
    )

    Write-Host "Hello, $Name"
}

Hello -Name 'Yan'
Hello 'Yan'
```

## Parameter Attribute

```powershell
param(
    [parameter()]
)
# [CmdletBinding()]
```

高级函数如果没有使用 CmdletBinding attribute，则必须使用 Parameter Attribute，即两者至少有其一。

Parameter Attribute 有多种参数。

```powershell
param(
    # 必选
    [parameter(mandatory=$true)]
    # 参数位置
    [parameter(Position=0)]
    # 所属集合
    [parameter(ParameterSetName="Computer")]
    # 参数值为 pipeline 传入的 object
    [parameter(ValueFromPipeline=$true)]
    # 参数值为 pipeline 传入的 object 的同名属性
    [parameter(ValueFromPipelineByPropertyName=$true)]
    # 剩余参数
    [parameter(ValueFromRemainingArguments=$true)]
    # 帮助
    [parameter(HelpMessage="Enter one or more computer names separated by commas.")]

    [String[]]
    $ComputerName
)
```

#### Position argument

Parameters 默认是位置参数，PowerShell 按参数声明顺序为参数添加序号。

比如 Get-Help，Name parameter

```powershell
Get-Help -Name Get-Help  # 以命名参数形式
Get-Help Get-Help        # 以位置参数形式
```

禁止这个特性

```powershell
[CmdletBinding(PositionalBinding=$false)]
```

Position argument 指定序号，序号从 0 开始。

## Alias attribute

为参数添加别名

```powershell
param(
    [parameter(Mandatory = $true)]
    # 为参数添加两个别名
    [alias("CN", "MachineName")]
    [String]
    $ComputerName
)
```

## Validation Attributes

```powershell
param(
    [parameter(Mandatory = $true)]
    [AllowNull()]
    [String]
    $ComputerName
)
```

这些 attributes 用于验证参数的值。

`[AllowNull()]` 值可以是 $null。适用于参数的类型不是 Null 的情况。

`[ValidateNotNull()]` 值不能是 $null。适用于没有指定参数的类型，或参数类型是 Nullable 的情况。

`[AllowEmptyString()]` 值可以是 ""。

`[ValidateNotNullOrEmpty()]` 值不能是 $null 和 ""。

`[ValidateLength(1,10)]` 值的 Length 取值范围 [1, 10]。

`[AllowEmptyCollection()]` 值可以是空 collection `@()`。

`[ValidateCount(1,5)]` 值（collection）的 Count 取值范围 [1, 5]

`[ValidateRange(0,10)]` 值域为 [0, 10]

`[ValidateSet("Low", "Average", "High")]` 值在集合内。

`[ValidatePattern("[0-9]")]` 值匹配 "[0-9]"。

`[ValidateScript({$_ -ge (get-date)})]` 使用一个 script 验证值，script 返回 True 表示通过验证。在 script 内 $_ 引用值。

## Switch Parameters

Switch parameters 没有值。

```powershell
Param(
    [switch]$Recurse
    [switch]$Force
)
```

## Dynamic Parameters

比如 Set-Content 的 Encoding parameter 只有在 file system drive 中使用。

```powershell
Param ([String]$Name, [String]$Path)
DynamicParam {}
```
