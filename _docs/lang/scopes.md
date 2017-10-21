---
permalink: /lang/scopes/
---

# PowerShell 作用域

```powershell
help about_Scopes
```

variables, aliases, functions, drives 有作用域。下文主要说变量，不过对于其它 items 同样适用。

## scope 的层级

Scopes 是分层的，最顶端是 Global scope，下一级是 Script scope，再下一级是函数创建的 scope。函数可以嵌套，嵌套函数又创建下一级 scope。

Local scope 是创建变量的 scope，它不是 Global scope 的反义，可以理解为 home scope。比如在 Console 中创建的变量，它的 Local scope 是 Global scope。

Private scope，意思是只能在变量的 Local scope 中访问它，在 child scopes 中不能访问它。

上面提到的 Global, Local, Script, Private scopes 是 absolute scopes，因为可以用 scope modifiers 直接引用。Scopes 也有对应的数字，数字是相对于 Local scope，Local scope 是 0，parent scope 是 1，依此类推。

两条规则

- 只能变量的 Local scope 及其 child scopes 内访问它。对于 Private scope，只能在它的 Local scope 内访问。
- 只能在变量的 Local scope 内修改它，除非指定了 scope。

```powershell
$test = 'Script Scope'
Function Foo {
    $test = 'Function Scope'
    Write-Host $Global:test
    Write-Host $Script:test
    Write-Host $Local:test
    Write-Host (Get-Variable -Name test -ValueOnly -Scope 0)
    Write-Host (Get-Variable -Name test -ValueOnly -Scope 1)
}
Foo
```

在 Console 中定义的变量，automatic variables，preference variables，profiles 定义的变量都位于 Global scope 中。

## scope modifiers

上面提到四个 absolute scopes，它们对应的 scope modifiers 是 Global, Local, Script, Private。

变量默认使用 local modifier。

```powershell
$global:a = 'a'
$script:b = 'b'
$private:c = 'c'

function global:Hello { write-host "Hello, World" }
```

### Using

Using 是特殊的 scope modifier，用于引用远程命令中的变量。

```powershell
about_Remote_Variables
```

### AllScope

variables 和 aliases 有一个 `Option` property，它可以取值 `AllScope`。


## 管理 scope

一些 cmdlets 有 Scope 参数

```powershell
get-help * -parameter scope
```

```powershell
new-variable -scope global -name a -value "One"
new-alias -scope global -name np -value Notepad.exe
```

获取相关作用域中的 variables, aliases

```powershell
Get-Variable -scope local
Get-Alias -scope global
```

functions 用 Get-Item 查找，不过不能使用 scope 参数。

dot-sourced notion `.`，会将 Script scope 合并到 Global scope。`&` 是调用其它脚本，不会引入。

```powershell
. test.ps1
& test.ps1
```

variables(New-Variable, Set-Variable) 和 aliases(New-Alias, Set-Alias) 可以使用 Option 参数，这个参数其中一个值为 private。


## 参考

- [The PowerShell variable scope – 4sysops](https://4sysops.com/archives/the-powershell-variable-scope/)
- [very personal code: One character drama](http://personal-code.blogspot.com/2012/08/one-character-drama.html)
