---
permalink: /lang/strings/
---

# PowerShell Strings

```powershell
help about_Quoting_Rules
```

用单引号的是 literal string，单引号内是什么便是什么（只有一个例外，连续两个单引号表示一个单引号）；
用双引号的是 extending string，可以展开变量，可以转义字符。

```powershell
PS > $name = "yan"

PS > 'hello`n$name'
hello`n$name

PS > "hello`n$name"
hello
yan
```

在单引号内，连续两个单引号表示一个单引号，相当于转义。
双引号类似，在双引号内，连续两个双引号表示一个双引号。

```powershell
PS > 'It''s a dog.'
It's a dog.

PS > "He said ""I love her""."
He said "I love her".
```

## Here Strings

多行字符串可以用 Here Strings。

Here Strings 也分为单引号、双引号两种，二者的区别同 strings。下面以单引号为例：

```powershell
$message = @'
hello
world
'@; Write-Host $message
```

开始符号 `@'` 后面要换行；结束符号 `'@` 要在行首。

## Escape Characters

```powershell
help about_Escape_Characters
```

用反引号（\`，backtick ）转义，不用 `\\` 是因为 `\\` 用作了路径分隔符。

```powershell
$n = 5
"The value is stored in `$n." # 阻止变量替换
```

### stop-parsing symbol

在给程序传递参数时用转义符不方便，这时可以使用 stop-parsing symbol `--%`，它之后的视为 literal string，只能使用环境变量，遇到 pipeline 或 line ending 就结束，不能续行。

```powershell
icacls X:\VMS --% /grant Dom\HVAdmin:(CI)(OI)F
# 传递给 icacls 的参数为 X:\VMS /grant Dom\HVAdmin:(CI)(OI)F
```

## 字符串操作

字符串的 type 为 System.String，

```powershell
$string = "hello world"
$string.GetType().FullName
```

System.String API

```powershell
$string | Get-Member
```

拼接字符串：

```powershell
PS > "a" + "b"
ab
```

重复字符：

```powershell
PS > "a" * 3
aaa
```

### Concat

```powershell
PS > "a" + "b"
ab
```

对于超长字符串，用 String build 效率更好。

### Format

`-f` Format operator，格式化


### Replace

[`-replace` 操作符](https://msdn.microsoft.com/en-us/powershell/reference/5.1/microsoft.powershell.core/about/about_comparison_operators#replace-operator)

```powershell
help about_Comparison_Operators
```

- `-replace` 不区分大小写
- `-ireplace` 明确不区分大小写
- `-creplace` 区分大小写

```powershell
"book" -replace "B", "C"
# Cook
```

### Search


`-contains` 操作符

```powershell
Get-Help about_Match
```

`-like` 操作符

```powershell
Get-Help about_Match
```

`-match` 操作符

```powershell
Get-Help about_Match
```

### Split

除了 C# String.Split() [Regex]::Split() 之外，

`-split` operator 分割 string

```powershell
# delimiter 默认为 space
-split "red yellow blue green"
# 指定 delimiter
"Lastname:FirstName:Address" -split ":"
# 让结果包含 delimiter
"Lastname:FirstName:Address" -split "(:)"

Get-Help about_Split
```

### Trim

C# 三个方法：Trim，TrimStart, TrimEnd

```powershell
PS > "Hello World".TrimEnd(" World")
he
```

结果为什么不是 "hello"？

TrimEnd 可以接受一个 `char[]` 参数，表示要删除的字符。PowerShell 在这里将 string 转为 `char[]`，等同于 `"Hello World".TrimEnd(' ','w','o','r,'l','d')`。

### 遍历字符串

C# 可以用 foreach 遍历字符串，PowerShell 只能用 for。
