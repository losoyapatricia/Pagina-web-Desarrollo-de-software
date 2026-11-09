# 🎯 Práctica 1: Diseña tu Algoritmo - Reto de Lógica

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software
**Fecha de entrega**: [Especificar fecha]
**Ponderación**: 7.5% de la calificación final
**Duración estimada**: 4-6 horas

---

## 🎮 Misión

Eres un desarrollador junior que acaba de ser contratado por una startup. Tu primer assignment es diseñar los algoritmos que alimentarán 3 características clave de su nueva aplicación. ¡El éxito de la empresa depende de tu lógica impecable!

---

## 📋 Problemas a Resolver

### Problema 1: Calculadora de Propinas (Nivel: Principiante ⭐)

**Contexto**:
La startup está creando una app para restaurantes. Necesitan una calculadora de propinas que sea simple y fácil de usar.

**Requisitos**:
- El usuario ingresa:
  - Monto total de la cuenta
  - Porcentaje de propina deseado (10%, 15% o 20%)
- El sistema debe calcular:
  - Monto de la propina
  - Total a pagar (cuenta + propina)
- Mostrar ambos resultados claramente

**Casos de prueba**:
- Cuenta: $500, Propina: 15% → Propina: $75, Total: $575
- Cuenta: $1200, Propina: 20% → Propina: $240, Total: $1440
- Cuenta: $85.50, Propina: 10% → Propina: $8.55, Total: $94.05

**Entregar**:
- [ ] Pseudocódigo completo
- [ ] Diagrama de flujo

---

### Problema 2: Validador de Contraseña (Nivel: Intermedio ⭐⭐)

**Contexto**:
El equipo de seguridad necesita un validador de contraseñas que cumpla con estándares de seguridad básicos.

**Requisitos**:
- El usuario ingresa una contraseña
- El sistema debe validar:
  - ✅ Mínimo 8 caracteres
  - ✅ Al menos 1 número (0-9)
  - ✅ Al menos 1 letra mayúscula (A-Z)
  - ✅ Al menos 1 letra minúscula (a-z)
- Mensajes de error específicos:
  - Si falta longitud: "La contraseña debe tener al menos 8 caracteres"
  - Si falta número: "La contraseña debe tener al menos 1 número"
  - Si falta mayúscula: "La contraseña debe tener al menos 1 letra mayúscula"
  - Si falta minúscula: "La contraseña debe tener al menos 1 letra minúscula"
- Si todo está correcto: "✅ Contraseña válida"

**Casos de prueba**:
- "abc123" → Error: longitud + mayúscula
- "ABC12345" → Error: minúscula
- "abcDEFGH" → Error: número
- "Abc12345" → ✅ Válida
- "MyP@ssw0rd!" → ✅ Válida (caracteres especiales son OK)

**Entregar**:
- [ ] Pseudocódigo completo
- [ ] Diagrama de flujo

---

### Problema 3: Sistema de Puntuación de Juego (Nivel: Avanzado ⭐⭐⭐)

**Contexto**:
La startup está desarrollando un juego móvil. Necesitan un sistema que clasifique a los jugadores según su puntuación.

**Requisitos**:
- El usuario ingresa su puntuación total
- El sistema determina el nivel según esta tabla:

| Puntuación | Nivel |
|------------|-------|
| 0 - 500 | Principiante 🌱 |
| 501 - 1000 | Intermedio 🔥 |
| 1001 - 2000 | Avanzado ⚡ |
| 2001+ | Experto 👑 |

- **Bonus Challenge**: Si el nivel es Experto y la puntuación es mayor a 5000, mostrar additionally: "¡LEYENDA! 🏆"
- Mensaje de error si la puntuación es negativa: "La puntuación no puede ser negativa"

**Casos de prueba**:
- 250 → Principiante 🌱
- 750 → Intermedio 🔥
- 1500 → Avanzado ⚡
- 3000 → Experto 👑
- 5500 → Experto 👑 + ¡LEYENDA! 🏆
- -100 → Error

**Entregar**:
- [ ] Pseudocódigo completo
- [ ] Diagrama de flujo

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

2. **Problema 1**
   - Título: "Calculadora de Propinas"
   - Pseudocódigo
   - Diagrama de flujo (puede ser imagen insertada)

3. **Problema 2**
   - Título: "Validador de Contraseña"
   - Pseudocódigo
   - Diagrama de flujo

4. **Problema 3**
   - Título: "Sistema de Puntuación de Juego"
   - Pseudocódigo
   - Diagrama de flujo

**Nombres de archivo**:
- `Practica1_Nombre_Matricula.pdf` o
- `Practica1_Nombre_Matricula.docx`

---

## 🎨 Sugerencias para Diagramas de Flujo

### Herramientas recomendadas:
- **draw.io** (gratuito, online): https://app.diagrams.net
- **Lucidchart** (gratuito para estudiantes): https://lucidchart.com
- **PowerPoint** (dibujar formas)
- **A mano** (escanear o tomar foto clara)

### Símbolos principales:

| Símbolo | Nombre | Uso |
|---------|--------|-----|
| ◯ | Inicio/Fin | Marca el inicio y fin |
| ▱ | Entrada/Salida | LEER, ESCRIBIR |
| ▭ | Proceso | Cálculos, asignaciones |
| ◇ | Decisión | Condiciones (SI/SINO) |
| ↗ | Flecha | Dirección del flujo |

---

## 💡 Tips para el Éxito

### Para el Pseudocódigo:
1. Usa palabras clave en mayúsculas: INICIO, FIN, LEER, ESCRIBIR, SI, SINO, MIENTRAS
2. Sé específico: "LEER numero" en lugar de "obtener dato"
3. Indenta adecuadamente para mostrar estructura
4. Incluye comentarios si es necesario

### Para los Diagramas de Flujo:
1. Usa un símbolo por paso
2. Las flechas deben ir en una dirección lógica
3. Evita cruzar flechas innecesariamente
4. Asegúrate de que haya un camino claro de inicio a fin
5. Prueba tu diagrama siguiéndolo paso a paso

### Para la Lógica:
1. Piensa en todos los casos posibles (casos borde)
2. Verifica tus algoritmos con los casos de prueba
3. Si te atascas, habla el problema en voz alta
4. Dibuja en papel antes de hacer el diagrama final

---

## 🚀 Bonus Challenge (Opcional)

Si quieres destacar y ganar puntos extra, puedes resolver uno de estos problemas adicionales:

### Bonus 1: Calculadora de Promedio con Validación
- Ingresar 5 calificaciones
- Validar que estén entre 0 y 100
- Calcular promedio
- Determinar si aprobó (promedio >= 70)
- Si alguna calificación es inválida, mostrar error específico

### Bonus 2: Juego de Adivinanza
- Generar número aleatorio (1-100)
- El usuario intenta adivinar
- Dar pistas: "muy alto" o "muy bajo"
- Contar intentos
- Máximo 7 intentos

**Puntos extra**: +5 por cada bonus resuelto (máximo +10)

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

---

## ❓ Preguntas Frecuentes

**Q: ¿Puedo usar AND/OR en las decisiones?**
A: Sí, si es necesario para la lógica. Por ejemplo: `SI (tiene_numero AND tiene_mayuscula) ENTONCES`

**Q: ¿Qué tan detallado debe ser el pseudocódigo?**
A: Lo suficientemente detallado para que alguien que no sabe programar pueda entender la lógica. No necesitas escribir código real.

**Q: ¿Puedo hacer el diagrama a mano?**
A: Sí, siempre y cuando sea legible y claro. Escanéalo o tómale una foto de buena calidad.

**Q: ¿Qué pasa si uno de mis algoritmos no funciona correctamente?**
A: Será evaluado según lo bien que intentaste resolver el problema. La lógica correcta es más importante que la perfección.

---

## 🎯 Checklist Antes de Entregar

- [ ] Todos los 3 problemas resueltos
- [ ] Pseudocódigo para cada problema
- [ ] Diagrama de flujo para cada problema
- [ ] Casos de prueba verificados
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

**¡Buena suerte, desarrollador! 🚀**

Recuerda: La lógica es la base de todo buen software. Un algoritmo bien diseñado se puede traducir a cualquier lenguaje de programación.
