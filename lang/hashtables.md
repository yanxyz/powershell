# PowerShell Hash Tables

```powershell
help about_Hash_Tables
```

哈希表（hash table），又名字典（dictionary），关联数组（associative array）。

创建哈希表

```powershell
$hash = @{ Number = 1; Shape = "Square"; Color = "Blue"}

$hash = @{
    Number = 1
    Shape = "Square"
    Color = "Blue"
}
```

键值对用 `;` 或换行符隔开。

## 有序字典

哈希表键名的顺序不确定，有序字典（ordered dictionary）的键名按添加的顺序排列：

```powershell
$dict = [ordered]@{ Number = 1; Shape = "Square"; Color = "Blue"}
$dict.keys
```

可以将有序字典转为哈希表，反之不可以：

```powershell
[hashtable]$hash = $dict
```

## 常见操作

哈希表的 Type 是 System.Collections.Hashtable

```powershell
$hash.description
$hash.Get
$hash | Get-Member
```

合并哈希表：

```powershell
$hash += @{ Time = (Get-Date) }
```

按键名排序：

```powershell
$hash.GetEnumerator() | Sort-Object -Property key -Descending
```
