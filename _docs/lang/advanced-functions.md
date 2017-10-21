---
permalink: /lang/advanced-functions/
---

# PowerShell Advanced Functions

```powershell
help about_Functions_Advanced
help about_Functions_CmdletBindingAttribute
help about_Functions_OutputTypeAttribute
help about_Functions_Advanced_Methods
```

高级函数的功能类似于 cmdlets，可以理解为用 PowerShell Script 实现的 cmdlets。

以这篇文章里面的脚本为例
<https://www.petri.com/testing-empty-folders-with-powershell>

`[cmdletbinding()]`


`[OutputType([String])]`

```powershell
function Send-Greeting {
    [CmdletBinding()]
    [OutputType([String])]

    Param(
        [Parameter(Mandatory=$true)]
        [string] $Name
    )

    Process {
        write-host ("Hello " + $Name + "!")
    }
}

(Get-Command Send-Greeting).OutputType

```


stage | cmdlet |  advanced function
----  | ----   |
create pipeline | BeginProcessing() method | Begin block
emit a object | ProcessRecord() method  | Process block
finish | EndProcessing() method | End block



