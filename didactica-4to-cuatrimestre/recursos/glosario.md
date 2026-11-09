# 📖 Glosario de Términos

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software

---

## 🎯 Fundamentos de Programación

### Algoritmo
Una secuencia ordenada y finita de pasos que resuelve un problema específico. Es la base de cualquier programa de computadora.

**Ejemplo**: Una receta de cocina es un algoritmo: pasos ordenados para preparar un platillo.

---

### Pseudocódigo
Lenguaje de programación ficticio que utiliza expresiones del lenguaje natural para describir algoritmos. Sirve como puente entre el lenguaje humano y el código real.

**Ejemplo**:
```
LEER numero
SI numero es par ENTONCES
  ESCRIBIR "Es par"
SINO
  ESCRIBIR "Es impar"
```

---

### Diagrama de Flujo
Representación gráfica de un algoritmo que utiliza símbolos estándar para mostrar el flujo de datos y el control del programa.

**Símbolos principales**:
- ◯ Inicio/Fin
- ▱ Entrada/Salida
- ▭ Proceso
- ◇ Decisión

---

### Variable
Espacio de memoria que almacena un valor que puede cambiar durante la ejecución del programa. Tiene un nombre y un tipo de dato.

**Ejemplo**: `edad = 25` (variable llamada "edad" con valor 25)

---

### Constante
Valor que no cambia durante la ejecución del programa. Se declara una vez y mantiene su valor.

**Ejemplo**: `PI = 3.14159` (el valor de PI nunca cambia)

---

### Tipo de Dato
Clasificación de datos que determina qué valores puede tener una variable y qué operaciones se pueden realizar.

**Tipos comunes**:
- `string`: texto ("Hola")
- `number`: número (42, 3.14)
- `boolean`: verdadero/falso (true, false)
- `array`: lista de valores [1, 2, 3]
- `object`: colección de datos {nombre: "Juan"}

---

## 💻 Desarrollo Web

### HTML (HyperText Markup Language)
Lenguaje de marcado que define la estructura y contenido de una página web. Es el "esqueleto" de una página.

**Ejemplo**: `<h1>Título</h1>` define un encabezado.

---

### CSS (Cascading Style Sheets)
Lenguaje de estilos que define la apariencia y presentación de una página web. Es el "maquillaje" de una página.

**Ejemplo**: `color: red;` hace que el texto sea rojo.

---

### JavaScript
Lenguaje de programación que agrega interactividad y comportamiento dinámico a las páginas web. Es el "cerebro" de una página.

**Ejemplo**: `alert("Hola")` muestra una alerta al usuario.

---

### Framework
Colección de herramientas y librerías pre-construidas que facilitan el desarrollo de aplicaciones. Proporciona estructura y convenciones.

**Ejemplos**: React, Angular, Vue (para frontend); Express, Django (para backend).

---

### Librería
Conjunto de funciones y código pre-escrito que puedes usar en tu proyecto. Es más flexible que un framework.

**Ejemplos**: Lodash (utilidades), Moment.js (fechas).

---

## ⚛️ React

### Componente
Bloque de construcción fundamental en React. Es una función que devuelve JSX (HTML-like) y puede tener su propio estado y lógica.

**Ejemplo**:
```tsx
function Button() {
  return <button>Click me</button>;
}
```

---

### Props (Properties)
Datos que se pasan de un componente padre a un componente hijo. Son inmutables (no pueden cambiar).

**Ejemplo**: `<Button text="Enviar" />` (text es una prop).

---

### State (Estado)
Datos internos de un componente que pueden cambiar con el tiempo. Cuando el estado cambia, el componente se re-renderiza.

**Ejemplo**: `const [count, setCount] = useState(0)`

---

### Hook
Función especial que te permite "enganchar" (hook) características de React en componentes funcionales.

**Hooks comunes**:
- `useState`: para manejar estado
- `useEffect`: para efectos secundarios
- `useContext`: para consumir contexto
- `useRef`: para referencias a DOM

---

### JSX
Extensión de sintaxis de JavaScript que permite escribir HTML-like dentro de JavaScript. React lo transforma a código real.

**Ejemplo**: `const element = <h1>Hola mundo</h1>;`

---

### Virtual DOM
Copia ligera del DOM real que React mantiene en memoria. React actualiza el Virtual DOM primero, luego compara con el DOM real y solo actualiza lo necesario (mejora el rendimiento).

---

### Renderizado
Proceso de convertir componentes React en elementos HTML que el navegador puede mostrar. Ocurre cuando el estado o las props cambian.

---

## 🎨 Tailwind CSS

### Utility-First
Enfoque de diseño donde usas clases de utilidad predefinidas para construir interfaces en lugar de escribir CSS personalizado.

**Ejemplo**: `class="flex p-4 bg-blue-500"` en lugar de escribir CSS.

---

### Responsive Design
Diseño que se adapta a diferentes tamaños de pantalla (móvil, tablet, desktop). Tailwind usa prefijos como `md:`, `lg:`.

**Ejemplo**: `class="text-sm md:text-lg lg:text-xl"`

---

### Breakpoint
Punto en el que el diseño cambia para adaptarse a un tamaño de pantalla diferente.

**Breakpoints de Tailwind**:
- `sm`: 640px (móvil grande)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (desktop grande)

---

## 🗺️ Routing

### Router
Sistema que maneja la navegación entre diferentes páginas o vistas de una aplicación sin recargar la página (Single Page Application).

**Ejemplo**: TanStack Router, React Router.

---

### Route (Ruta)
Definición de qué componente mostrar para una URL específica.

**Ejemplo**: `/about` muestra el componente AboutPage.

---

### Navigation
Acción de moverse entre diferentes rutas de la aplicación.

**Ejemplo**: Hacer clic en un enlace de "Inicio" navega a `/`.

---

## 🔄 Gestión de Estado

### Global State
Estado que es compartido por múltiples componentes en toda la aplicación. Requiere herramientas específicas para gestionarlo.

**Herramientas**: Context API, Redux, Zustand.

---

### Local State
Estado que es usado por un solo componente y no se comparte con otros.

**Ejemplo**: Un formulario que maneja su propio estado.

---

### Props Drilling
Problema que ocurre cuando tienes que pasar props a través de múltiples niveles de componentes que no las necesitan.

**Solución**: Context API o librerías de estado global.

---

## 🧪 Testing

### Unit Test
Prueba que verifica una unidad individual de código (una función, un componente) de forma aislada.

**Ejemplo**: Probar que una función suma correctamente dos números.

---

### Integration Test
Prueba que verifica cómo múltiples unidades trabajan juntas.

**Ejemplo**: Probar que un componente interactúa correctamente con un hook.

---

### End-to-End (E2E) Test
Prueba que simula el comportamiento de un usuario real navegando por la aplicación.

**Ejemplo**: Probar que un usuario puede registrarse, iniciar sesión y crear una tarea.

---

## 🔄 Git y GitHub

### Repository (Repositorio)
Almacenamiento de un proyecto que incluye todos los archivos y el historial de cambios.

**Tipos**: Local (en tu computadora), Remote (en GitHub).

---

### Commit
Acción de guardar cambios en el repositorio con un mensaje descriptivo. Cada commit es un punto en el historial.

**Ejemplo**: `git commit -m "Agregar formulario de registro"`

---

### Branch (Rama)
Versión paralela del repositorio que permite trabajar en funcionalidades sin afectar la rama principal.

**Ejemplo**: `feature/login` para trabajar en la funcionalidad de login.

---

### Pull Request (PR)
Solicitud para fusionar cambios de una branch a otra. Permite revisión del código antes de integrarlo.

**Ejemplo**: PR para fusionar `feature/login` a `main`.

---

### Merge
Acción de combinar cambios de una branch en otra.

**Ejemplo**: `git merge feature/login` fusiona la branch de login en la actual.

---

### Conflict
Situación que ocurre cuando Git no puede fusionar cambios automáticamente porque hay modificaciones contradictorias en el mismo archivo.

**Solución**: Resolver manualmente los conflictos.

---

## 🎯 Metodologías Ágiles

### Agile
Enfoque de desarrollo de software que enfatiza la iteración rápida, colaboración y flexibilidad para adaptarse a cambios.

**Principios**: Working software over comprehensive documentation.

---

### Scrum
Framework ágil para gestionar proyectos complejos. Divide el trabajo en Sprints (ciclos cortos de 2-4 semanas).

**Elementos**: Roles (PO, Scrum Master, Team), Eventos (Daily, Review, Retrospective), Artefactos (Backlog).

---

### Sprint
Periodo de tiempo fijo (generalmente 2-4 semanas) en el que el equipo trabaja para completar un conjunto de tareas del Product Backlog.

**Resultado**: Un incremento de software funcional y potencialmente entregable.

---

### Product Backlog
Lista priorizada de todas las características, requisitos y mejoras deseadas para el producto. Es un documento vivo que evoluciona.

**Ejemplo**: Lista de todas las funcionalidades de una app de tareas.

---

### Sprint Backlog
Subconjunto del Product Backlog que el equipo se compromete a completar durante un Sprint específico.

**Ejemplo**: 5 funcionalidades que se completarán en las próximas 2 semanas.

---

### User Story
Descripción corta y simple de una funcionalidad desde la perspectiva del usuario.

**Formato**: "Como [rol], quiero [acción], para [beneficio]"

**Ejemplo**: "Como usuario, quiero iniciar sesión, para acceder a mi cuenta."

---

### MoSCoW
Método de priorización que clasifica requisitos en cuatro categorías.

- **MUST**: Debe tener (crítico)
- **SHOULD**: Debería tener (importante)
- **COULD**: Podría tener (deseable)
- **WON'T**: No tendrá (fuera de alcance)

---

## 🌐 Otros Términos

### API (Application Programming Interface)
Conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.

**Ejemplo**: REST API, GraphQL API.

---

### JSON (JavaScript Object Notation)
Formato ligero de intercambio de datos fácil de leer y escribir. Es el estándar para APIs.

**Ejemplo**: `{"nombre": "Juan", "edad": 25}`

---

### DOM (Document Object Model)
Representación en árbol de la estructura HTML de una página web. JavaScript puede manipular el DOM para cambiar la página dinámicamente.

---

### HTTP (Hypertext Transfer Protocol)
Protocolo de comunicación que define cómo los clientes (navegadores) y servidores intercambian datos.

**Métodos comunes**: GET (obtener), POST (crear), PUT (actualizar), DELETE (eliminar).

---

### URL (Uniform Resource Locator)
Dirección que identifica un recurso en internet.

**Ejemplo**: `https://www.ejemplo.com/pagina`

---

### Deployment (Despliegue)
Proceso de publicar una aplicación para que esté disponible para los usuarios.

**Plataformas**: Vercel, Netlify, Heroku.

---

### Production Environment
Entorno donde la aplicación está disponible para los usuarios reales. Es el entorno "en vivo".

---

### Development Environment
Entorno donde los desarrolladores trabajan y prueban la aplicación. No es accesible para usuarios finales.

---

### Bug (Error)
Problema o defecto en el software que causa que se comporte de manera incorrecta o inesperada.

---

### Debugging
Proceso de identificar, analizar y corregir errores en el software.

---

### Refactoring
Proceso de reestructurar código existente sin cambiar su comportamiento externo, para mejorarlo (legibilidad, mantenibilidad).

---

### Clean Code
Código que es fácil de leer, entender y mantener. Sigue buenas prácticas y convenciones.

---

---

## 📚 Recursos Adicionales

Si encuentras un término que no está en este glosario:
- **MDN Web Docs**: https://developer.mozilla.org (glosario técnico)
- **W3Schools**: https://www.w3schools.com (tutoriales y glosario)
- **Dev.to**: https://dev.to (artículos de la comunidad)

---

**Nota**: Este glosario se actualizará periódicamente con nuevos términos que surjan durante el curso. Si tienes dudas sobre algún término, ¡pregunta en clase! 🎓
