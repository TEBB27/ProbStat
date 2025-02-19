# Distribución de Poisson

La distribución de Poisson es una distribución de probabilidad discreta que modela el número de eventos que ocurren en un intervalo fijo de tiempo o espacio, bajo la suposición de que estos eventos ocurren con una tasa promedio constante y de manera independiente entre sí.

## Definición

Sea \( X \) una variable aleatoria que sigue una distribución de Poisson con parámetro \( \lambda \), denotado como:

$$ X \sim \text{Poisson}(\lambda) $$

Su función de masa de probabilidad (PMF) está dada por:

$$ P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots $$

donde:
- \( \lambda > 0 \) es el parámetro de la distribución, que representa la media y la varianza.
- \( e \) es la base del logaritmo natural, aproximadamente 2.718.
- \( k! \) es el factorial de \( k \).

## Propiedades

1. **Esperanza y varianza:**
   $$ \mathbb{E}[X] = \lambda, \quad \text{Var}(X) = \lambda $$

2. **Función generadora de momentos (MGF):**
   $$ M_X(t) = \exp(\lambda (e^t - 1)) $$

3. **Función característica:**
   $$ \phi_X(t) = \exp(\lambda (e^{it} - 1)) $$

4. **Suma de variables de Poisson:**
   Si \( X_1 \sim \text{Poisson}(\lambda_1) \) y \( X_2 \sim \text{Poisson}(\lambda_2) \) son independientes, entonces su suma también sigue una distribución de Poisson:
   $$ X_1 + X_2 \sim \text{Poisson}(\lambda_1 + \lambda_2) $$

## Aplicaciones

La distribución de Poisson es útil en situaciones donde los eventos ocurren aleatoriamente en un intervalo de tiempo o espacio, como por ejemplo:
- Número de llamadas a un centro de atención en una hora.
- Número de errores tipográficos en una página impresa.
- Número de llegadas de clientes a una tienda por minuto.

## Relación con otras distribuciones

- **Aproximación de Poisson a la binomial:** Si \( X \sim \text{Bin}(n, p) \) con \( n \) grande y \( p \) pequeño, entonces:
  $$ X \approx \text{Poisson}(\lambda), \quad \text{donde } \lambda = np $$

- **Relación con la distribución exponencial:** Si el número de eventos en un intervalo de tiempo sigue una distribución de Poisson con tasa \( \lambda \), entonces el tiempo entre eventos sigue una distribución exponencial con parámetro \( \lambda \):
  $$ T \sim \text{Exp}(\lambda) $$





