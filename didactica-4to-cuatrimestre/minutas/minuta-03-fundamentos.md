# 📋 Minuta de Inicio - Clase 3
## Tema: Fundamentos: Algoritmos y Diagramas de Flujo

**Fecha**: [Día/Mes/Año]
**Horario**: [Hora inicio - Hora fin]
**Salón**: [Número de salón]
**Docente**: [Nombre del docente]
**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software

---

## 🎯 Objetivos de la Sesión

### Objetivo General
Dominar los fundamentos de la lógica de programación mediante algoritmos y diagramas de flujo.

### Objetivos Específicos
1. Comprender qué es un algoritmo
2. Aprender a escribir pseudocódigo
3. Dibujar diagramas de flujo correctamente
4. Aplicar estructuras de control (secuencia, decisión, ciclo)

---

## 📌 Agenda

| Tiempo | Actividad | Descripción |
|--------|-----------|-------------|
| 5 min | **Repaso** | Recordatorio de Scrum |
| 10 min | **Entrega de Tarea** | Revisión de diagramas de flujo |
| 15 min | **Algoritmos y Pseudocódigo** | Conceptos básicos |
| 20 min | **Diagramas de Flujo** | Símbolos y ejemplos |
| 25 min | **Ejercicio Práctico** | Diseñar algoritmos en equipos |
| 10 min | **Cierre y Tarea** | Resumen y asignación |

---

## 🎪 Desarrollo de la Sesión

### 1. Repaso (5 min)

**Preguntas rápidas**:
- ¿Qué es Scrum?
- ¿Cuáles son los 3 roles de Scrum?
- ¿Qué es un Sprint?

**Respuesta rápida en grupo**:
- Levantar la mano para responder
- Reconocer participación

---

### 2. Entrega de Tarea (10 min)

**Actividad**: Revisión de diagramas de flujo

**Instrucciones**:
1. Los estudiantes muestran su diagrama de "Hacer café"
2. Seleccionar 3-4 ejemplos para proyectar
3. Comparar: ¿Quién usó más símbolos? ¿Quién fue más detallado?

**Feedback constructivo**:
- Elogiar creatividad
- Corregir errores comunes (ej: flechas incorrectas, símbolos mal usados)

---

### 3. Algoritmos y Pseudocódigo (15 min)

**¿Qué es un algoritmo?**
Una secuencia ordenada de pasos que resuelve un problema.

**Ejemplos cotidianos**:
- Receta de cocina = algoritmo
- Instrucciones de armado = algoritmo
- GPS = algoritmo

**Características de un buen algoritmo**:
1. **Preciso**: Cada paso debe ser claro
2. **Finito**: Debe terminar en algún momento
3. **Definido**: No debe ser ambiguo
4. **Con entradas y salidas**: Recibe datos, produce resultados

**Pseudocódigo**:
Escribir la lógica en lenguaje humano antes de traducirla a código.

**Ejemplo: Calcular el promedio de 3 números**

```
INICIO
  LEER numero1
  LEER numero2
  LEER numero3
  suma = numero1 + numero2 + numero3
  promedio = suma / 3
  ESCRIBIR promedio
FIN
```

**Ventajas del pseudocódigo**:
- No depende de un lenguaje específico
- Fácil de entender
- Sirve como documentación
- Base para traducir a cualquier lenguaje

---

### 4. Diagramas de Flujo (20 min)

**¿Qué es un diagrama de flujo?**
Representación gráfica de un algoritmo usando símbolos estándar.

**Símbolos principales**:

| Símbolo | Nombre | Uso |
|---------|--------|-----|
| ◯ | Inicio/Fin | Marca el inicio y fin del algoritmo |
| ▱ | Entrada/Salida | Leer datos, mostrar resultados |
| ▭ | Proceso | Cálculos, asignaciones |
| ◇ | Decisión | Condiciones (si/sino) |
| ↗ | Flecha | Dirección del flujo |
| ⏸ | Conector | Conectar partes del diagrama |

**Ejemplo: Determinar si un número es par o impar**

```
        ◯ INICIO
         ↓
      ▱ LEER num
         ↓
     ◇ num % 2 == 0?
    ↙       ↘
   SÍ       NO
   ↓         ↓
▱ ESCRIBIR  ▱ ESCRIBIR
"Es par"   "Es impar"
   ↓         ↓
      ↗ ⏸
         ↓
        ◯ FIN
```

**Estructuras de control**:

1. **Secuencia**: Paso tras paso
2. **Decisión (if/else)**: Ramas según condición
3. **Ciclo (while/for)**: Repetición mientras se cumpla condición

**Ejemplo de ciclo**: Imprimir números del 1 al 10

```
    ◯ INICIO
     ↓
  ▱ contador = 1
     ↓
 ◇ contador <= 10?
↙       ↘
SÍ       NO
↓         ↓
▱ ESCRIBIR  ↗
contador     ⏸
↓
▱ contador = contador + 1
↓
   ↗
```

---

### 5. Ejercicio Práctico (25 min)

**Actividad**: "Diseña tu algoritmo"

**Instrucciones**:
1. Dividir el grupo en equipos de 3 personas
2. Cada equipo elige UNO de los siguientes problemas:
   - a) Calcular el área de un triángulo
   - b) Determinar si una persona es mayor de edad
   - c) Encontrar el mayor de 3 números
   - d) Calcular el factorial de un número
3. Entregar:
   - Pseudocódigo
   - Diagrama de flujo
4. Presentar al grupo (3 min por equipo)

**Problemas detallados**:

**a) Calcular el área de un triángulo**
- Entradas: base, altura
- Proceso: área = (base * altura) / 2
- Salida: área

**b) Determinar si es mayor de edad**
- Entrada: edad
- Decisión: edad >= 18?
- Salida: "Mayor de edad" o "Menor de edad"

**c) Encontrar el mayor de 3 números**
- Entradas: num1, num2, num3
- Proceso: Comparaciones
- Salida: número mayor

**d) Calcular el factorial**
- Entrada: n
- Proceso: n! = n * (n-1) * (n-2) * ... * 1
- Salida: factorial

**Criterios de evaluación**:
- ✓ Símbolos correctos
- ✓ Lógica clara
- ✓ Flechas en dirección correcta
- ✓ Inicio y fin marcados
- ✓ Entradas y salidas identificadas

---

### 6. Cierre y Tarea (10 min)

**Resumen**:
- Algoritmo = secuencia de pasos
- Pseudocódigo = lógica en lenguaje humano
- Diagrama de flujo = representación gráfica
- Estructuras: secuencia, decisión, ciclo

**Tarea para la próxima clase**:
1. Ver el video 3 de la sección "Videos" del sitio web
2. Crear un diagrama de flujo para: "Validar un email"
   - Debe tener @
   - Debe tener .com o .mx
   - Si es válido: "Email correcto"
   - Si no: "Email incorrecto"
3. Investigar qué es React (framework de JavaScript)

**Cierre**:
> "La próxima clase iniciaremos con desarrollo web usando React. Todo lo que aprendieron hoy será la base. ¡Nos vemos!"

---

## 📝 Registro de Asistencia

| # | Nombre del Estudiante | Asistencia | Participación |
|---|----------------------|------------|---------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

---

## 📊 Observaciones del Docente

**Puntos a mejorar**:
- [ ] Necesito más ejemplos de diagramas con ciclos
- [ ] Los estudiantes confunden el símbolo de decisión
- [ ] Buena participación en el ejercicio en equipos

**Alumnos destacados**:
- [ ] Nombre 1 - Excelente diagrama de flujo
- [ ] Nombre 2 - Buen pseudocódigo

**Acciones de seguimiento**:
- [ ] Preparar ejercicios adicionales de lógica
- [ ] Crear plantilla de símbolos para imprimir

---

## 🔗 Recursos

- **Video recomendado**: [URL del video 3]
- **Símbolos de diagramas de flujo**: [URL]
- **Generador de diagramas online**: https://draw.io

---

**Minuta preparada por**: [Nombre del docente]
**Fecha de preparación**: [Fecha]
