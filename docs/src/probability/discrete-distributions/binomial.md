# Distribución Binomial de Probabilidad

La distribución binomial es una de las distribuciones de probabilidad discretas más importantes en estadística. Se utiliza para modelar el número de éxitos en una secuencia de ensayos independientes, cada uno con dos posibles resultados: **éxito** o **fracaso**. Es fundamental en situaciones donde el resultado de un experimento tiene solo dos posibles resultados y se repite varias veces, como lanzar una moneda, realizar encuestas o controlar la calidad en la producción.

## Definición Formal

Consideremos un experimento que consiste en \( n \) ensayos independientes, donde cada ensayo tiene dos posibles resultados:

- **Éxito** con probabilidad \( p \)
- **Fracaso** con probabilidad \( q = 1 - p \)

La variable aleatoria \( X \), que cuenta el número de éxitos en los \( n \) ensayos, sigue una distribución binomial con parámetros \( n \) y \( p \), denotada como:

$$
X \sim \text{Binomial}(n, p)
$$

Esto significa que la probabilidad de obtener exactamente \( k \) éxitos en \( n \) ensayos está dada por la siguiente fórmula:

## Función de Probabilidad

La función de probabilidad de la distribución binomial está dada por:

$$
P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}
$$

donde:

- \( \binom{n}{k} \) es el coeficiente binomial, que representa el número de combinaciones posibles de \( k \) éxitos en \( n \) ensayos. Se calcula como:

$$
\binom{n}{k} = \frac{n!}{k!(n - k)!}
$$

- \( p^k \) es la probabilidad de obtener \( k \) éxitos en los ensayos.
- \( (1 - p)^{n - k} \) es la probabilidad de obtener \( n - k \) fracasos.

Esta fórmula nos permite calcular la probabilidad de cualquier número específico de éxitos en una serie de ensayos.

## Propiedades de la Distribución Binomial

### Valor Esperado (Media)

El valor esperado, o media, de la variable aleatoria binomial \( X \) es:

$$
E[X] = n \cdot p
$$

Este valor indica el número promedio de éxitos que se esperarían en \( n \) ensayos.

### Varianza

La varianza de una variable aleatoria binomial \( X \) es:

$$
\text{Var}(X) = n \cdot p \cdot (1 - p)
$$

La varianza mide la dispersión o la variabilidad de los resultados alrededor del valor esperado.

### Desviación Estándar

La desviación estándar de \( X \) es la raíz cuadrada de la varianza, y se calcula como:

$$
\sigma_X = \sqrt{n \cdot p \cdot (1 - p)}
$$

Este valor da una idea de cuán dispersos están los resultados posibles en comparación con el valor esperado.

## Ejemplo Práctico

Supongamos que lanzamos una moneda justa (\( p = 0.5 \)) 10 veces (\( n = 10 \)). Queremos calcular la probabilidad de obtener exactamente 4 caras (\( k = 4 \)).

Aplicamos la fórmula de la distribución binomial:

$$
P(X = 4) = \binom{10}{4} (0.5)^4 (1 - 0.5)^{10 - 4}
$$

Calculamos el coeficiente binomial:

$$
\binom{10}{4} = \frac{10!}{4! \cdot 6!} = 210
$$

Sustituyendo los valores:

$$
P(X = 4) = 210 \cdot (0.5)^4 \cdot (0.5)^6 = 210 \cdot 0.0625 \cdot 0.015625 = 0.2051
$$

Por lo tanto, la probabilidad de obtener exactamente 4 caras en 10 lanzamientos de una moneda justa es aproximadamente \( 20.51\% \).

## Aplicaciones

La distribución binomial tiene múltiples aplicaciones en áreas como:

- **Control de calidad:** Para determinar la probabilidad de encontrar un número específico de productos defectuosos en un lote de producción.
- **Medicina:** Para estimar la probabilidad de éxito de un tratamiento en un número determinado de pacientes.
- **Finanzas:** Para modelar el número de veces que un activo financiero alcanza un determinado precio en un período de tiempo.

## Conclusión

La distribución binomial es una herramienta fundamental en estadística para modelar situaciones de ensayo múltiple con dos posibles resultados. Su comprensión y sus propiedades permiten una amplia gama de aplicaciones prácticas en diferentes campos. Además, es un pilar para estudios estadísticos más avanzados, como la aproximación con distribuciones normales en ciertos casos.

## Recursos Adicionales

Para conocer más ejemplos, puedes ver el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/EisaSQ1j_Kk?si=DbQ2CkZ7NtkCCRZx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
