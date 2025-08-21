# Script para renomear todos os arquivos removendo o prefixo Biz
$componentsPath = "packages\ui\src\components"

# Lista de componentes
$components = @(
    "button", "calendar", "card", "checkbox", "form", 
    "input", "label", "popover", "progress", "radio-group", 
    "select", "slider", "sonner", "switch", "textarea", "tooltip"
)

foreach ($component in $components) {
    $componentPath = Join-Path $componentsPath $component
    if (Test-Path $componentPath) {
        Write-Host "Processing $component..."
        
        # Converter nome do componente para PascalCase
        $componentName = $component -replace '-(.)', { $_.Groups[1].Value.ToUpper() }
        $componentName = $componentName.Substring(0,1).ToUpper() + $componentName.Substring(1)
        
        # Renomear arquivos .tsx
        $oldFile = Join-Path $componentPath "Biz$componentName.tsx"
        $newFile = Join-Path $componentPath "$componentName.tsx"
        if (Test-Path $oldFile) {
            Rename-Item $oldFile $newFile
            Write-Host "  Renamed Biz$componentName.tsx to $componentName.tsx"
        }
        
        # Renomear arquivos .stories.tsx
        $oldStoryFile = Join-Path $componentPath "Biz$componentName.stories.tsx"
        $newStoryFile = Join-Path $componentPath "$componentName.stories.tsx"
        if (Test-Path $oldStoryFile) {
            Rename-Item $oldStoryFile $newStoryFile
            Write-Host "  Renamed Biz$componentName.stories.tsx to $componentName.stories.tsx"
        }
    }
}

Write-Host "File renaming completed!"
