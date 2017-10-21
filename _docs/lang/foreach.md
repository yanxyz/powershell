---
permalink: /lang/foreach/
---

# PowerShell ForEach

ForEach 有多个意思。

## Foreach statement

```powershell
help about_Foreach
help about_ForEach-Parallel
```

```powershell
$letterArray = "a","b","c","d"
foreach ($letter in $letterArray)
{
    Write-Host $letter
}
```

## Foreach cmdlet

这时 foreach 是 ForEach-Object 的别名，这个 cmdlet 有一个别名 `%`

```powershell
Get-Alias -Definition ForEach-Object
```

ForEach-Object 通常用于 pipeline，用于处理比较大的数据。小数据用 foreach statement 更快（数据全部读取到内存中）。

```powershell
Get-Process | ForEach-Object Name
```

上面使用了简写语法，把 process 的属性当作 ForEach-Object 的参数使用，完整写法：

```powershell
Get-Process | ForEach-Object { $_.Name }
```

ForEach-Object 可以使用三个脚本块，-Begin，-Process，-End

```
Get-ChildItem | foreach {
    $fileCount = $directoryCount = 0
}{
    if ($_.PsIsContainer) {
        $directoryCount++
    } else {
        $fileCount++
    }
}{
    "$directoryCount directories and $fileCount files"
}

```

## Foreach method

collection 有 ForEach method

```powershell
(1..10).ForEach({$_ * 2})
```
