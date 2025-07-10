# SOLUÇÃO PARA PROBLEMA DE PREVIEW DO LINKEDIN

## Problema Identificado
O LinkedIn está mostrando uma imagem genérica em vez da nossa imagem personalizada ZowT.

## Causa Provável
1. **Cache persistente do LinkedIn** - O LinkedIn mantém cache de imagens por 7 dias
2. **Preferência por PNG** - Algumas plataformas sociais preferem PNG sobre SVG
3. **Histórico de imagens** - Pode haver uma imagem PNG antiga em cache

## Soluções Implementadas

### 1. Novo arquivo SVG criado
- Nome: `zowt-preview-2025.svg`
- Localização: `/assets/zowt-preview-2025.svg`
- Meta tags atualizadas no index.html

### 2. URLs para testar
- **Nova imagem**: https://zowt.onrender.com/assets/zowt-preview-2025.svg
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 3. Próximos passos recomendados

#### Opção A: Forçar refresh no LinkedIn
1. Acesse: https://www.linkedin.com/post-inspector/
2. Cole a URL: https://zowt.onrender.com
3. Clique em "Inspect"
4. Aguarde o LinkedIn processar a nova imagem

#### Opção B: Criar versão PNG
1. Acesse: https://svgtopng.com/
2. Faça upload do arquivo SVG
3. Baixe a versão PNG (1200x630)
4. Substitua a imagem SVG pela PNG

### 4. Verificação
Após executar uma das opções acima, teste compartilhando a URL no LinkedIn para verificar se a imagem aparece corretamente.

## Arquivos Modificados
- `scripts/render-deploy/client/index.html` - Meta tags atualizadas
- `scripts/render-deploy/client/public/assets/zowt-preview-2025.svg` - Nova imagem criada