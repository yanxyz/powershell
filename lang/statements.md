# PowerShell 语句

条件语句和循环语句必须有 ScriptBlock, 即不能省略 `{}`。

## if

```
about_If
```

if..elseif..else

比较操作符不是常见的数学符号，而是诸如 `-eq` 这样的，详细见 `about_Comparison_Operators`

## switch

```
about_Switch
```

switch 比较复杂。

condition

- 不使用 `case` 关键字
- 可以是 `"string"|number|variable|{ expression }`
- 默认不区分大小写

## loop

```
about_For
about_While
about_Do
about_Foreach

about_Break
about_Continue
```

## Return

```powershell
help about_Return
```

Return 退出 function, script, script block。
