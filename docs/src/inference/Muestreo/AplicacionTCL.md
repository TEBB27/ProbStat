# Aplicación del Teorema Central del Límite (TCL)

El **Teorema Central del Límite (TCL)** tiene aplicaciones prácticas en diversas áreas, permitiéndonos aproximar distribuciones discretas (como la Binomial y la Poisson) a una distribución normal cuando se cumplen ciertas condiciones. A continuación, te presento dos ejemplos interesantes de su aplicación.

---

## Ejemplo 1: Aproximación de la Distribución Binomial a la Normal

### Contexto
Imagina que estamos realizando un estudio sobre vulnerabilidad y estrategias frente a eventos adversos en familias colombianas. Contamos con un presupuesto que nos permite seguir a **1200 hogares**. Es deseable:
- Tener entre **500 y 550 hogares pobres** (para no sobre-representar).
- Usar un **muestreo aleatorio simple (M.A.S.)**.

### Supuestos
- La población de Colombia es de aproximadamente **12.5 millones de familias** (asumida como infinita).
- Según el diario *Portafolio*, después de la pandemia, cerca del **42.5 % de los hogares son pobres**.

### Modelación
1. Definimos una variable indicadora:
   - Xⱼ = 1 si el hogar es pobre.
   - Xⱼ ∼ Ber(0.425).
2. Si X = Σⱼ Xⱼ (desde j=1 hasta 1200) es el número de hogares pobres en la muestra, entonces:
   - X ∼ Binomial(1200, 0.425).

### Aplicación del TCL
Aproximamos la distribución de X usando una normal:
$$
X \sim N(0.425 \cdot n, 0.425 \cdot (1 - 0.425) \cdot n) = N(510, 293.25).
$$

### Cálculo de Probabilidad
Queremos calcular la probabilidad de que el número de hogares pobres esté entre 500 y 550:
$$
P(500 \leq X \leq 550) = P\left(\frac{500 - 510}{\sqrt{293.25}} \leq Z \leq \frac{550 - 510}{\sqrt{293.25}}\right) \approx P(-0.584 \leq Z \leq 2.336).
$$

Usando tablas de la normal estándar:
$$
P(Z \leq 2.336) - P(Z \leq -0.584) \approx 0.990 - 0.280 = 0.710.
$$
Esto quiere decir que la probabilidad de tener entre 500 y 550 hogares pobres en la muestra es de 71%
### Corrección por Continuidad
Como estamos aproximando una distribución discreta (Binomial) a una continua (Normal), aplicamos una corrección por continuidad:
$$
P(500 \leq X \leq 550) \approx P(499.5 \leq X \leq 550.5).
$$

Recalculando:
$$
P(-0.613 \leq Z \leq 2.365) = P(Z \leq 2.365) - P(Z \leq -0.613) \approx 0.991 - 0.270 = 0.721.
$$
---
Por la corrección anterior, ahora la probabilidad de encontrar entre 500 y 550 hogares pobres es de 72.1%

## Ejemplo 2: Aproximación de la Distribución de Poisson a la Normal

### Contexto
Según el diario *El Espectador*, en el año **2021** hubo **1126 asesinatos** en Colombia, un aumento del **8 %** respecto al año anterior. Supongamos que el número de muertes anuales sigue una distribución de Poisson.

### Modelación
- X: Número de muertes en un año.
- X ∼ Poisson(λ = 1126).

### Aplicación del TCL
Como λ = 1126 es grande, aproximamos:
$$
X \approx N(\lambda, \lambda) = N(1126, 1126).
$$

### Cálculo de Probabilidad
Queremos calcular la probabilidad de que en el año **2022** haya más de **1200 homicidios**:
$$
P(X > 1200) = 1 - P\left(\frac{X - 1126}{\sqrt{1126}} \leq \frac{1200 - 1126}{\sqrt{1126}}\right) \approx 1 - P(Z \leq 2.205).
$$

Usando tablas de la normal estándar:
$$
P(Z \leq 2.205) \approx 0.986 \implies P(X > 1200) \approx 1 - 0.986 = 0.014.
$$
Esto quiere decir que la probabilidad de que ocurran más de 1200 homicidios es de 1.4%
### Corrección por Continuidad
En este caso, **no es necesaria la corrección por continuidad**, ya que la distribución de Poisson se aproxima bien a la normal cuando λ es grande (λ ≥ 10), y la corrección por continuidad es más relevante para distribuciones discretas con valores pequeños. Aquí, λ = 1126 es suficientemente grande para que la aproximación sea precisa sin corrección.

---

## Ejercicio para el Estudiante

### Distribución Hipergeométrica
Supongamos que en una población de **10,000 familias**, **4,000** son pobres. Si seleccionamos una muestra de **500 familias** sin reemplazo:
1. Define la variable aleatoria X: Número de familias pobres en la muestra.
2. Aproxima X usando una distribución normal.
3. Calcula la probabilidad de que haya entre **200 y 220 familias pobres** en la muestra.

---

## Aplicaciones Históricas del TCL

El **Teorema Central del Límite** ha sido fundamental en el desarrollo de la estadística y la ciencia de datos. Algunas aplicaciones históricas incluyen:
1. **Control de Calidad**: En la industria, el TCL se usa para monitorear procesos y detectar desviaciones en la producción.
2. **Finanzas**: En el análisis de riesgos, el TCL permite modelar el comportamiento de los rendimientos de activos financieros.
3. **Ciencias Sociales**: En encuestas y estudios poblacionales, el TCL ayuda a generalizar resultados a partir de muestras.

---

## Conclusión

El **Teorema Central del Límite** es una herramienta poderosa que nos permite aproximar distribuciones discretas a la normal, simplificando el análisis de datos. Ahora, pasamos a una nueva unidad: **Estimación**, donde exploraremos cómo usar muestras para hacer inferencias sobre poblaciones. 📊✨