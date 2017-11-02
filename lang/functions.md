# PowerShell 函数

```powershell
help about_Functions
```

函数名字，文档建议与 cmdlets 一致（即 Verb-Noun 形式）。不过如果不是用作 cmdlets，我倾向于 PascalCase 形式。

函数的调用跟 cmdlets 一致。

```powershell
function Get-SmallFiles {
    param (
        # PSDefaultValue attribute 提供帮助信息
        [PSDefaultValue(Help = '100')]
        $size = 100
    )
    Get-ChildItem c:\ | where {$.Length -lt $Size -and !$.PSIsContainer}
}

# 下面几种调用结果一样
Get-SmallFiles -Size 100
Get-SmallFiles 100
Get-SmallFiles
```

## 参数

```powershell
help about_Parameters
help about_Parameters_Default_Values
```

参数有两种写法

- 放在函数名字后面
- 放在函数体内 param() 中

positional parameters 用 $args array 引用，比如第一个位置参数 $args[0]。

switch parameters，参数 type 为 switch。

```powershell
function f {
    param (
        [switch] $force
    )
}
```

@Args 是剩余参数，见 about_Splatting。

## 返回值

PowerShell 函数返回值比较特别。

return 语句更多的意思是退出这个 scope。

```powershell
function f {
    "abc"
    return 123
}

$a = f
```

## Pipeline

要想将函数用在 pipeline 中

```powershell
function <name> {
  begin {<statement list>}
  process {<statement list>}
  end {<statement list>}
}
```

- begin 在函数开始时运行一次
- process 在每次从 pipeline 收到 object 时运行一次，这个 object 由 $_ 或 $input 访问。
- end 在收到全部 objects 之后运行一次

如果没有使用它们三个，则视为 end。

## Filter

Filter 是特殊的函数

```powershell
filter Get-ErrorLog {
    param(
        [switch]$message
    )

    if ($message) {
        out-host -inputobject $_.Message
    }
    else {
        $_
    }
}
```

## Help

为函数撰写帮助。有两种形式：

- 注释 about_Comment_Based_Help
- XML about_Comment_Based_Help，多语言帮助只能用这种方式。

## Function provider

函数自动保存到 `function:` drive 中。
