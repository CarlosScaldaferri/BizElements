# Script para corrigir imports e referências internas de componentes
$componentsPath = "packages\ui\src\components"

# Função para corrigir imports e referências
function Fix-InternalReferences {
    param([string]$FilePath)
    
    $content = Get-Content -Path $FilePath -Raw
    $originalContent = $content
    
    # Corrigir imports de outros componentes Biz
    $content = $content -replace 'import\s+\{\s*([^}]*?)Biz(\w+)([^}]*?)\s*\}\s+from\s+"([^"]+)/biz-(\w+)/Biz\w+"', 'import { $1$2$3 } from "$4/$5/$2"'
    
    # Corrigir referencias diretas a componentes Biz
    $content = $content -replace '<Biz(\w+)', '<$1'
    $content = $content -replace '</Biz(\w+)>', '</$1>'
    
    # Corrigir imports com paths antigos
    $content = $content -replace '@/components/biz-(\w+)/Biz\w+', '@/components/$1/$1'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $FilePath -Value $content -NoNewline
        Write-Host "Fixed internal references in: $FilePath"
    }
}

# Processar todos os arquivos tsx recursivamente
Get-ChildItem -Path $componentsPath -Filter "*.tsx" -Recurse | ForEach-Object {
    Fix-InternalReferences -FilePath $_.FullName
}

Write-Host "Internal references fix completed!"
