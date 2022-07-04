# TinyMCE for Universal Dashboard

This component integrates the TinyMCE React component into Universal Dashboard. 

## Installation 

```powershell
Install-Module UniversalDashboard.TinyMCE
```

## Usage

```powershell
New-UDTinyMCE
```

## Parameters 

- `ApiKey` - TinyMCE API Key
- `Init` - Hashtable of TinyMCE [initialization options](https://www.tiny.cloud/docs/tinymce/6/basic-setup/)
- `InitialValue` - The initial value of the editor
- `OnEditorChange` - An event handler that receives the value of the editor when it changes