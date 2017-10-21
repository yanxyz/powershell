---
permalink: /fs/
---

# PowerShell 文件和目录

文件和目录相关操作。

## Item

```powershell
Get-Command *item
```

这些命令可以用于 files, folders, registry keys, variables, aliases, functions。本文只关注 files, folders。

本文

- item 指文件或目录
- 目录的内容指目录下的文件和子目录

### Get-Item

```powershell
Get-Item $HOME
```

获取指定 item。若 item 不存在则报错。

查看 item API

```powershell
(Get-Item $HOME).GetType()
Get-Item $HOME | Get-Member | Sort-Object -Property Name
```

### Get-ChildItem

```powershell
Get-ChildItem -Path myfile
```

用于文件效果同 Get-Item。

```powershell
Get-ChildItem -File -Recurse -Depth 2
Get-ChildItem C:\WINDOWS\System32 -Filter *.txt -Recurse | Select-Object FullName
```

### New-Item

- `-ItemType` 指定 item 类型，默认是 "File"
- 若 item 存在则报错，`-Force` 强制新建。
- 返回创建的 item。

```powershell
New-Item -ItemType File -Path . -Name myfile
New-Item myfile
```

创建文件。

```powershell
New-Item -ItemType Directory a
mkdir a
```

创建目录。使用别名 mkdir 比较方便。

```powershell
mkdir a\b\c
```

创建多级目录，返回最后创建的目录。

```powershell
mkdir a,b,c
```

创建多个目录，返回一个数组。

### Copy-Item

```powershell
Copy-Item -Path .\myfile -Destination .\myfile2
```

复制文件，若 Destination 存在

- Destination 是文件则报错，`-Force` 强制覆盖。
- Destination 是目录则复制到它下面。

```powershell
Copy-Item -Path .\mydir -Destination .\mydir2 -Recurse
```

复制目录：

- 若不指定选项 `-Recurse` 则只复制目录本身，不复制目录的内容
- 若 Destination 存在则复制到它下面，若 Destination 下有同名目录则抛出错误（若指定选项 `-Force` 则强制覆盖）。

Copy-Item 没有返回值，除非指定选项 `-PassThru`。

### Remove-Item

- 直接删除，不是删除到回收站
- 没有返回值，也没有选项 `-PassThru`

```powershell
Remove-Item -Path .\myfile
```

删除文件

```powershell
Remove-Item -Path .\mydir
```

删除目录，只删除空目录

- 若不是空目录则要求确认，`-Force` 不用确认。
- `-Recurse`删除目录及其内容。

### Move-Item

```powershell
Move-Item -Path .\myfile -Destination .\myfile2
```

移动文件，若 Destination 存在

- Destination 是文件则报错，`-Force` 覆盖 Destination
- Destination 是目录则移动到它下面

```powershell
Move-Item -Path .\mydir -Destination .\mydir2
```

移动目录，移动目录及其内容（没有 `-Recurse` 选项）。若 Destination 存在

- Destination 是文件则报错
- Destination 是目录则移动到它下面，若 Destination 下有同名目录则报错。

Move-Item 没有返回值，除非指定选项 `-PassThru`。

### Rename-Item

```powershell
Rename-Item -Path myfile -NewName myfile2
```

重命名也可以由 Move-Item 实现，但是 Rename-Item 不能移动 item，`-NewName` 和 `-Path` 在同一目录下面。

```powershell
Get-ChildItem *.txt | Rename-Item -NewName { $_.Name -replace '\.txt$','.log' }
```

重命名多个文件。

Rename-Item 没有返回值，除非指定选项 `-PassThru`。

### Invoke-Item

对 item 执行默认动作，item 指定全路径。

```powershell
Invoke-Item .\mydir
Invoke-Item .\test.txt
```

### Clear-Item

支持 Alias, Environment, Function, Registry, Variable providers，但是不支持 FileSystem provider。

没有 output。

## ItemProperty

文件和目录的属性

```powershell
Get-Command *ItemProperty*
```

```powershell
Get-ItemProperty $HOME | Format-List
```

查看全部属性


```powershell
Get-ItemPropertyValue $HOME -Name -LinkType
```

获取某个属性的值



## 其它 cmdlets

### Clear-RecycleBin

清空回收站，需要确认，`-Force` 不需要确认。

```powershell
Clear-RecycleBin -DriveLetter D
```

### New-TemporaryFile

创建临时文件，文件路径为 `$Env:Temp\tmpNNNN.tmp`，NNNN 是随机十六进制数字。

```powershell
$tempFile = New-TemporaryFile
```

## FAQ

### 判断是否为目录？

```powershell
(Get-Item $home) -is [System.IO.DirectoryInfo]
```

### 判断目录是否为空？

<https://www.petri.com/testing-empty-folders-with-powershell>

### 不打印 cmdlet 结果

cmdlet 返回值默认打印到 Console，怎么不打印？

```powershell
mkdir a | Out-Null
mkdir a *> $null # all outputs，见 redirection
```
