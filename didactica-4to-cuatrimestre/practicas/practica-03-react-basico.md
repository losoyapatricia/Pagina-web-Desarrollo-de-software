# 🎯 Práctica 3: Tu Primer Componente React

**Carrera**: TI - 4º Cuatrimestre
**Materia**: Desarrollo de Software
**Fecha de entrega**: [Especificar fecha]
**Ponderación**: 7.5% de la calificación final
**Duración estimada**: 6-8 horas

---

## 🎮 Misión

¡Felicidades! Has sido contratado como desarrollador Frontend en una startup innovadora. Tu primera tarea es crear una interfaz interactiva usando React. El equipo está contigo, ¡demuestra tu talento!

---

## 📋 Contexto del Proyecto

**Nombre del proyecto**: WeatherNow - App del Clima

**Descripción**:
WeatherNow es una aplicación web que muestra el clima actual de una ciudad. Los usuarios pueden buscar cualquier ciudad y ver información detallada: temperatura, humedad, viento, y condición del clima.

**Stack tecnológico**:
- React 19
- TypeScript
- Tailwind CSS
- TanStack Router (opcional para routing)

---

## 🎯 Tu Assignment

### Parte 1: Configuración del Entorno (10 puntos)

**Instrucciones**:
1. Clona el repositorio base del proyecto (proporcionado por el docente)
2. Instala las dependencias con `npm install` o `bun install`
3. Ejecuta el servidor de desarrollo con `npm run dev`
4. Verifica que la aplicación funcione correctamente en el navegador

**Entregar**:
- [ ] Captura de pantalla de la terminal con `npm install` exitoso
- [ ] Captura de pantalla de la aplicación corriendo en el navegador
- [ ] URL del repositorio (si usas GitHub)

---

### Parte 2: Componente SearchBar (25 puntos)

**Instrucciones**:
Crea un componente `SearchBar` que permita a los usuarios buscar una ciudad.

**Requisitos**:
- Campo de texto para ingresar el nombre de la ciudad
- Botón de búsqueda
- Placeholder: "Buscar ciudad..."
- Manejo del estado para el valor del input
- Al hacer clic en "Buscar", debe mostrar el valor en consola

**Ejemplo de código esperado**:
```tsx
export function SearchBar() {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", city);
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
    </div>
  );
}
```

**Entregar**:
- [ ] Código del componente SearchBar
- [ ] Captura de pantalla del componente funcionando
- [ ] Explicación breve de cómo funciona el estado

---

### Parte 3: Componente WeatherCard (30 puntos)

**Instrucciones**:
Crea un componente `WeatherCard` que muestre la información del clima.

**Requisitos**:
- Recibir datos como props:
  - `city`: string (nombre de la ciudad)
  - `temperature`: number (temperatura en Celsius)
  - `humidity`: number (porcentaje de humedad)
  - `condition`: string (ej: "Sunny", "Cloudy", "Rainy")
  - `wind`: number (velocidad del viento en km/h)
- Diseño atractivo usando Tailwind CSS
- Mostrar icono según la condición (usar emojis o iconos de lucide-react)
- Responsive (funcione bien en móvil y desktop)

**Ejemplo de props**:
```tsx
<WeatherCard
  city="Ciudad Juárez"
  temperature={28}
  humidity={45}
  condition="Sunny"
  wind={12}
/>
```

**Diseño sugerido**:
- Tarjeta con sombra y bordes redondeados
- Nombre de la ciudad en grande
- Temperatura destacada
- Icono de la condición
- Detalles de humedad y viento más pequeños

**Entregar**:
- [ ] Código del componente WeatherCard
- [ ] Captura de pantalla del componente con datos de ejemplo
- [ ] Explicación de cómo manejas las props

---

### Parte 4: Integración en la Página Principal (20 puntos)

**Instrucciones**:
Integra ambos componentes en la página principal (`src/routes/index.tsx`).

**Requisitos**:
- Mostrar el SearchBar en la parte superior
- Mostrar el WeatherCard debajo (inicialmente con datos de ejemplo)
- Layout atractivo y centrado
- Título de la aplicación: "WeatherNow"
- Descripción: "El clima al instante"

**Entregar**:
- [ ] Código de la página principal
- [ ] Captura de pantalla de la página completa
- [ ] Explicación de la estructura de componentes

---

### Parte 5: Bonus - Estado Global (15 puntos extra)

**Instrucciones**:
Conecta el SearchBar con el WeatherCard para que cuando busques una ciudad, actualice el WeatherCard.

**Requisitos**:
- Usa `useState` o un hook personalizado
- Cuando el usuario busca, actualiza el WeatherCard con nuevos datos
- Puedes usar datos mock (simulados) para el clima

**Entregar**:
- [ ] Código con la integración de estado
- [ ] Captura de pantalla mostrando la actualización
- [ ] Explicación del flujo de datos

---

## 📝 Formato de Entrega

### Repositorio de GitHub

**Estructura del repositorio**:
```
weathernow-practica3/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   └── WeatherCard.tsx
│   └── routes/
│       └── index.tsx
├── public/
├── package.json
├── README.md (con instrucciones)
└── capturas/ (carpeta con capturas de pantalla)
```

**README.md debe incluir**:
- Nombre del estudiante
- Matrícula
- Grupo
- Descripción del proyecto
- Instrucciones para ejecutar
- Capturas de pantalla
- Explicaciones de cada componente

**Entregar**:
- URL del repositorio de GitHub
- Archivo PDF con capturas y explicaciones (opcional pero recomendado)

---

## 💡 Tips para el Éxito

### Para React:
1. **Componentes funcionales**: Usa hooks en lugar de componentes de clase
2. **Props**: Usa TypeScript para tipar las props
3. **Estado**: Mantén el estado lo más local posible
4. **Tailwind**: Usa clases de utilidad en lugar de CSS personalizado

### Para Tailwind CSS:
1. Usa el sitio de referencia: https://tailwindcss.com
2. Comienza con clases básicas: `flex`, `p-4`, `rounded`, `shadow`
3. Usa colores predefinidos: `bg-blue-500`, `text-gray-700`
4. Responsive: `md:flex`, `lg:text-2xl`

### Para TypeScript:
1. Define interfaces para tus props
2. Usa tipos específicos: `string`, `number`, `boolean`
3. Evita `any` tanto como sea posible

**Ejemplo**:
```tsx
interface WeatherCardProps {
  city: string;
  temperature: number;
  humidity: number;
  condition: string;
  wind: number;
}

export function WeatherCard({ city, temperature, humidity, condition, wind }: WeatherCardProps) {
  // ...
}
```

---

## 🚀 Bonus Challenges (Opcionales)

### Bonus 1: Animaciones (+5 puntos)
- Agrega animaciones cuando aparece el WeatherCard
- Usa Framer Motion o CSS transitions
- Efecto de fade-in o slide-up

### Bonus 2: Modo Oscuro (+5 puntos)
- Implementa un toggle para modo oscuro/claro
- Usa `useState` para gestionar el tema
- Aplica clases de Tailwind condicionalmente

### Bonus 3: Validación de Input (+5 puntos)
- Valida que el campo de búsqueda no esté vacío
- Muestra mensaje de error si está vacío
- Deshabilita el botón si no hay texto

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
- Parte 1 (Configuración): 10 puntos
- Parte 2 (SearchBar): 25 puntos
- Parte 3 (WeatherCard): 30 puntos
- Parte 4 (Integración): 20 puntos
- Parte 5 (Bonus): 15 puntos extra

---

## ❓ Preguntas Frecuentes

**Q: ¿Puedo usar JavaScript en lugar de TypeScript?**
A: El proyecto base usa TypeScript, pero puedes usar JS con comentarios JSDoc. Se recomienda TypeScript.

**Q: ¿Qué pasa si no puedo hacer funcionar el entorno?**
A: Contacta al docente por WhatsApp. Es crítico tener el entorno funcionando antes de empezar.

**Q: ¿Puedo usar otros frameworks como Next.js?**
A: No, usa el stack del proyecto base (React + TanStack Router).

**Q: ¿Necesito hacer commits a GitHub?**
A: Sí, se recomienda hacer commits regulares para mostrar tu proceso.

---

## 🎯 Checklist Antes de Entregar

- [ ] Entorno configurado y funcionando
- [ ] Componente SearchBar creado
- [ ] Componente WeatherCard creado
- [ ] Ambos componentes integrados en la página principal
- [ ] Código TypeScript con tipos apropiados
- [ ] Diseño responsivo con Tailwind CSS
- [ ] README.md completo
- [ ] Capturas de pantalla incluidas
- [ ] Repositorio en GitHub con commits
- [ ] URL del repositorio entregada

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
- **Tutorial de React Hooks**: https://react.dev/reference/react
- **Ejemplos de componentes**: https://ui.shadcn.com

---

**¡Éxito en tu primer componente React! ⚛️**

Recuerda: React es sobre componentes y estado. Piensa en tu UI como bloques de construcción que se ensamblan. ¡Diviértete programando!
