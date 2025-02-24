## 5.1 Muestreo vs Diseño Experimental

### Definición
El muestreo es el proceso de seleccionar una parte de una población para realizar inferencias sobre ella. El diseño experimental es una metodología para planificar experimentos de manera controlada y evitar sesgos.

### Glosario
- **Población**: Conjunto total de elementos bajo estudio.
- **Muestra**: Subconjunto de la población seleccionado para el análisis.
- **Aleatorización**: Método para asignar sujetos de forma aleatoria a distintos grupos.
- **Sesgo**: Error sistemático que puede afectar los resultados.
- **Factor**: Variable que se manipula en un experimento.
- **Variable de respuesta**: Medida del resultado de un experimento.

### Fórmulas
No hay fórmulas específicas para este tema, pero es importante entender la relación entre muestra y población.

### Chiste
¿Por qué los estadísticos odian cocinar? Porque siempre tienen problemas con la selección de la muestra.

---

## 5.2 Distribuciones Muestrales

### Definición
Una distribución muestral describe cómo se comporta una estadística (como la media muestral) cuando se extraen muchas muestras de una población.

### Glosario
- **Estadístico**: Medida calculada a partir de una muestra.
- **Parámetro**: Valor que describe una característica de la población.
- **Distribución normal**: Distribución en forma de campana que aparece con frecuencia en estadística.
- **Error estándar**: Medida de la variabilidad de un estadístico.

### Fórmulas
- **Error estándar de la media:**
\[
SE = \frac{\sigma}{\sqrt{n}}
\]
Donde:
  - \( \sigma \) es la desviación estándar poblacional.
  - \( n \) es el tamaño de la muestra.

### Chiste
Un estadístico entra a un bar lleno de gente y grita: "¡Todos ustedes son una muestra aleatoria!". Nadie ríe…

---

## 5.3 Teorema Central del Límite (TCL)

### Definición
El TCL establece que, para muestras suficientemente grandes, la distribución de la media muestral se aproxima a una distribución normal, sin importar la distribución original de los datos.

### Glosario
- **Independencia**: Cada observación no debe influir en otra.
- **Convergencia**: A medida que aumenta el tamaño de la muestra, la distribución de la media muestral se acerca a la normal.
- **Asintótico**: Propiedad matemática que describe un comportamiento a medida que un valor crece sin límite.

### Fórmulas
- **Media de la distribución muestral:**
\[
\mu_{\bar{X}} = \mu
\]
Donde:
  - \( \mu \) es la media poblacional.

- **Desviación estándar de la media (error estándar):**
\[
\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}
\]
Donde:
  - \( \sigma \) es la desviación estándar de la población.
  - \( n \) es el tamaño de la muestra.

### Chiste
¿Por qué los estadísticos aman el TCL? Porque hace que todo parezca normal.

---

## 5.4 Aplicación del TCL

### Definición
El TCL se aplica en múltiples contextos, como en la estimación de intervalos de confianza, pruebas de hipótesis y modelos predictivos.

### Glosario
- **Intervalo de confianza**: Rango dentro del cual se espera que esté un parámetro poblacional con cierta probabilidad.
- **Prueba de hipótesis**: Método estadístico para tomar decisiones basado en datos muestrales.
- **Distribución muestral**: Distribución de una estadística obtenida a partir de muchas muestras.

### Fórmulas
- **Intervalo de confianza para la media (con varianza conocida):**
\[
IC = \bar{X} \pm Z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
\]
Donde:
  - \( \bar{X} \) es la media muestral.
  - \( Z_{\alpha/2} \) es el valor crítico de la distribución normal estándar.
  - \( \sigma \) es la desviación estándar poblacional.
  - \( n \) es el tamaño de la muestra.

### Chiste
¿Qué le dijo un estadístico a otro cuando le pidió ayuda con el TCL? "¡Relájate, todo va a converger eventualmente!"

