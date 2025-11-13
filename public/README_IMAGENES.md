# Instrucciones para Agregar Imágenes

## Logo de Seguros del Estado

Para agregar el logo oficial:

1. Descarga el logo desde el sitio original: https://www.segurosdelestado.com/
   - Inspecciona el elemento del logo en el navegador
   - O descarga desde: https://www.segurosdelestado.com/assets/images/logo.png (o similar)

2. Guarda el logo en esta carpeta (`public/`) con el nombre:
   - `logo.png` o `logo.svg` (preferible SVG)

3. El código ya está configurado para usar `/logo.png` o `/logo.svg`

## Imágenes de Productos

Las imágenes de productos se pueden obtener desde:
- El sitio original: https://www.segurosdelestado.com/
- Inspecciona las imágenes en el navegador y descárgalas
- Guárdalas en `public/productos/`

## Fondos y Elementos Visuales

Los fondos y elementos visuales se pueden extraer del sitio original usando las herramientas de desarrollo del navegador.

## Estructura Recomendada

```
public/
├── logo.png (o logo.svg)
├── logo-white.png (para fondos oscuros)
├── productos/
│   ├── autos-livianos.jpg
│   ├── seguros-vida.jpg
│   ├── seguros-generales.jpg
│   └── ...
├── noticias/
│   ├── congreso-cumplimiento.jpg
│   ├── cambio-climatico.jpg
│   └── ...
└── backgrounds/
    └── hero-background.jpg
```

## Cómo Extraer Imágenes del Sitio Original

1. Abre https://www.segurosdelestado.com/ en Chrome/Firefox
2. Presiona F12 para abrir las herramientas de desarrollo
3. Ve a la pestaña "Network" y filtra por "Img"
4. Recarga la página
5. Busca las imágenes que necesitas
6. Haz clic derecho en la imagen → "Open in new tab"
7. Guarda la imagen en la carpeta correspondiente

## Nota Legal

Asegúrate de tener los derechos para usar estas imágenes o que sean de uso público.

