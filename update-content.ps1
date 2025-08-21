# Script para atualizar conteúdo dos arquivos TSX removendo prefixo Biz
$componentsPath = "packages\ui\src\components"

# Função para renomear componentes no conteúdo dos arquivos
function Update-ComponentContent {
    param(
        [string]$FilePath,
        [string]$ComponentName
    )
    
    $content = Get-Content -Path $FilePath -Raw
    
    # Substituir function Biz... por function ...
    $content = $content -replace "function Biz$ComponentName", "function $ComponentName"
    
    # Substituir outras funções relacionadas (como BizButtonProps, etc.)
    $content = $content -replace "function Biz($ComponentName\w*)", 'function $1'
    
    # Substituir exports
    $content = $content -replace "export \{ (Biz\w+(?:,\s*Biz\w+)*) \}", {
        param($match)
        $exports = $match.Groups[1].Value -split ',\s*' | ForEach-Object { $_.Trim() -replace '^Biz', '' }
        "export { $($exports -join ', ') }"
    }
    
    # Substituir const declarations
    $content = $content -replace "const Biz($ComponentName\w*)", 'const $1'
    
    Set-Content -Path $FilePath -Value $content -NoNewline
    Write-Host "Updated content in: $FilePath"
}

# Lista de componentes com seus nomes em PascalCase
$components = @{
    "avatar" = "Avatar"
    "button" = "Button" 
    "calendar" = "Calendar"
    "card" = "Card"
    "checkbox" = "Checkbox"
    "form" = "Form"
    "input" = "Input"
    "label" = "Label"
    "popover" = "Popover"
    "progress" = "Progress"
    "radio-group" = "RadioGroup"
    "select" = "Select"
    "slider" = "Slider"
    "sonner" = "Sonner"
    "switch" = "Switch"
    "textarea" = "Textarea"
    "tooltip" = "Tooltip"
}

foreach ($componentDir in $components.Keys) {
    $componentName = $components[$componentDir]
    $componentPath = Join-Path $componentsPath $componentDir
    
    if (Test-Path $componentPath) {
        Write-Host "Processing $componentDir..."
        
        # Atualizar arquivo TSX principal
        $tsxFile = Join-Path $componentPath "$componentName.tsx"
        if (Test-Path $tsxFile) {
            Update-ComponentContent -FilePath $tsxFile -ComponentName $componentName
        }
        
        # Atualizar arquivo Stories
        $storiesFile = Join-Path $componentPath "$componentName.stories.tsx"
        if (Test-Path $storiesFile) {
            Update-ComponentContent -FilePath $storiesFile -ComponentName $componentName
        }
    }
}

Write-Host "Content update completed!"
