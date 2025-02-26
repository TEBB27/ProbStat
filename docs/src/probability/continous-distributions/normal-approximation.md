# Aproximación Normal a la Distribución Binomial

La distribución binomial describe el número de éxitos en $n$ ensayos independientes, cada uno con una probabilidad de éxito $p$. La probabilidad de obtener exactamente $k$ éxitos en $n$ ensayos es:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

Cuando $n$ es grande y $p$ no está demasiado cerca de 0 o 1, la distribución binomial puede ser aproximada por una distribución normal con media $\mu = np$ y varianza $\sigma^2 = np(1-p)$.

## Condiciones para la Aproximación Normal a la Binomial:

1. $n$ debe ser grande (generalmente $n \geq 30$).
2. $np \geq 5$ y $n(1-p) \geq 5$.

## Corrección de Continuidad:

Dado que la distribución normal es continua y la binomial es discreta, se aplica una corrección de continuidad para mejorar la aproximación. Para calcular $P(a \leq X \leq b)$ en una distribución binomial, se aproxima como:

$$
P(a - 0.5 \leq X \leq b + 0.5)
$$

en la distribución normal.

## Ejemplo 1

Supongamos que lanzamos una moneda justa 100 veces. Queremos calcular la probabilidad de obtener entre 45 y 55 caras.

- $n = 100$, $p = 0.5$
- $\mu = np = 50$
- $\sigma = \sqrt{np(1-p)} = \sqrt{25} = 5$

Aplicando la corrección de continuidad:

$$
P(45 \leq X \leq 55) \approx P(44.5 \leq X \leq 55.5)
$$

Convertimos a la escala normal estándar $Z = \frac{X - \mu}{\sigma}$:

$$
P\left(\frac{44.5 - 50}{5} \leq Z \leq \frac{55.5 - 50}{5}\right) = P(-1.1 \leq Z \leq 1.1)
$$

Usando tablas de la distribución normal estándar:

$$
P(Z \leq 1.1) - P(Z \leq -1.1) \approx 0.8643 - 0.1357 = 0.7286
$$

## Ejemplo 2

En una fábrica, el 10% de los productos son defectuosos. Si se inspeccionan 200 productos, ¿cuál es la probabilidad de que haya entre 15 y 25 defectuosos?

- $n = 200$, $p = 0.1$
- $\mu = np = 20$
- $\sigma = \sqrt{np(1-p)} = \sqrt{18} \approx 4.2426$

Aplicando la corrección de continuidad:

$$
P(15 \leq X \leq 25) \approx P(14.5 \leq X \leq 25.5)
$$

Convertimos a la escala normal estándar:

$$
P\left(\frac{14.5 - 20}{4.2426} \leq Z \leq \frac{25.5 - 20}{4.2426}\right) = P(-1.30 \leq Z \leq 1.30)
$$

Usando tablas de la distribución normal estándar:

$$
P(Z \leq 1.30) - P(Z \leq -1.30) \approx 0.9032 - 0.0968 = 0.8064
$$

# Aproximación Normal a la Distribución de Poisson

La distribución de Poisson modela el número de eventos que ocurren en un intervalo de tiempo o espacio, con una tasa media $\lambda$. La probabilidad de observar $k$ eventos es:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

Cuando $\lambda$ es grande (generalmente $\lambda \geq 10$), la distribución de Poisson puede ser aproximada por una distribución normal con media $\mu = \lambda$ y varianza $\sigma^2 = \lambda$.

## Condiciones para la Aproximación Normal a la Poisson:

1. $\lambda$ debe ser grande (generalmente $\lambda \geq 10$).

## Corrección de Continuidad:

Al igual que con la binomial, se aplica una corrección de continuidad:

$$
P(a \leq X \leq b) \approx P(a - 0.5 \leq X \leq b + 0.5)
$$

## Ejemplo 1

Supongamos que el número de llamadas que llegan a un call center sigue una distribución de Poisson con $\lambda = 20$ llamadas por hora. Queremos calcular la probabilidad de recibir entre 18 y 22 llamadas en una hora.

- $\mu = 20$, $\sigma = \sqrt{20} \approx 4.472$

Aplicando la corrección de continuidad:

$$
P(18 \leq X \leq 22) \approx P(17.5 \leq X \leq 22.5)
$$

Convertimos a la escala normal estándar:

$$
P\left(\frac{17.5 - 20}{4.472} \leq Z \leq \frac{22.5 - 20}{4.472}\right) = P(-0.559 \leq Z \leq 0.559)
$$

Usando tablas de la distribución normal estándar:

$$
P(Z \leq 0.559) - P(Z \leq -0.559) \approx 0.7123 - 0.2877 = 0.4246
$$

## Ejemplo 2

En una central telefónica, el número de llamadas por minuto sigue una distribución de Poisson con $\lambda = 15$. ¿Cuál es la probabilidad de que en un minuto se reciban entre 10 y 20 llamadas?

- $\mu = 15$, $\sigma = \sqrt{15} \approx 3.8729$

Aplicando la corrección de continuidad:

$$
P(10 \leq X \leq 20) \approx P(9.5 \leq X \leq 20.5)
$$

Convertimos a la escala normal estándar:

$$
P\left(\frac{9.5 - 15}{3.8729} \leq Z \leq \frac{20.5 - 15}{3.8729}\right) = P(-1.42 \leq Z \leq 1.42)
$$

Usando tablas de la distribución normal estándar:

$$
P(Z \leq 1.42) - P(Z \leq -1.42) \approx 0.9222 - 0.0778 = 0.8444
$$

# Conclusión

La aproximación normal es una herramienta poderosa para simplificar el cálculo de probabilidades en distribuciones discretas cuando los parámetros son grandes. Sin embargo, es importante verificar las condiciones de aplicabilidad y utilizar la corrección de continuidad para mejorar la precisión de la aproximación. Este método es ampliamente utilizado en estadística aplicada, ingeniería, ciencias sociales y muchas otras disciplinas.

# Referencias

- Ross, S. M. (2014). *A First Course in Probability*. Pearson.
- Devore, J. L. (2015). *Probability and Statistics for Engineering and the Sciences*. Cengage Learning.
- Walpole, R. E., Myers, R. H., Myers, S. L., & Ye, K. (2012). *Probability & Statistics for Engineers & Scientists*. Pearson.