
Get-Service | Where-Object {$_.status -eq "running"}

Get-Service | Sort-Object status,displayname | Where-Object {$_.status -eq "running"}




Stop-Service BITS
Stop-Service CDPSvc
Stop-Service DiagTrack
Stop-Service HomeGroupProvider
Stop-Service AppXSvc
Stop-Service UsoSvc
Stop-Service Audiosrv
Stop-Service AudioEndPointBuilder
Stop-Service TabletInputService
Stop-Service WlanSvc

Stop-Service WinDefend
Stop-Service WdNisSvc
