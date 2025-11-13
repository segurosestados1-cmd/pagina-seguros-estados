# Estructura de Imágenes Locales

## 📁 Estructura de Carpetas

```
public/
├── logo.png (o logo.svg)          # Logo principal de Seguros del Estado
├── logo-white.png                 # Logo para fondos oscuros (opcional)
├── productos/
│   ├── autos-livianos.jpg
│   ├── seguros-vida.jpg
│   ├── seguros-generales.jpg
│   ├── seguros-cumplimiento.jpg
│   ├── autos-pesados.jpg
│   └── seguros-obligatorios.jpg
├── noticias/
│   ├── congreso-cumplimiento.jpg
│   ├── cambio-climatico.jpg
│   └── decada-cumplimiento.jpg
└── backgrounds/
    └── hero-bg.jpg                # Fondo del hero section
```

## 📥 Cómo Obtener las Imágenes

### Método 1: Desde el Sitio Original (Recomendado)

1. **Abre el sitio original:**
   - Ve a: https://www.segurosdelestado.com/

2. **Abre las herramientas de desarrollo:**
   - Presiona `F12` o clic derecho → "Inspeccionar"
   - Ve a la pestaña "Network" (Red)

3. **Filtra las imágenes:**
   - En el filtro, escribe "Img" o selecciona "Img"
   - Recarga la página (F5)

4. **Descarga las imágenes:**
   - Busca las imágenes que necesitas
   - Haz clic derecho en la imagen → "Open in new tab"
   - Guarda la imagen (Ctrl+S)

5. **Organiza las imágenes:**
   - Logo: Guarda como `public/logo.png` o `public/logo.svg`
   - Productos: Guarda en `public/productos/nombre-producto.jpg`
   - Noticias: Guarda en `public/noticias/nombre-noticia.jpg`
   - Fondos: Guarda en `public/backgrounds/hero-bg.jpg`

### Método 2: Inspeccionar Elemento Específico

1. **Inspecciona el elemento:**
   - Clic derecho en el logo/imagen → "Inspeccionar"
   - En el código, busca la URL de la imagen (src="...")

2. **Obtén la URL completa:**
   - Si es relativa, agrega el dominio: `https://www.segurosdelestado.com/`
   - Copia la URL completa

3. **Descarga la imagen:**
   - Pega la URL en una nueva pestaña
   - Guarda la imagen en la carpeta correspondiente

## 🖼️ Imágenes Necesarias

### Logo Principal
- **Ubicación:** `public/logo.png` o `public/logo.svg`
- **Tamaño recomendado:** Ancho máximo 200px, altura automática
- **Formato:** PNG (con transparencia) o SVG (preferible)

### Imágenes de Productos
Todas en `public/productos/`:
- `autos-livianos.jpg`
- `seguros-vida.jpg`
- `seguros-generales.jpg`
- `seguros-cumplimiento.jpg`
- `autos-pesados.jpg`
- `seguros-obligatorios.jpg`

**Tamaño recomendado:** 400x250px o similar proporción

### Imágenes de Noticias
Todas en `public/noticias/`:
- `congreso-cumplimiento.jpg`
- `cambio-climatico.jpg`
- `decada-cumplimiento.jpg`

**Tamaño recomendado:** 400x200px o similar proporción

### Fondos
En `public/backgrounds/`:
- `hero-bg.jpg` - Fondo del hero section

**Tamaño recomendado:** 1920x1080px o similar (se ajustará automáticamente)

## ✅ Verificación

Una vez que agregues las imágenes:

1. **Ejecuta el proyecto:**
   ```bash
   npm run dev
   ```

2. **Verifica que las imágenes se carguen:**
   - Abre http://localhost:3000
   - Revisa que el logo aparezca en el header
   - Verifica que las imágenes de productos se muestren
   - Comprueba que las imágenes de noticias se vean

3. **Si una imagen no se carga:**
   - Verifica que el nombre del archivo coincida exactamente
   - Asegúrate de que esté en la carpeta correcta
   - Revisa que la extensión del archivo sea correcta (.jpg, .png, .svg)

## 📝 Notas

- Los nombres de archivo son **case-sensitive** (sensibles a mayúsculas/minúsculas)
- Asegúrate de usar las extensiones correctas (.jpg, .png, .svg)
- Si una imagen no existe, se mostrará un placeholder o se ocultará
- Las imágenes se optimizan automáticamente en producción

## 🔄 Actualizar Imágenes

Para actualizar una imagen:
1. Reemplaza el archivo en la carpeta correspondiente
2. Mantén el mismo nombre de archivo
3. Recarga la página (o reinicia el servidor si es necesario)

