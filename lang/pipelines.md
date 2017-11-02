# PowerShell Pipelines

```powershell
help about_Pipelines
```

PowerShell 建立在 .NET Framework 上，pipeline 传递的是 .NET objects，而不是 plain text。

```powershell
Get-Process notepad | Stop-Process
```

Get-Process 将一个对象（Notepad process）传递给 Stop-Process（参数 InputObject 接受输入）。

如果 cmdlet 没有参数可以接受输入，那么它不能用在 pipeline 中间。也不能指定哪个参数接受输入，由 cmdlet 自己处理。

查看 cmdlet 参数是否接受输入（"Accepts pipeline input" 是否为 true）

```powershell
help Stop-Process -Parameter InputObject
```

pipeline 有些像参数传递，不过在传递的多个对象时，参数传递以一个集合一次完成传递，pipeline 一次传递一个。

```powershell
PS> Get-Process | Get-Member
    TypeName:System.Diagnostics.Process
    ...

PS> Get-Member -InputObject (Get-Process)
    TypeName:System.Object[]
    ...
```

在 pipeline 中，Get-Member 得到的是一个 process 对象，而不是一个集合。

trace-command 用来追踪 pipeline 错误。

```powershell
trace-command -name parameterbinding -expression { pipeline } -pshost -filepath debug.txt
```

CTRL+C stops the pipeline
