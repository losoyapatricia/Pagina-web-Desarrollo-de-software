# 📋 Minuta de Inicio - Clase 4
## Tema: Práctica 1 - Diseño de Algoritmos

**Fecha**: [Día/Mes/Año]
**Horario**: [Hora inicio - Hora fin]
**Salón**: [Número de salón]
**Docente**: [Nombre del docente]
**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software

---

## 🎯 Objetivos de la Sesión

### Objetivo General
Aplicar los conocimientos de algoritmos y diagramas de flujo en una práctica retadora.

### Objetivos Específicos
1. Explicar la rúbrica de evaluación de la práctica
2. Resolver dudas sobre el enunciado de la práctica
3. Trabajar en el diseño de algoritmos complejos
4. Iniciar el desarrollo de la práctica en clase

---

## 📌 Agenda

| Tiempo | Actividad | Descripción |
|--------|-----------|-------------|
| 5 min | **Repaso** | Recordatorio de diagramas de flujo |
| 15 min | **Explicación de la Práctica** | Enunciado y rúbrica |
| 10 min | **Ejemplo Resuelto** | Demostración de un problema similar |
| 30 min | **Trabajo en Equipos** | Inicio de la práctica |
| 15 min | **Avances y Dudas** | Revisión de progreso |
| 5 min | **Cierre** | Fechas de entrega |

---

## 🎪 Desarrollo de la Sesión

### 1. Repaso (5 min)

**Preguntas rápidas**:
- ¿Qué es un algoritmo?
- ¿Para qué sirve el pseudocódigo?
- ¿Cuál es el símbolo de decisión?

**Respuesta rápida en grupo**:
- Levantar la mano para responder
- Reconocer participación

---

### 2. Explicación de la Práctica (15 min)

**Título de la Práctica**: "Diseña tu Algoritmo: Reto de Lógica"

**Descripción General**:
Los estudiantes deben diseñar algoritmos y diagramas de flujo para 3 problemas de dificultad progresiva.

**Enunciado Completo**:

#### Problema 1: Calculadora de Propinas (Básico)
**Objetivo**: Diseñar un algoritmo que calcule la propina a dejar en un restaurante.

**Requisitos**:
- Entrada: monto de la cuenta, porcentaje de propina (10%, 15%, 20%)
- Proceso: Calcular propina y total a pagar
- Salida: Propina calculada, total con propina
- **Entregar**: Pseudocódigo + Diagrama de flujo

#### Problema 2: Validador de Contraseña (Intermedio)
**Objetivo**: Diseñar un algoritmo que valide si una contraseña cumple con requisitos de seguridad.

**Requisitos**:
- Entrada: contraseña (texto)
- Validaciones:
  - Mínimo 8 caracteres
  - Debe tener al menos 1 número
  - Debe tener al menos 1 letra mayúscula
- Salida: "Contraseña válida" o mensaje específico de error
- **Entregar**: Pseudocódigo + Diagrama de flujo

#### Problema 3: Sistema de Puntuación de Juego (Avanzado)
**Objetivo**: Diseñar un algoritmo que calcule el nivel de un jugador según su puntuación.

**Requisitos**:
- Entrada: puntuación (número)
- Niveles:
  - 0-500: Principiante
  - 501-1000: Intermedio
  - 1001-2000: Avanzado
  - 2001+: Experto
- Salida: Nivel del jugador
- **Bonus**: Si el nivel es Experto, mostrar mensaje de felicitación
- **Entregar**: Pseudocódigo + Diagrama de flujo

**Formato de Entrega**:
- Documento PDF o Word
- Incluir: Nombre, matrícula, grupo
- Cada problema en página separada
- Diagramas pueden ser dibujados a mano o digitales

**Fecha de Entrega**: [Especificar fecha]
**Forma de Entrega**: [Plataforma: Google Classroom, correo, etc.]

---

### 3. Rúbrica de Evaluación (Explicada)

**Ver rúbrica completa en**: `rubricas/rubrica-practicas.md`

**Resumen**:
- **Pseudocódigo** (40%): Claridad, lógica correcta, estructura
- **Diagrama de flujo** (40%): Símbolos correctos, flujo lógico, legibilidad
- **Presentación** (20%): Orden, identificación, limpieza

---

### 4. Ejemplo Resuelto (10 min)

**Problema de ejemplo**: Calculadora de IMC (Índice de Masa Corporal)

**Pseudocódigo**:
```
INICIO
  ESCRIBIR "Calculadora de IMC"
  LEER peso (en kg)
  LEER altura (en metros)
  altura_cuadrada = altura * altura
  imc = peso / altura_cuadrada
  ESCRIBIR "Tu IMC es: ", imc

  SI imc < 18.5 ENTONCES
    ESCRIBIR "Bajo peso"
  SINO SI imc < 25 ENTONCES
    ESCRIBIR "Peso normal"
  SINO SI imc < 30 ENTONCES
    ESCRIBIR "Sobrepeso"
  SINO
    ESCRIBIR "Obesidad"
  FIN SI
FIN
```

**Diagrama de flujo** (dibujar en pizarrón):

```
        ◯ INICIO
         ↓
    ▱ ESCRIBIR mensaje
         ↓
    ▱ LEER peso
         ↓
    ▱ LEER altura
         ↓
  ▭ altura_cuadrada = altura * altura
         ↓
  ▭ imc = peso / altura_cuadrada
         ↓
    ▱ ESCRIBIR imc
         ↓
      ◇ imc < 18.5?
    ↙       ↘
   SÍ       NO
   ↓         ↓
▱ ESCRIBIR  ◇ imc < 25?
"Bajo peso" ↙     ↘
         SÍ     NO
         ↓       ↓
    ▱ ESCRIBIR  ◇ imc < 30?
  "Peso normal" ↙     ↘
             SÍ     NO
             ↓       ↓
        ▱ ESCRIBIR  ▱ ESCRIBIR
      "Sobrepeso"  "Obesidad"
             ↓       ↓
           ↗ ⏸ ⏸ ⏸
              ↓
            ◯ FIN
```

**Puntos clave explicados**:
- Uso correcto de símbolos
- Decisiones anidadas
- Cálculos en proceso
- Salidas claras

---

### 5. Trabajo en Equipos (30 min)

**Instrucciones**:
1. Los estudiantes forman equipos de 2-3 personas
2. Cada equipo trabaja en la práctica
3. El docente circula para resolver dudas
4. Se recomienda empezar con el Problema 1 (más fácil)

**Preguntas comunes anticipadas**:
- "¿Cómo valido que tenga mayúscula?" → Usar funciones de caracteres
- "¿Puedo usar AND/OR en las decisiones?" → Sí, si es necesario
- "¿Qué pasa si el IMC es exactamente 25?" → Definir bien los rangos

**Diferenciación**:
- Equipos avanzados: Ir directo al Problema 3
- Equipos que necesitan apoyo: Enfocarse en Problema 1 y 2

---

### 6. Avances y Dudas (15 min)

**Actividad**: Revisión de progreso

**Instrucciones**:
1. Cada equipo comparte dónde están
2. El docente proyecta 2-3 ejemplos de avances
3. Discusión en grupo sobre enfoques diferentes
4. Aclaración de dudas comunes

**Preguntas para estimular discusión**:
- "¿Alguien abordó el validador de contraseña de forma diferente?"
- "¿Qué tan detallado debe ser el pseudocódigo?"
- "¿Hay más de una forma de resolver el mismo problema?"

---

### 7. Cierre (5 min)

**Resumen**:
- La práctica tiene 3 problemas de dificultad progresiva
- Deben entregar pseudocódigo + diagrama de flujo
- Fecha de entrega: [Fecha]
- Forma de entrega: [Plataforma]

**Recursos disponibles**:
- Sitio web del curso: Sección "Fundamentos"
- Videos recomendados
- Ejemplos en el repositorio

**Próxima clase**:
- Iniciaremos con introducción a React
- Instalación de Node.js y herramientas
- Primer componente

**Cierre**:
> "Recuerden: la lógica es más importante que el código. Un buen algoritmo se puede traducir a cualquier lenguaje. ¡Buena suerte con la práctica!"

---

## 📝 Registro de Asistencia

| # | Nombre del Estudiante | Asistencia | Participación | Avance Práctica |
|---|----------------------|------------|---------------|-----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

---

## 📊 Observaciones del Docente

**Puntos a mejorar**:
- [ ] Necesito más tiempo para el ejemplo resuelto
- [ ] Los estudiantes confunden rangos en decisiones
- [ ] Buena dinámica de trabajo en equipos

**Alumnos destacados**:
- [ ] Nombre 1 - Excelente enfoque en el Problema 3
- [ ] Nombre 2 - Buenas preguntas sobre validación

**Acciones de seguimiento**:
- [ ] Preparar video tutorial sobre diagramas de flujo
- [ ] Crear plantilla de entrega en Google Docs

---

## 🔗 Recursos

- **Rúbrica completa**: `rubricas/rubrica-practicas.md`
- **Enunciado detallado**: `practicas/practica-01-algoritmos.md`
- **Generador de diagramas**: https://draw.io
- **Guía de pseudocódigo**: [URL]

---

**Minuta preparada por**: [Nombre del docente]
**Fecha de preparación**: [Fecha]
