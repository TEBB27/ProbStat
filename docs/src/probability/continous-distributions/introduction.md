# Introducción a las Distribuciones Continuas

En probabilidad y estadística, una **distribución de probabilidad continua** describe la probabilidad de ocurrencia de valores dentro de un intervalo de una variable aleatoria continua. Una variable aleatoria es continua si puede asumir cualquier valor dentro de un rango determinado, a diferencia de una variable discreta que solo puede tomar valores específicos.

## Características de las Distribuciones Continuas

1. **Conjunto de valores posibles**: La variable aleatoria puede tomar cualquier valor dentro de un intervalo, como la estatura de una persona o la temperatura en una ciudad.
2. **Función de Densidad de Probabilidad (PDF, por sus siglas en inglés)**: Define la probabilidad relativa de que la variable tome un valor dentro de un intervalo. Se expresa como:
   $$ f(x) \geq 0, \quad \text{para todo } x $$
3. **Propiedades**:
   - La probabilidad de que la variable asuma un valor exacto es cero: 
     $$ P(X = x) = 0 $$
   - La probabilidad se obtiene mediante la integral de la función de densidad en un intervalo:
     $$ P(a \leq X \leq b) = \int_a^b f(x) \, dx $$
   - La integral total de la función de densidad sobre todos los valores posibles es 1:
     $$ \int_{-\infty}^{\infty} f(x) \, dx = 1 $$

## Ejemplos de Distribuciones Continuas

A continuación, se describen algunas de las distribuciones de probabilidad continua más utilizadas:

### **Distribución Uniforme**
Modela una variable que tiene la misma probabilidad en todos los valores dentro de un intervalo $[a, b]$.
- PDF: 
  $$ f(x) = \frac{1}{b-a}, \quad a \leq x \leq b $$
- Esperanza matemática: 
  $$E[X] = \frac{a + b}{2}$$
- Varianza: 
  $$Var(X) = \frac{(b - a)^2}{12}$$

### **Distribución Normal (Gaussiana)**
Es una de las distribuciones más importantes en estadística, modelando fenómenos naturales y errores de medición.
- PDF: 
  $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2 \sigma^2}} $$
- Esperanza matemática: 
  $$E[X] = \mu$$
- Varianza: 
  $$Var(X) = \sigma^2$$

### **Distribución Exponencial**
Modela el tiempo entre eventos en un proceso de Poisson.
- PDF: 
  $$ f(x) = \lambda e^{-\lambda x}, \quad x \geq 0 $$
- Esperanza matemática: 
  $$E[X] = \frac{1}{\lambda}$$
- Varianza: 
  $$Var(X) = \frac{1}{\lambda^2}$$

### **Distribución Gamma**
Generaliza la distribución exponencial y se usa para modelar tiempos de espera acumulados.
- PDF: 
  $$ f(x) = \frac{\lambda^k x^{k-1} e^{-\lambda x}}{(k-1)!}, \quad x > 0 $$
- Esperanza matemática: 
  $$E[X] = \frac{k}{\lambda}$$
- Varianza: 
  $$Var(X) = \frac{k}{\lambda^2}$$

## Aplicaciones de las Distribuciones Continuas
Las distribuciones continuas son fundamentales en la teoría de la probabilidad y tienen aplicaciones en diversas áreas como:
- **Ingeniería y manufactura**: La distribución normal se usa para modelar variaciones en medidas de producción.
- **Finanzas y economía**: La distribución exponencial modela tiempos entre transacciones financieras.
- **Ciencias ambientales**: La distribución gamma se aplica en el modelado de precipitaciones y eventos meteorológicos.

Estas distribuciones permiten analizar fenómenos con variables continuas y realizar inferencias estadísticas basadas en datos del mundo real.
