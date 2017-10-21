---
permalink: /lang/classes/
---

# PowerShell Classes

```powershell
about_Classes
```

PowerShell 5.0 开始支持 classes。建议先了解 [C# 的 classes 语法](../../csharp/lang/classes.md)。

```powershell
class Device {
    [string]$Brand

    [void] echo() {
        $this.$Brand
    }
}

$dev = [Device]::new()
$dev.Brand = "Microsoft"
```

class methods 跟 functions 最大的不同是，methods 由 return 语句返回值。

static 关键字声明 static members。

## hidden

```powershell
help about_Hidden
```

hidden 关键字隐藏 class members，意思是用户不必关心这些 members。

- Get-Member 只有使用 force 参数才能看见
- IntelliSense 不显示

hidden 不涉及 accessibility。

## 继承

```powershell
class BaseClass {
    [int]days() {return 1}
}
class ChildClass : BaseClass {
    # override BaseClass methods
    [int]days () {return 2}
    [int]basedays() {
        # invoke BaseClass methods
        return ([BaseClass]$this).days()
    }

}

[ChildClass]::new().days()      # 2
[ChildClass]::new().basedays()  # 1
```
