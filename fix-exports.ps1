# Script para corrigir exports nos arquivos de componentes
$componentsPath = "packages\ui\src\components"

# Lista de componentes
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
            $content = Get-Content -Path $tsxFile -Raw
            
            # Substituir exports que começam com Biz
            $content = $content -replace "export\s+\{\s*Biz([^}]+)\s*\}", 'export { $1 }'
            
            # Remover Biz dos exports individuais
            $content = $content -replace "Biz($componentName\w*)", '$1'
            
            Set-Content -Path $tsxFile -Value $content -NoNewline
            Write-Host "  Updated exports in: $tsxFile"
        }
    }
}

Write-Host "Export updates completed!"
