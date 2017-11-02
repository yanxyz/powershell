# Parameters

```
about_Parameters
```

PowerShell, 参数格式为

```
-<parameter_name> <parameter_value>
```

不像 Shell 那样有 `-`(short option), `--`(long option)。

查看 cmdlets 的参数

```
Get-Help Get-ChildItem -Parameter *
```

上例，`*` 表示所有的参数。

上例输出的是 parameter attribute table


- Required?

  为 true 时，若不提供这个参数，PowerShell 会让用户输入。

- Position?

  为 0 或 "named" 时，不能省略参数名字。这种参数为 named parameter，它的位置任意。

  大于 0 时，这种参数为 positional parameter。若省略参数名字，则参数要放到指定位置。
  若写明参数名字，则位置任意。

- Default value

  ```
  about_Parameters_Default_Values
  ```

- Accept pipeline input?
- Accept wildcard characters?



