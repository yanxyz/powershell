# Script Blocks

```powershell
help about_Script_Blocks
```

脚本块，即 `{ statements }`。脚本块跟函数类似，可以调用，可以有参数，有返回值。
脚本块 System.Management.Automation.ScriptBlock 的一个示例，可以当作值。

```powershell
# 将一个脚本块赋值给一个变量
$a = {
     # 指定参数
    param (
         $uu = "Parameter"
    )

    #
    "$uu assigned."
}

# 调用脚本块
&$a # Parameter assigned.
&$a "Other value" # Other value assigned.
invoke-command -scriptblock $a
invoke-command -scriptblock $a -args "Other value"
```

