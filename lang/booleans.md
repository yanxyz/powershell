# PowerShell Booleans

PowerShell boolean type 有两个值：$true 和 $false。

PowerShell 自动转换类型，那么假值是哪些？

一，value types 转为 boolean

type | falsy | trusy
---- | ----- | ----
Null | $null |
Boolean | $false | $true
String  | ''     | 'abc'
Number  | 0      | 123

二，reference types 转为 boolean，结果怎样？

转为 IList

1. 若转换失败则返回 $true
1. 若是空列表 `[]` 则返回 $false
1. 若只包含一个元素，比如 `[0]`，`['']`，则取决于这个元素转换的结果
1. 其它情况返回 $true

注意：PowerShell 没有 `[]` 表示法，这里只是为了便于理解。

- [Casting Objects to Boolean in Powershell](http://blog.whatsupduck.net/2012/01/casting-objects-to-boolean-in.html)
