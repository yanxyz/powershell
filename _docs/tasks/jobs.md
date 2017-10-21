---
permalink: /jobs/
---

# PowerShell jobs

```powershell
help about_Jobs
help about_Job_Details
help about_Remote_Jobs
```

background jobs 在后台运行命令。

相关 cmdlets

```powershell
Get-Command *job
```

```powershell
$job = Start-Job -ScriptBlock {Get-Process}
Get-Job
$results = Receive-Job -Job $job
Wait-Job -ID 10 -Timeout 120
$job | Stop-Job
Remove-Job -Job $job
```

Get-Job 获取所有的 job。job 的状态："running", "Complete", "Failed"。

Receive-Job 获取 job 结果。默认清空上次获得的结果，只返回这次获得的结果。

- Keep 参数，保留所有的结果
- Wait 参数，让 shell 等待 job 完成，效果类似于 Wait-Job。

查找 jobs 失败的原因

```powershell
$job = Start-Job -ScriptBlock {New-Item -Path HKLM:\Software\MyCompany}
$job.ChildJobs[0].JobStateInfo.Reason
```

## remote

```powershell
help about_Remote_Jobs
```

在远程电脑上运行 jobs。
