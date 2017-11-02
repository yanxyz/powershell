# PowerShell 数组

```powershell
help about_Arrays
```

## 创建数组

### 方法一

`,` Comma operator，有两种用法。

一种是用作二元操作符（binary operator）

```powershell
$a = 1,2,3
```

另一种是用作一元操作符（unary operator）的形式，创建一个只有一个元素的一维数组：

```powershell
$a = ,1
```

### 方法二

`..` Range operator，生成一个整数数组：

```powershell
$a = 1..10 # 从 1 到 10
$a = 10..1 # 从 10 到 1
```

### 方法三

`@(expr)` Array subexpression operator，返回一个数组，expr 的结果为这个数组的元素。

```powershell
$a = @() # 空数组
$a = @(1,2,3)
```

### 方法四

`$(expr)` Subexpression operator，如果 expr 的结果是单个值，则返回这个值；如果是多个值，则返回一个数组。

```powershell
$a = $(Get-Process)
```

## 常见操作

数组的 Type 为 System.Object[]

```powershell
$a.GetType().FullName
```



判断是否为数组

```powershell
$a -is [Array]  # True
```



### 获取数组元素

```powershell
# 获取所有的元素
$a

# 获取第一个元素
$a[0]

# 获取最后一个元素
$a[-1]

# 获取索引为 1, 3, 5, 7 的元素
$a[1,3,5,7]
```

range operator 用到索引中

```powershell
# 索引为 1，2，3 的元素
$a[1..3]

# 索引为 0，-1，-2 的元素
$a[0..-2]

# 索引为 0，2，4，5，6的元素
$a[0, 2 + 4..6]
```

### 增删数组元素

.Net 数组的长度是固定的，不能添加删除元素。


添加一个元素

```powershell
$a = @()
$a += 'a'
```

```powershell
# 空数组
$colors = @()
$colors = $colors + "black"
$colors += "orange"
```

`+` 可以合并数组

```
$a = "a","b","c"
$b = 1,2,3
$c = $a + $b
```

```powershell
$colors = $null
Remove-Item variable:monthly_sales
$colors = $colors | where {$_ -ne "yellow"}
```

### 遍历数组

```powershell
$a = "a","b","c"

# ForEach statement
foreach ($x in $a) {
    $x
}

# ForEach-Object cmdlet 别名 ForEach，%
$a | ForEach-Object {
    $_
}

# PowerShell 4, ForEach method
$a.ForEach({
    $_
})
```

### 数组切片

```powershell

```

### 数组排序

```powershell
$colors = $colors | Sort-Object
```

### 合并数组元素

`-join` Join operator

```powershell

# 第一种方式，不指定 Delimiter
# 这里， -join 操作符比 , 操作符优先级高，因此加一个括号
-join ("a", "b", "c")
# abc

# 第二种方式，指定 Delimiter
# 指定 Delimiter 为一个空格
"a", "b", "c" -join " "
# a b c
```

### 搜索数组元素

```powershell
$colors[0 .. 5] -like "*ck*"
```

