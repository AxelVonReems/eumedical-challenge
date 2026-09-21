# Eumedical Trainee Challenge

## 1. Título y ejecución

Proyecto frontend para el reto Eumedical, centrado en dos entregas complementarias:

- Rebranding de la web pública de Eumedical siguiendo el Brand Book corporativo.
- Diseño UX/UI del Área de Paciente con foco en claridad, seguridad y conversión.

### Instalación

```bash
npm install
```

### Ejecución en modo desarrollo

```bash
npm run dev
```

---

## 2. Problemas cncontrados y cambios en package.json

Durante la fase inicial del proyecto, la configuración de dependencias presentó un fallo crítico de npm:

```bash
Cannot read properties of null (reading 'edgesOut')
```

Este problema fue originado por conflictos de dependencias pares (`peer dependencies`) y por un `package-lock.json` desincronizado/corrupto tras modificaciones manuales sobre las versiones de React y del ecosistema relacionado.

Para estabilizar la base técnica, se implementó la siguiente solución:

- Downgrade de React 19 a React 18 (`18.3.1`) en el `package.json`, con el objetivo de asegurar compatibilidad nativa con las librerías UI utilizadas en la interfaz.
- Eliminación de la carpeta `node_modules` y del lockfile anterior para evitar el uso de un estado corrupto.
- Limpieza del caché local con `npm cache clean --force`.
- Instalación limpia del proyecto para restablecer la resolución correcta de dependencias.

Además, se corrigió el ajuste de configuración en `eslint.config.js` aplicando un manejo seguro con *optional chaining* (`?.`) para evitar la incompatibilidad con la nueva configuración plana de ESLint 9.

---

## 3. Rebranding de la web pública (Parte A)

La propuesta moderniza la presencia digital de Eumedical aportando una estética contemporánea y limpia, sin perder la esencia corporativa ni la propuesta de valor original.

### Reinterpretación visual y fidelidad de marca
Se aplicó rigurosamente el Brand Book (paleta corporativa, tipografía y jerarquía) para transmitir solvencia clínica. Se eliminó el ruido visual innecesario, priorizando la legibilidad y la confianza.
### Arquitectura de componentes
La interfaz se construyó mediante componentes de React modulares y mantenibles. Se implementaron de forma estructurada todas las secciones clave requeridas: Header, Hero, Propuesta de valor, Servicios, Métricas/Confianza y Footer.
### Responsive y accesibilidad
Diseño 100% adaptable a mobile y desktop. Se integraron bases sólidas de accesibilidad: contraste adecuado entre texto y fondo, HTML semántico, y estados de interacción claros para reducir la fricción en la navegación.

---

## 4. Decisiones de UX/UI (Área paciente - parte B)

### Estructura responsiva

El dashboard mantiene un ancho máximo de `1440px` para evitar la dispersión visual en monitores ultra anchos. Esta restricción ayuda a mantener proporción, equilibrio y legibilidad en pantallas grandes, al mismo tiempo que mejora la experiencia en tabletas mediante targets táctiles más amplios y botones sólidos en vez de enlaces textuales finos.

### Divulgación progresiva

Se utiliza la estrategia de divulgación progresiva para conservar las vistas principales enfocadas y limpias. Los detalles complejos como Documentos, Recetas y la solicitud de Citas se gestionan mediante modales, evitando saturar el contenido principal del dashboard y mejorando la comprensión del flujo.

### Edición contextual

En la sección “Mi Perfil” se implementa edición en línea (*inline editing*) para reforzar la continuidad del flujo de trabajo. Esta decisión reduce la fricción del usuario, evita la fatiga de modales y permite una interacción más natural y directa.

### Feedback proactivo

El `DashboardIndex` incorpora un modal automático de alerta para próximas citas en un plazo de 24h. El componente se dispara con un retraso de `800ms` para permitir que la interfaz principal termine su renderizado previo y la atención del usuario se dirija a una información relevante sin interrumpir innecesariamente la navegación.

### Manejo visual de errores

Se incorporan rutas catch-all en el router para evitar pantallas en blanco en navegación no definida. Además, se simulan estados de error visuales en formularios con bordes rojos y mensajes contextuales para demostrar la gestión de validaciones y fallos de UI de forma clara y explícita.

---

## 5. Bonus logrados

- Configuración estricta de *Design Tokens* con la paleta corporativa en Tailwind CSS v4.
- Navegación SPA fluida mediante React Router v6.
- Transiciones y animaciones sutiles en hover, tarjetas y modales para reforzar la interactividad sin cargar visualmente la interfaz.
- Uso de una identidad visual consistente con el Brand Book institucional de Eumedical.

---

## 6. Mejoras con Más Tiempo

- Sección de blog para la web pública para mejorar SEO.
- Implementación de tests automatizados con Vitest.
- Internacionalización (i18n) para soportar múltiples idiomas y contextos de mercado.

---

## 7. Conclusión

El proyecto cumple con el reto de combinar branding institucional y experiencia de usuario en el Área de Paciente. La solución busca equilibrar coherencia visual, claridad de contenido, ergonomía de uso y una base técnica estable, dejando una propuesta preparada para evolucionar hacia un producto más completo y orientado a producción.
