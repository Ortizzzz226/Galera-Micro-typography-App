# Galera · app instalable

Esta carpeta es Galera como app web instalable (PWA). Funciona en iPhone, iPad, Windows y Mac. Después de abrirla una vez, funciona sin internet.

## Publicarla en GitHub Pages (gratis, una sola vez)

1. Crea una cuenta en github.com si no tienes.
2. Arriba a la derecha: **+ → New repository**. Nombre: `galera`. Público. **Create repository**.
3. En la página del repositorio: **uploading an existing file**. Arrastra **todo el contenido** de esta carpeta: `index.html`, `sw.js`, `manifest.webmanifest`, `LEEME.md` y las carpetas `icons` y `vendor`. No arrastres la carpeta que lo contiene. Luego haz clic en **Commit changes**.
4. Ve a **Settings → Pages**. En *Branch* elige `main` y `/ (root)`. Luego **Save**.
5. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/galera/`.

## Instalarla

- **iPhone o iPad:** abre el enlace en **Safari**. Toca **Compartir → Agregar a pantalla de inicio**.
- **Windows:** abre el enlace en **Edge** o **Chrome**. En la barra de direcciones toca el ícono de instalar, o ve a menú **⋯ → Aplicaciones → Instalar Galera**.
- **Mac:** en Safari, **Archivo → Agregar al Dock**. En Chrome, el ícono de instalar.

## Actualizarla

1. En el repositorio: **Add file → Upload files**.
2. Arrastra los archivos nuevos. Casi siempre basta con `index.html` y `sw.js`.
3. Haz clic en **Commit changes**.

En uno o dos minutos la versión nueva está publicada. Cada persona la recibe sola la próxima vez que abra la app con internet, sin reinstalar nada. La versión instalada aparece al final del menú ☰.

## Tus proyectos

- Se guardan en cada dispositivo, dentro de la app. Actualizar la app no los borra.
- Si borras el ícono de la app, se borran sus proyectos. Antes de hacerlo, usa **☰ → Exportar todos**.
- Para pasar proyectos a otro dispositivo o a esta app: en la otra Galera usa **☰ → Copiar todos**, y aquí **☰ → Pegar** e **Importar texto**. También sirve **Exportar** (archivo `.galera`) e **Importar…**.

## Diferencias con la versión dentro de Claude

- No tiene «Sugerir sinónimos», porque eso lo hace Claude.
- Los proyectos no se sincronizan solos entre dispositivos. Para pasarlos se usa Copiar todos y Pegar.
- No necesita cuenta de Claude: cualquiera con el enlace puede usarla.
