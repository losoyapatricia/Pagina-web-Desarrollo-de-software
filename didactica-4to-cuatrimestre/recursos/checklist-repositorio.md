# ✅ Checklist para Repositorios

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software

---

## 🎯 Propósito

Este checklist te ayuda a asegurar que tu repositorio de GitHub está bien organizado, documentado y listo para evaluación. Úsalo antes de entregar cualquier práctica o proyecto.

---

## 📋 Estructura del Repositorio

### Directorios Básicos
- [ ] `src/` - Código fuente de la aplicación
- [ ] `public/` - Archivos estáticos (imágenes, favicon, etc.)
- [ ] `node_modules/` - (NO incluir en Git, debe estar en .gitignore)
- [ ] `.gitignore` - Archivo que especifica qué no incluir en Git

### Estructura de src/
- [ ] `src/components/` - Componentes React reutilizables
- [ ] `src/routes/` - Rutas de la aplicación (TanStack Router)
- [ ] `src/hooks/` - Custom hooks personalizados
- [ ] `src/lib/` - Utilidades y funciones auxiliares
- [ ] `src/types/` - Definiciones de TypeScript (opcional)
- [ ] `src/assets/` - Imágenes y otros recursos (opcional)

---

## 📝 Archivos Esenciales

### Archivos de Configuración
- [ ] `package.json` - Dependencias y scripts del proyecto
- [ ] `tsconfig.json` - Configuración de TypeScript
- [ ] `vite.config.ts` - Configuración de Vite (si aplica)
- [ ] `tailwind.config.js` - Configuración de Tailwind CSS
- [ ] `.eslintrc.js` o `eslint.config.js` - Configuración de ESLint
- [ ] `.prettierrc` - Configuración de Prettier (opcional)

### Archivos de Documentación
- [ ] `README.md` - Documentación principal del proyecto (VER SECCIÓN DETALLADA ABAJO)
- [ ] `LICENSE` - Licencia del proyecto (opcional)
- [ ] `CHANGELOG.md` - Historial de cambios (opcional)
- [ ] `CONTRIBUTING.md` - Guía para contribuidores (opcional)

---

## 📖 README.md - Detalle Completo

### Sección 1: Portada
- [ ] Título del proyecto
- [ ] Nombre del estudiante
- [ ] Matrícula
- [ ] Grupo
- [ ] Materia
- [ ] Fecha
- [ ] Badge de versión (opcional)

### Sección 2: Descripción
- [ ] ¿Qué es el proyecto?
- [ ] ¿Qué problema resuelve?
- [ ] ¿Cuál es el propósito?
- [ ] Tecnologías utilizadas (con badges si es posible)

### Sección 3: Características
- [ ] Lista de funcionalidades principales
- [ ] Capturas de pantalla o GIFs demostrativos
- [ ] Enlace a demo en vivo (si aplica)

### Sección 4: Instalación
- [ ] Requisitos previos (Node.js versión, etc.)
- [ ] Pasos para clonar el repositorio
- [ ] Pasos para instalar dependencias (`npm install` o `bun install`)
- [ ] Pasos para ejecutar el proyecto (`npm run dev`)
- [ ] Comandos adicionales útiles (build, test, lint)

### Sección 5: Estructura del Proyecto
- [ ] Diagrama o lista de la estructura de carpetas
- [ ] Explicación breve de cada carpeta/archivo importante

### Sección 6: Uso
- [ ] Instrucciones de cómo usar la aplicación
- [ ] Ejemplos de casos de uso
- [ ] Capturas de paso a paso (si es complejo)

### Sección 7: Componentes (para proyectos React)
- [ ] Lista de componentes principales
- [ ] Breve descripción de cada componente
- [ ] Props que recibe (si es relevante)

### Sección 8: Desafíos y Soluciones
- [ ] Problemas enfrentados durante el desarrollo
- [ ] Cómo los resolviste
- [ ] Lecciones aprendidas

### Sección 9: Referencias
- [ ] Documentación consultada
- [] Recursos utilizados
- [ ] Créditos a librerías o componentes usados

### Sección 10: Contacto
- [ ] Correo electrónico del estudiante
- [ ] Enlace a LinkedIn (opcional)
- [ ] Enlace a GitHub (opcional)

---

## 🔄 Git y Commits

### Historial de Commits
- [ ] Commits son pequeños y atómicos (un cambio por commit)
- [ ] Mensajes de commit son descriptivos
- [ ] Mensajes de commit siguen convención (ver abajo)
- [ ] No hay commits con mensaje genérico ("update", "fix")
- [ ] Commits están en orden cronológico lógico

### Convención de Mensajes de Commit
Usa el formato: `tipo: descripción`

**Tipos comunes**:
- `feat`: nueva funcionalidad
- `fix`: corrección de error
- `docs`: cambios en documentación
- `style`: cambios en formato/estilo (no lógica)
- `refactor`: refactorización de código
- `test`: agregar o modificar tests
- `chore`: cambios en configuración, herramientas

**Ejemplos**:
- ✅ `feat: agregar formulario de registro`
- ✅ `fix: corregir error en validación de email`
- ✅ `docs: actualizar README con capturas`
- ❌ `update`
- ❌ `arreglar cosas`

### Branches (si aplica)
- [ ] Branch principal es `main` o `master`
- [ ] Branches de feature tienen nombres descriptivos (`feature/login`)
- [ ] No hay branches huérfanos sin fusionar
- [ ] Pull requests tienen descripción

---

## 🎨 Código y Calidad

### TypeScript
- [ ] Todo el código está tipado (sin `any` injustificado)
- [ ] Interfaces y types están bien definidos
- [ ] Props de componentes están tipadas
- [ ] No hay errores de TypeScript

### React
- [ ] Componentes son funcionales (no clases)
- [ ] Hooks se usan correctamente
- [ ] No hay estados innecesarios
- [ ] Componentes son reutilizables cuando es posible
- [ ] Key props están presentes en listas

### Tailwind CSS
- [ ] Clases de Tailwind se usan consistentemente
- [ ] No hay CSS personalizado innecesario
- [ ] Diseño es responsivo
- [ ] Colores y espaciados son consistentes

### ESLint
- [ ] No hay errores de ESLint
- [ ] Warnings mínimos (si los hay, explicar por qué)
- [ ] Código sigue las reglas de linting

### General
- [ ] Código está limpio y organizado
- [ ] Nombres de variables/funciones son descriptivos
- [ ] No hay código comentado innecesario
- [ ] No hay `console.log` en producción (eliminarlos)

---

## 📦 package.json

### Scripts
- [ ] `dev` - Script para desarrollo
- [ ] `build` - Script para producción
- [ ] `lint` - Script para linting
- [ ] `test` - Script para pruebas (si aplica)

### Dependencias
- [ ] Dependencias de producción están en `dependencies`
- [ ] Dependencias de desarrollo están en `devDependencies`
- [ ] No hay dependencias duplicadas
- [ ] No hay dependencias innecesarias

### Información General
- [ ] `name` es descriptivo
- [ ] `version` está actualizada
- [ ] `description` está presente
- [ ] `author` está presente (opcional)

---

## 🚀 Despliegue (si aplica)

### Plataformas
- [ ] Aplicación está desplegada (Vercel, Netlify, etc.)
- [ ] Enlace de despliegue está en README
- [ ] Build es exitoso en producción
- [ ] Variables de entorno están configuradas (si aplica)

### Optimización
- [ ] Bundle size es razonable
- [ ] Imágenes están optimizadas
- [ ] No hay warnings en build de producción

---

## 📊 Evaluación Final

### Antes de Entregar
- [ ] Revisar todo el checklist
- [ ] Hacer un build completo exitoso
- [ ] Probar la aplicación en modo producción
- [ ] Verificar que todos los enlaces en README funcionan
- [ ] Verificar que capturas de pantalla sean visibles
- [ ] Pedir a un compañero que revise tu repositorio

### Preguntas de Auto-Evaluación
- [ ] ¿Mi README explica claramente qué hace el proyecto?
- [ ] ¿Alguien sin conocimiento del proyecto puede instalarlo y ejecutarlo siguiendo el README?
- [ ] ¿Mi código sigue buenas prácticas?
- [ ] ¿Mis commits son descriptivos?
- [ ] ¿No hay información sensible (API keys, contraseñas) en el repositorio?

---

## 🔗 Recursos Útiles

### README Templates
- **Awesome README**: https://github.com/matiassingers/awesome-readme
- **README.so**: https://readme.so (generador de READMEs)
- **Make a README**: https://www.makeareadme.com

### Convenciones de Commit
- **Conventional Commits**: https://www.conventionalcommits.org
- **Commitlint**: https://commitlint.js.org

### Git Best Practices
- **GitHub Flow**: https://docs.github.com/en/get-started/quickstart/github-flow
- **Git Workflow**: https://www.atlassian.com/git/tutorials/comparing-workflows

---

## 📞 Dudas

Si tienes dudas sobre este checklist:
- **WhatsApp del docente**: 656 305 2299
- **Horario de atención**: [Especificar horario]

---

**Nota**: Un repositorio bien organizado y documentado es un reflejo de tu profesionalismo como desarrollador. ¡Tómate el tiempo de hacerlo bien! 🚀
