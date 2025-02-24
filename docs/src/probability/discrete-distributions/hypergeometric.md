# Distribución Hipergeométrica

La distribución hipergeométrica es una distribución de probabilidad discreta que describe el número de éxitos en una secuencia de extracciones sin reemplazo de una población finita. A diferencia de la distribución binomial, donde las extracciones son con reemplazo, la distribución hipergeométrica modela situaciones en las que la probabilidad de éxito cambia en cada extracción.

## Definición Formal

Consideremos una población finita de tamaño \( N \), donde:

- \( K \) es el número de elementos que se consideran "éxitos".
- \( N - K \) es el número de elementos que se consideran "fracasos".

Se extraen \( n \) elementos sin reemplazo. La variable aleatoria \( X \) que cuenta el número de éxitos en las \( n \) extracciones sigue una distribución hipergeométrica con parámetros \( N \), \( K \) y \( n \), denotada como:

$\sqrt{3x-1}+(1+x)^2$

## Función de Probabilidad

La función de probabilidad de la distribución hipergeométrica está dada por:

$$
\begin{array}{c}
P(X = k) = \frac{\binom{K}{k} \binom{N - K}{n - k}}{\binom{N}{n}}
\end{array}
$$

donde:

- \( \binom{K}{k} \) es el número de formas de elegir \( k \) éxitos de los \( K \) disponibles.
- \( \binom{N - K}{n - k} \) es el número de formas de elegir \( n - k \) fracasos de los \( N - K \) disponibles.
- \( \binom{N}{n} \) es el número total de formas de elegir \( n \) elementos de la población de tamaño \( N \).

## Propiedades de la Distribución Hipergeométrica

### Valor Esperado (Media)

El valor esperado de una variable aleatoria hipergeométrica \( X \) es:

$$
\begin{array}{c}
E[X] = n \cdot \frac{K}{N}
\end{array}
$$

### Varianza

La varianza de una variable aleatoria hipergeométrica \( X \) es:

$$
\begin{array}{c}
\text{Var}(X) = n \cdot \frac{K}{N} \cdot \left(1 - \frac{K}{N}\right) \cdot \left(\frac{N - n}{N - 1}\right)
\end{array}
$$

### Desviación Estándar

La desviación estándar de una variable aleatoria hipergeométrica \( X \) es:

$$
\begin{array}{c}
\sigma_X = \sqrt{n \cdot \frac{K}{N} \cdot \left(1 - \frac{K}{N}\right) \cdot \left(\frac{N - n}{N - 1}\right)}
\end{array}
$$

## Ejemplos Prácticos

### Ejemplo 1: Básico

**Problema**: En una caja hay 10 bolas, de las cuales 4 son rojas y 6 son azules. Si se extraen 3 bolas sin reemplazo, ¿cuál es la probabilidad de que exactamente 2 sean rojas?

**Solución**:

1. Identificamos los parámetros:
   - \( N = 10 \) (total de bolas).
   - \( K = 4 \) (bolas rojas).
   - \( n = 3 \) (extracciones).
   - \( k = 2 \) (éxitos deseados).

2. Aplicamos la fórmula de la distribución hipergeométrica:

$$
\begin{array}{c}
P(X = 2) = \frac{\binom{4}{2} \binom{6}{1}}{\binom{10}{3}}
\end{array}
$$

3. Calculamos los coeficientes binomiales:
   - $\binom{4}{2} = 6 $
   - $\binom{6}{1} = 6 $
   - $\binom{10}{3} = 120 $

4. Sustituimos los valores:

$$
\begin{array}{c}
P(X = 2) = \frac{6 \cdot 6}{120} = \frac{36}{120} = 0.3
\end{array}
$$

**Respuesta**: La probabilidad de obtener exactamente 2 bolas rojas es \( 30\% \).

## Ejemplo 2: Intermedio

**Problema**: En un mazo de 52 cartas, hay 13 cartas de corazones. Si se extraen 5 cartas sin reemplazo, ¿cuál es la probabilidad de que al menos 3 sean corazones?

**Solución**:

1. Identificamos los parámetros:
   - \( N = 52 \) (total de cartas).
   - \( K = 13 \) (cartas de corazones).
   - \( n = 5 \) (extracciones).
   - Queremos \( P(X \geq 3) = P(X = 3) + P(X = 4) + P(X = 5) \).

2. Calculamos cada probabilidad por separado usando la fórmula hipergeométrica:

   - Para \( P(X = 3) \):
     $$
     \begin{array}{c}
     P(X = 3) = \frac{\binom{13}{3} \binom{39}{2}}{\binom{52}{5}}
     \end{array}
     $$
     $$
     \begin{array}{c}
     \binom{13}{3} = 286, \quad \binom{39}{2} = 741, \quad \binom{52}{5} = 2,598,960
     \end{array}
     $$
     $$
     \begin{array}{c}
     P(X = 3) = \frac{286 \cdot 741}{2,598,960} \approx 0.0815
     \end{array}
     $$

   - Para \( P(X = 4) \):
     $$
     \begin{array}{c}
     P(X = 4) = \frac{\binom{13}{4} \binom{39}{1}}{\binom{52}{5}}
     \end{array}
     $$
     $$
     \begin{array}{c}
     \binom{13}{4} = 715, \quad \binom{39}{1} = 39
     \end{array}
     $$
     $$
     \begin{array}{c}
     P(X = 4) = \frac{715 \cdot 39}{2,598,960} \approx 0.0107
     \end{array}
     $$

   - Para \( P(X = 5) \):
     $$
     \begin{array}{c}
     P(X = 5) = \frac{\binom{13}{5} \binom{39}{0}}{\binom{52}{5}}
     \end{array}
     $$
     $$
     \begin{array}{c}
     \binom{13}{5} = 1,287, \quad \binom{39}{0} = 1
     \end{array}
     $$
     $$
     \begin{array}{c}
     P(X = 5) = \frac{1,287 \cdot 1}{2,598,960} \approx 0.0005
     \end{array}
     $$

3. Sumamos las probabilidades:
   $$
   \begin{array}{c}
   P(X \geq 3) = 0.0815 + 0.0107 + 0.0005 = 0.0927
   \end{array}
   $$

**Respuesta**: La probabilidad de obtener al menos 3 cartas de corazones es aproximadamente \( 9.27\% \).

## Ejemplo 3: Avanzado

**Problema**: En una lotería, hay 100 boletos en total, de los cuales 10 son ganadores. Si una persona compra 15 boletos, ¿cuál es la probabilidad de que exactamente 4 de ellos sean ganadores?

**Solución**:

1. Identificamos los parámetros:
   - \( N = 100 \) (total de boletos).
   - \( K = 10 \) (boletos ganadores).
   - \( n = 15 \) (boletos comprados).
   - \( k = 4 \) (éxitos deseados).

2. Aplicamos la fórmula de la distribución hipergeométrica:

$$
\begin{array}{c}
P(X = 4) = \frac{\binom{10}{4} \binom{90}{11}}{\binom{100}{15}}
\end{array}
$$

3. Calculamos los coeficientes binomiales:
   - \( \binom{10}{4} = 210 \).
   - \( \binom{90}{11} \approx 1.05 \times 10^{14} \).
   - \( \binom{100}{15} \approx 2.53 \times 10^{17} \).

4. Sustituimos los valores:

$$
\begin{array}{c}
P(X = 4) = \frac{210 \cdot 1.05 \times 10^{14}}{2.53 \times 10^{17}} \approx 0.087
\end{array}
$$

**Respuesta**: La probabilidad de que exactamente 4 boletos sean ganadores es aproximadamente \( 8.7\% \).

## Aplicaciones

La distribución hipergeométrica se utiliza en situaciones donde el muestreo se realiza sin reemplazo, como:

- **Control de calidad**: Para calcular la probabilidad de encontrar un número específico de defectos en una muestra de productos.
- **Biología**: Para estimar la probabilidad de encontrar un número determinado de individuos con una característica específica en una población.
- **Juegos de azar**: Para calcular probabilidades en juegos como la lotería o el póker.

## Conclusión

La distribución hipergeométrica es una herramienta esencial para modelar situaciones de muestreo sin reemplazo. Su uso es fundamental en campos como la estadística, la ingeniería y las ciencias naturales, donde es necesario calcular probabilidades en poblaciones finitas.