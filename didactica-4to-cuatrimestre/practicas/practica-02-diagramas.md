# 🎯 Práctica 2: Planificación de Proyecto con Scrum

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software
**Fecha de entrega**: [Especificar fecha]
**Ponderación**: 7.5% de la calificación final
**Duración estimada**: 4-6 horas

---

## 🎮 Misión

Eres el Scrum Master de un equipo que está desarrollando una nueva aplicación de gestión de tareas. Tu misión es planificar el primer Sprint usando la metodología Scrum. ¡El éxito del proyecto depende de tu planificación meticulosa!

---

## 📋 Contexto del Proyecto

**Nombre del proyecto**: TaskMaster - App de Gestión de Tareas

**Descripción**:
TaskMaster es una aplicación móvil que permite a los usuarios organizar sus tareas diarias, establecer recordatorios y colaborar con otros usuarios en listas compartidas.

**Características deseadas (Product Backlog inicial)**:

1. Crear cuenta de usuario
2. Iniciar sesión
3. Cerrar sesión
4. Agregar tarea individual
5. Marcar tarea como completada
6. Eliminar tarea
7. Editar tarea
8. Crear categorías de tareas (Trabajo, Personal, Estudio, etc.)
9. Asignar categorías a tareas
10. Crear lista compartida con otros usuarios
11. Invitar usuarios a lista compartida
12. Establecer fecha límite para tarea
13. Establecer recordatorio para tarea
14. Ver tareas por fecha
15. Ver tareas por categoría
16. Buscar tareas
17. Archivar tareas completadas
18. Restaurar tareas archivadas
19. Ver estadísticas de productividad
20. Modo oscuro/claro

---

## 🎯 Tu Assignment

### Parte 1: Product Backlog Priorizado (40 puntos)

**Instrucciones**:
1. Analiza las 20 características del Product Backlog
2. Priorízalas usando el método MoSCoW:
   - **MUST** (Debe tener): Crítico para el MVP (Minimum Viable Product)
   - **SHOULD** (Debería tener): Importante pero no crítico
   - **COULD** (Podría tener): Deseable si hay tiempo
   - **WON'T** (No tendrá): Fuera de alcance por ahora
3. Justifica cada priorización con 1-2 oraciones

**Ejemplo**:
```
1. Crear cuenta de usuario - MUST
   Justificación: Esencial para que cualquier usuario pueda usar la app. Sin esto, no hay producto.

2. Modo oscuro/claro - COULD
   Justificación: Mejora la experiencia de usuario pero no afecta la funcionalidad principal.
```

**Entregar**:
- [ ] Lista completa priorizada con categorías MoSCoW
- [ ] Justificación para cada item

---

### Parte 2: Sprint Backlog (35 puntos)

**Instrucciones**:
1. Define un Sprint de 2 semanas
2. Selecciona 5-8 items del Product Backlog (priorizando MUST)
3. Para cada item seleccionado, define:
   - **User Story**: Formato "Como [rol], quiero [acción], para [beneficio]"
   - **Criterios de Aceptación**: ¿Cómo sabes que está terminado?
   - **Estimación**: Complejidad (Simple, Medio, Complejo)

**Ejemplo**:
```
Item: Crear cuenta de usuario
User Story: Como usuario nuevo, quiero crear una cuenta, para poder usar la aplicación.
Criterios de Aceptación:
- El usuario puede ingresar nombre, email y contraseña
- La contraseña debe tener mínimo 8 caracteres
- El email debe ser válido
- Se muestra mensaje de éxito al crear cuenta
- El usuario puede iniciar sesión inmediatamente después
Estimación: Medio
```

**Entregar**:
- [ ] Sprint Backlog con 5-8 items
- [ ] User Story para cada item
- [ ] Criterios de aceptación para cada item
- [ ] Estimación para cada item

---

### Parte 3: Diagrama de Flujo del Sprint (25 puntos)

**Instrucciones**:
1. Crea un diagrama de flujo que muestre el proceso del Sprint
2. El diagrama debe incluir:
   - Sprint Planning (al inicio)
   - Daily Scrum (reuniones diarias)
   - Desarrollo (trabajo del equipo)
   - Sprint Review (al final)
   - Sprint Retrospective (al final)
3. Muestra las decisiones y ciclos apropiados

**Entregar**:
- [ ] Diagrama de flujo completo del proceso de Sprint
- [ ] Todos los eventos de Scrum incluidos
- [ ] Flujo lógico y claro

---

## 📝 Formato de Entrega

### Documento PDF o Word

**Estructura**:
1. **Portada**
   - Nombre del estudiante
   - Matrícula
   - Grupo
   - Materia
   - Fecha

2. **Parte 1: Product Backlog Priorizado**
   - Tabla o lista con items priorizados
   - Justificaciones

3. **Parte 2: Sprint Backlog**
   - Items seleccionados
   - User Stories
   - Criterios de aceptación
   - Estimaciones

4. **Parte 3: Diagrama de Flujo del Sprint**
   - Diagrama completo

**Nombres de archivo**:
- `Practica2_Nombre_Matricula.pdf` o
- `Practica2_Nombre_Matricula.docx`

---

## 💡 Tips para el Éxito

### Para la Priorización (MoSCoW):
1. **MUST**: Sin esto, el producto no sirve. Crítico para el MVP.
2. **SHOULD**: Importante pero el producto puede funcionar sin esto temporalmente.
3. **COULD**: Bueno de tener si hay tiempo, pero no esencial.
4. **WON'T**: Explícitamente fuera de alcance para este Sprint/proyecto.

**Pregúntate**:
- ¿Qué es lo MÍNIMO que el usuario necesita para que el producto sea útil?
- ¿Qué podemos agregar en versiones futuras?
- ¿Qué es "nice to have" pero no esencial?

### Para las User Stories:
1. Siempre desde la perspectiva del usuario
2. El formato es estricto: "Como [rol], quiero [acción], para [beneficio]"
3. El beneficio debe ser claro y valioso
4. Evita detalles técnicos

**Ejemplo incorrecto**:
- "Como desarrollador, quiero usar React, para que el código sea moderno" ❌

**Ejemplo correcto**:
- "Como usuario, quiero crear tareas rápidamente, para no perder tiempo en la interfaz" ✅

### Para los Criterios de Aceptación:
1. Deben ser medibles y verificables
2. "Funciona" no es un criterio válido
3. Incluye casos positivos y negativos
4. Piensa en errores y casos borde

### Para el Diagrama de Flujo:
1. Muestra el proceso, no el código
2. Incluye decisiones (¿el equipo logró el objetivo?)
3. Muestra ciclos (Daily Scrum se repite)
4. Usa símbolos correctos

---

## 🚀 Bonus Challenge (Opcional)

### Bonus: Riesgos y Mitigación

Identifica 3 riesgos potenciales para el Sprint y cómo los mitigarías:

**Ejemplo**:
```
Riesgo: Un miembro del equipo se enferma y no puede trabajar
Mitigación: Documentar código diario, pair programming, redistribuir tareas
```

**Puntos extra**: +5

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

**Desglose por parte**:
- Parte 1 (Product Backlog): 40 puntos
- Parte 2 (Sprint Backlog): 35 puntos
- Parte 3 (Diagrama): 25 puntos

---

## ❓ Preguntas Frecuentes

**Q: ¿Cuántos items debe estar en MUST?**
A: Depende del proyecto, pero generalmente el MVP debe tener 6-10 items críticos. Para este ejercicio, prioriza inteligentemente.

**Q: ¿Puedo cambiar el orden de las prioridades después?**
A: En Scrum, el Product Backlog es dinámico y puede cambiar. Pero para esta práctica, mantén tu priorización consistente.

**Q: ¿Qué tan detallados deben ser los criterios de aceptación?**
A: Lo suficientemente detallados para que cualquier desarrollador sepa exactamente qué hacer y cuándo está terminado.

**Q: ¿Puedo incluir más de 8 items en el Sprint?**
A: No es recomendable. Es mejor tener pocos items bien definidos que muchos items incompletos. 5-8 es el rango ideal.

---

## 🎯 Checklist Antes de Entregar

- [ ] Product Backlog completo con 20 items
- [ ] Priorización MoSCoW aplicada
- [ ] Justificación para cada item
- [ ] Sprint Backlog con 5-8 items
- [ ] User Stories en formato correcto
- [ ] Criterios de aceptación claros
- [ ] Estimaciones incluidas
- [ ] Diagrama de flujo del Sprint
- [ ] Documento en formato correcto
- [ ] Nombre y matrícula en la portada
- [ ] Archivo nombrado correctamente
- [ ] Entregado antes de la fecha límite

---

## 📞 Dudas

Si tienes dudas sobre esta práctica:
- **WhatsApp**: 656 305 2299
- **Horario de atención**: [Especificar horario]
- **Foro del curso**: [URL si aplica]

---

## 📚 Recursos Adicionales

- **Guía oficial de Scrum**: https://scrumguides.org
- **Ejemplos de User Stories**: https://www.mountaingoatsoftware.com/articles/21-tips-for-writing-good-user-stories
- **MoSCoW Method**: https://www.oreilly.com/library/view/project-management-for/9781119156866/c09.xhtml

---

**¡Éxito en tu planificación, Scrum Master! 🎯**

Recuerda: Una buena planificación es la diferencia entre un proyecto exitoso y uno que falla. Tómate el tiempo de pensar cuidadosamente cada decisión.
