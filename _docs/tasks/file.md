---
permalink: /file/
---

# PowerShell 文件操作

文件读写的方法有多种，关键是编码问题。

## Content

```powershell
Get-Command *content
```

### Get-Content

```powershell
$a = Get-Content test.txt
$a.GetType()
```

Get-Content 返回一个数组，包含每行文本。

选项

- `-TotalCount`，别名 Head，默认值为 -1，表示读取所有的行。
- `-Tail` 最后几行
- `-ReadCount` 每次读几行，默认值为 1。0 表示一次读完。

```powershell
$a =

```

## Set-Content

文件写入内容有多种方式

```powershell
Set-Content Set-Content.txt -Value "hello 你好"
New-Item newitem.txt -Value "hello 你好"
"hello 你好" > 'redirection.txt'
"hello 你好" | Out-File 'outfile.txt'
```

- New-Item，编码为 UTF8。
- Set-Content，`-Encoding` 指定编码，默认编码为 ANSI(中文系统为 GBK)。
- Redirection，编码为 Unicode(UTF16 LE BOM)。
- Out-File，`-Encoding` 指定编码，默认编码为 Unicode(UTF16 LE BOM)。

<https://docs.google.com/spreadsheets/d/1QnD8AQnNkgcdwgrJyt8Z8DC3me85m_HgaY3LoCbi1us/>

如果脚本包含中文（即使是注释），脚本编码应使用 GBK 或 UTF8 BOM，不然会出现乱码或解析错误。

## Select-String

```powershell
Select-String *.txt -pattern "hello world" | Format-List
```

搜索当前目录下 txt 文件包含 "hello world" 的行。

```powershell
Select-String *.txt -pattern "hello world" | Select-Object Filename
```

同上，只显示文件名。


### Copy-Item

```powershell
Copy-Item a.txt -Destination b.txt
```

复制文件：

- 若 Destination 不存在则复制到它的位置（即创建 Destination ）。
- 若 Destination 存在
    - 若 Destination 是文件则抛出错误。
    - 若 Destination 是目录则复制到它下面，若 Destination 下有同名文件则抛出错误。
    - 若指定选项 `-Force` 则强制覆盖。
- 没有返回对象，除非指定选项 `-PassThru`。


```powershell
Copy-Item "index.md" "dist"  # A
Copy-Item "index.md" "dist\" # B
```

若 Destination 不存在：
A 中 `dist` 视为文件，`index.md` 复制为 "dist"。
B 中 `dist\` 视为目录, 这个目录不存在，抛出错误。

### Move-Item

```powershell
Move-Item a.txt -Destination b.txt
```

移动文件

- 若 Destination 不存在则移动到它的位置（即创建 Destination ）。
- 若 Destination 存在
    - 若 Destination 是文件则抛出错误。
    - 若 Destination 是目录则复制到它下面，若 Destination 下有同名文件则抛出错误。
- 没有返回对象，除非指定选项 `-PassThru`。


### Remove-Item

```powershell
Rename-Item a.txt -NewName a.txt~
```

`Remove-Item file`
删除文件

`Remove-Item file1, file2`
删除多个文件

```powershell
Get-ChildItem * -Include *.csv -Recurse | Remove-Item
```

## Rename-Item

```powershell
Rename-Item a.txt -NewName a.txt~
```

重命名

- NewName 如果是路径则要在同一目录下
- 没有返回对象，除非指定选项 `-PassThru`。

```powershell
Get-ChildItem *.txt | Rename-Item -NewName { $_.name -Replace '\.txt','.log' }
```

将目录下所有的 txt 文件改为 log 文件。`-Replace` 操作符第一个参数是正则表达式，`\.` 为转义。

