---
permalink: /lang/expressions/
---

# PowerShell Expressions

```
about_Operators
about_Operator_Precedence
```

不同 types 参与计算，算式结果的类型为左边操作数的 type。

```powershell
'b' + 2  # 'b2'
2 + 'b'  # Error，'b' 不能转为 int

10 -gt 5    # True
"10" -gt 5  # False
```

## Arithmetic Operators

```powershell
about_Arithmetic_Operators
```

`+` 和 `*` 可以用于字符串、数组和哈希表:

```powershell
'a' + 'b'  # 'ab'
'a' * 3    # 'aaa'
```

## Comparison Operators

```powershell
about_Comparison_Operators
```

关于大小写，例如

- `-eq`，不区分大小写
- `-ceq`，区分大小写
- `-ieq`，明确指明区分大小写

`-contains`, `-in`, `-is` 等始终返回 Boolean value。除此之外，如果 input

- 是 scalar ，则返回 Boolean value
- 是 collenction，则返回匹配的 collection

```powershell
"abc" -eq "abc"
# true

"abc" -eq "abc", "def"
# false

"abc", "def" -eq "abc"
# "abc"
```

`-like` 使用通配符

```powershell
"Windows PowerShell" -like "*shell"
# true
```

`-match` 使用 regex。如果 input 是 scalar，将修改 $matches 自动变量

```powershell
"Sunday" -match "sun"
$matches
```

`-contains`

```powershell
"abc", "def", "ghi" -contains "abc"
# true

"abc", "def", "ghi" -contains "abc", "def"
# false
```

## Logical Operators

逻辑操作符

```powershell
# -and, -or, -xor, -not, !
about_Logical_Operators
```

## Assignment Operators

```powershell
about_Assignment_Operators
```

## &

调用命令（程序）

```powershell
# 不加引号，直接调用外部命令
node.exe --version
# 如果命令路径中有空格，需要用引号包裹，用 & 调用命令
& "C:\Program Files\nodejs\node.exe"
```

## 三元操作符

PowerShell 不支持 `?:` 三元操作符，可以用下面方式实现

```powershell
$a = if ($true) { 'a' } else { '' }
```
