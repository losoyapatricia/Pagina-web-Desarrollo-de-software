# 🎯 Práctica 4: Proyecto Final - TaskMaster App

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software
**Fecha de entrega**: [Especificar fecha]
**Ponderación**: 7.5% de la calificación final
**Duración estimada**: 12-16 horas

---

## 🎮 Misión Final

¡Este es el momento de la verdad! Aplica todo lo que has aprendido durante el cuatrimestre para crear una aplicación completa de gestión de tareas. Demuestra que eres un desarrollador de software capaz de construir productos reales.

---

## 📋 Contexto del Proyecto

**Nombre del proyecto**: TaskMaster - App de Gestión de Tareas

**Descripción**:
TaskMaster es una aplicación web que permite a los usuarios crear, gestionar y organizar sus tareas diarias. Incluye funcionalidades como categorización, priorización y filtrado de tareas.

**Stack tecnológico**:
- React 19
- TypeScript
- Tailwind CSS
- TanStack Router
- React Hook Form (opcional)

---

## 🎯 Requisitos del Proyecto

### Funcionalidades Mínimas (MVP)

#### 1. Crear Tarea (25 puntos)
- Formulario con:
  - Título de la tarea (requerido)
  - Descripción (opcional)
  - Categoría (Trabajo, Personal, Estudio, Otro)
  - Prioridad (Alta, Media, Baja)
  - Fecha límite (opcional)
- Validación de campos requeridos
- Al guardar, la tarea aparece en la lista

#### 2. Lista de Tareas (25 puntos)
- Mostrar todas las tareas creadas
- Cada tarea debe mostrar:
  - Título
  - Categoría (con badge de color)
  - Prioridad (con indicador visual)
  - Fecha límite (si existe)
  - Estado (pendiente/completada)
- Diseño limpio y organizado
- Scroll si hay muchas tareas

#### 3. Marcar como Completada (15 puntos)
- Checkbox o botón para marcar tarea como completada
- Tarea completada debe visualmente indicarse (tachado, gris, etc.)
- Posibilidad de desmarcar (regresar a pendiente)

#### 4. Eliminar Tarea (15 puntos)
- Botón para eliminar tarea
- Confirmación antes de eliminar (modal o alert)
- Tarea desaparece de la lista después de eliminar

#### 5. Filtrar Tareas (20 puntos)
- Filtros por:
  - Todas
  - Pendientes
  - Completadas
  - Por categoría
  - Por prioridad
- Los filtros deben ser aplicables en combinación

---

## 🚀 Funcionalidades Bonus (Puntos Extra)

### Bonus 1: Editar Tarea (+10 puntos)
- Modal para editar tarea existente
- Pre-llenar el formulario con datos actuales
- Guardar cambios y actualizar la lista

### Bonus 2: Persistencia Local (+10 puntos)
- Guardar tareas en localStorage
- Las tareas persisten al recargar la página
- Cargar tareas del localStorage al iniciar

### Bonus 3: Estadísticas (+10 puntos)
- Mostrar contador de tareas totales
- Mostrar contador de tareas completadas
- Mostrar porcentaje de completitud
- Gráfico simple (barra circular) de progreso

### Bonus 4: Drag and Drop (+15 puntos)
- Permitir reordenar tareas arrastrando
- Usa una librería como dnd-kit o react-beautiful-dnd
- La nueva posición se guarda

### Bonus 5: Modo Oscuro (+5 puntos)
- Toggle para modo oscuro/claro
- Persistencia del tema en localStorage
- Diseño atractivo en ambos modos

---

## 📝 Requisitos Técnicos

### Código
- [ ] TypeScript con tipos apropiados
- [ ] Componentes funcionales con hooks
- [ ] No usar `any` (excepto casos justificados)
- [ ] Código limpio y organizado
- [ ] Sin warnings de ESLint

### Componentes
- [ ] Separación clara de componentes
- [ ] Componentes reutilizables
- [ ] Props bien tipadas
- [ ] Uso apropiado de hooks (useState, useEffect, etc.)

### UI/UX
- [ ] Diseño responsivo (móvil, tablet, desktop)
- [ ] Tailwind CSS para estilos
- [ ] Colores consistentes
- [ ] Feedback visual (hover, active, focus)
- [ ] Estados de carga y error (si aplica)

### Git
- [ ] Repositorio en GitHub
- [ ] Commits frecuentes y descriptivos
- [ ] Branching (opcional pero recomendado)
- [ ] README.md completo

---

## 📦 Estructura del Proyecto

```
taskmaster-practica4/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskFilters.tsx
│   │   └── TaskStats.tsx (bonus)
│   ├── hooks/
│   │   ├── useTasks.ts
│   │   └── useLocalStorage.ts (bonus)
│   ├── lib/
│   │   └── utils.ts
│   ├── routes/
│   │   └── index.tsx
│   └── types/
│       └── task.ts
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 📝 Formato de Entrega

### Repositorio de GitHub

**README.md debe incluir**:
1. **Portada**
   - Nombre del estudiante
   - Matrícula
   - Grupo
   - Materia
   - Fecha

2. **Descripción del Proyecto**
   - Qué es TaskMaster
   - Funcionalidades implementadas
   - Stack tecnológico

3. **Instrucciones de Instalación**
   - Clonar repositorio
   - Instalar dependencias
   - Ejecutar el proyecto

4. **Capturas de Pantalla**
   - Vista principal
   - Formulario de crear tarea
   - Lista de tareas
   - Filtros aplicados
   - Bonus implementados

5. **Explicación de Componentes**
   - TaskForm: cómo funciona
   - TaskList: cómo maneja el estado
   - TaskItem: qué props recibe
   - TaskFilters: cómo filtra

6. **Desafíos y Soluciones**
   - Qué problemas enfrentaste
   - Cómo los resolviste
   - Qué aprendiste

7. **Referencias**
   - Recursos utilizados
   - Documentación consultada

**Video de Demostración** (opcional pero recomendado):
- Duración: 3-5 minutos
- Mostrar:
  - Instalación y ejecución
  - Crear tarea
  - Marcar como completada
  - Eliminar tarea
  - Filtrar tareas
  - Bonus implementados
- Subir a YouTube o Google Drive y compartir link

---

## 💡 Tips para el Éxito

### Planificación
1. Dibuja el diseño antes de codificar
2. Define la estructura de datos (interface Task)
3. Planifica los componentes que necesitas
4. Prioriza el MVP antes de los bonus

### Desarrollo
1. Comienza con la funcionalidad básica (crear y mostrar)
2. Agrega una funcionalidad a la vez
3. Prueba cada funcionalidad antes de continuar
4. Haz commits frecuentes

### Estado
1. Mantén el estado lo más local posible
2. Usa custom hooks para lógica compleja
3. Evita prop drilling cuando sea innecesario
4. Considera Context API si el estado es global

### TypeScript
1. Define interfaces para tus datos
2. Tipa todas las props
3. Usa tipos union cuando sea apropiado
4. Evita `any` tanto como sea posible

**Ejemplo de interface**:
```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  category: 'Trabajo' | 'Personal' | 'Estudio' | 'Otro';
  priority: 'Alta' | 'Media' | 'Baja';
  dueDate?: string;
  completed: boolean;
  createdAt: string;
}
```

---

## 📊 Rúbrica de Evaluación

Ver rúbrica completa en: `rubricas/rubrica-practicas.md`

**Resumen**:
- Comprensión del problema: 20 puntos
- Solución propuesta: 30 puntos
- Calidad de la documentación: 25 puntos
- Presentación y formato: 15 puntos
- Entrega a tiempo: 10 puntos
- **Total**: 100 puntos

**Desglose por funcionalidad**:
- Crear Tarea: 25 puntos
- Lista de Tareas: 25 puntos
- Marcar como Completada: 15 puntos
- Eliminar Tarea: 15 puntos
- Filtrar Tareas: 20 puntos
- Bonus: Hasta +60 puntos extra

---

## ❓ Preguntas Frecuentes

**Q: ¿Puedo usar una librería de componentes como shadcn/ui?**
A: Sí, pero debes explicar cómo las usas. El foco está en la lógica, no en los componentes UI.

**Q: ¿Necesito implementar todos los bonus?**
A: No, los bonus son opcionales. Implementa los que puedas para ganar puntos extra.

**Q: ¿Puedo trabajar en equipo?**
A: Esta práctica es individual. Si se detecta colaboración excesiva o plagio, se aplicará penalización.

**Q: ¿Qué pasa si no termino todas las funcionalidades?**
A: Entrega lo que tengas. Será evaluado según la calidad y funcionalidad de lo completado.

---

## 🎯 Checklist Antes de Entregar

### Funcionalidades
- [ ] Crear tarea con formulario
- [ ] Validación de campos
- [ ] Lista de tareas mostrada
- [ ] Marcar tarea como completada
- [ ] Eliminar tarea con confirmación
- [ ] Filtrar tareas por estado
- [ ] Filtrar tareas por categoría
- [ ] Filtrar tareas por prioridad

### Código
- [ ] TypeScript sin errores
- [ ] Componentes bien estructurados
- [ ] Hooks usados apropiadamente
- [ ] Sin warnings de ESLint
- [ ] Código limpio y comentado

### UI/UX
- [ ] Diseño responsivo
- [ ] Tailwind CSS aplicado
- [ ] Colores consistentes
- [ ] Feedback visual
- [ ] Estados de carga/error

### Git
- [ ] Repositorio en GitHub
- [ ] Commits descriptivos
- [ ] README.md completo
- [ ] Capturas de pantalla

### Documentación
- [ ] Explicación de componentes
- [ ] Instrucciones de instalación
- [ ] Desafíos y soluciones
- [ ] Referencias

---

## 📞 Dudas

Si tienes dudas sobre esta práctica:
- **WhatsApp**: 656 305 2299
- **Horario de atención**: [Especificar horario]
- **Foro del curso**: [URL si aplica]

---

## 📚 Recursos Adicionales

- **Documentación de React**: https://react.dev
- **Documentación de Tailwind CSS**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com
- **Ejemplos de apps de tareas**: https://github.com/topics/todo-app

---

## 🏆 Inspírate

Algunas ideas para hacer tu proyecto destacar:
- Animaciones suaves cuando se agrega/elimina tarea
- Sonidos de notificación al completar tarea
- Temas personalizados
- Exportar tareas a CSV
- Importar tareas desde JSON
- Modo "focus" que muestra solo una tarea
- Widget de calendario para ver tareas por fecha

---

**¡Este es tu momento de brillar! 🌟**

Recuerda: Esta práctica es el culmen de todo lo que has aprendido. Tómate tu tiempo, planifica bien, y construye algo de lo que estés orgulloso. ¡Espero ver proyectos increíbles!
