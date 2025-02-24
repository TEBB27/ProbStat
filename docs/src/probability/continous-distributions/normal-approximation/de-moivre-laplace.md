# Aproximación de la Distribución Binomial a la Normal  
**Explicación detallada con ejemplos**  

## 1. **Introducción**  
La distribución binomial modela el número de éxitos \( X \) en \( n \) ensayos independientes con probabilidad de éxito \( p \). Sin embargo, cuando \( n \) es grande, calcular probabilidades binomiales directamente puede ser complejo. La **aproximación normal** permite estimar estas probabilidades usando una distribución normal \( \mathcal{N}(\mu, \sigma) \), simplificando los cálculos.

## 2. **Condiciones para la aproximación**  
La aproximación es válida bajo el **Teorema de De Moivre-Laplace** si:  
1. \( n \) es grande (usualmente \( n \geq 30 \)).  
2. \( np \geq 5 \) y \( n(1-p) \geq 5 \).  

**Ejemplo válido**:  
- \( n = 100 \), \( p = 0.5 \) → \( np = 50 \), \( n(1-p) = 50 \). ✅  

**Ejemplo no válido**:  
- \( n = 10 \), \( p = 0.1 \) → \( np = 1 \), \( n(1-p) = 9 \). ❌  

## 3. **Pasos para la aproximación**  

### a) **Calcular parámetros de la normal**  
- Media: \( \mu = np \)  
- Desviación estándar: \( \sigma = \sqrt{np(1-p)} \)  

### b) **Aplicar corrección de continuidad**  
Como la binomial es discreta y la normal es continua, ajustamos el valor \( k \) sumando/restando \( 0.5 \):  
| **Probabilidad binomial** | **Ajuste para la normal**       |  
|---------------------------|----------------------------------|  
| \( P(X = k) \)             | \( P(k - 0.5 < X < k + 0.5) \)  |  
| \( P(X \leq k) \)          | \( P(X < k + 0.5) \)            |  
| \( P(X \geq k) \)          | \( P(X > k - 0.5) \)            |  

## 4. **Ejemplo detallado**  

### **Escenario**:  
Lanzamos una moneda justa (\( p = 0.5 \)) 100 veces. Calcular \( P(45 \leq X \leq 55) \).  

### **Solución binomial exacta**:  
$$
\begin{array}{c}
P(45 \leq X \leq 55) = \sum_{k=45}^{55} \binom{100}{k} (0.5)^k (0.5)^{100-k} \approx 0.728 \quad (\text{usando software}).  
\end{array}
$$

### **Aproximación normal**:  
1. **Parámetros**:  
   $$
   \begin{array}{c}
   \mu = 100 \cdot 0.5 = 50, \quad \sigma = \sqrt{100 \cdot 0.5 \cdot 0.5} = 5.
   \end{array}
   $$  
2. **Ajustar los límites**:  
   $$
   \begin{array}{c}
   P(44.5 < X < 55.5) \quad \text{(corrección de continuidad)}.
   \end{array}
   $$  
3. **Estandarizar**:  
   $$
   \begin{array}{c}
   Z_1 = \frac{44.5 - 50}{5} = -1.1, \quad Z_2 = \frac{55.5 - 50}{5} = 1.1.
   \end{array}
   $$  
4. **Buscar en la tabla Z**:  
   $$
   \begin{array}{c}
   P(-1.1 < Z < 1.1) = \Phi(1.1) - \Phi(-1.1) = 0.8643 - 0.1357 = 0.7286.
   \end{array}
   $$  

**Resultado aproximado**: \( 0.7286 \) vs. \( 0.728 \). ✅  

## 5. **Ejemplo de error sin corrección de continuidad**  
Si ignoramos la corrección:  
$$
\begin{array}{c}
P(45 \leq X \leq 55) \approx P\left(\frac{45 - 50}{5} < Z < \frac{55 - 50}{5}\right) = P(-1 < Z < 1) = 0.6827.
\end{array}
$$  
**Error**: \( 0.6827 \) vs. \( 0.728 \). ❌ (Subestima la probabilidad).

## 6. **Visualización de la aproximación**  
![Binomial vs Normal](https://upload.wikimedia.org/wikipedia/commons/8/8c/Binomial_approximation.svg)  
*La curva normal (roja) se superpone a la binomial (barras azules) cuando \( n \) es grande*.

## 7. **Casos donde falla la aproximación**  

### **Ejemplo**: \( n = 20 \), \( p = 0.1 \)  
- \( np = 2 \), \( n(1-p) = 18 \). ❌ (No cumple \( np \geq 5 \)).  
- La binomial está sesgada hacia la izquierda, y la normal no captura esta asimetría.  

## 8. **Aplicaciones prácticas**  
1. **Control de calidad**: Calcular la probabilidad de que un lote de 500 productos tenga ≤ 30 defectuosos (\( p = 0.05 \)).  
2. **Encuestas**: Estimar la probabilidad de que 60% de 400 personas prefieran un producto.  

## 9. **Resumen de fórmulas**  
| **Concepto**               | **Fórmula**                          |  
|----------------------------|---------------------------------------|  
| Media binomial             | \( \mu = np \)                       |  
| Varianza binomial          | \( \sigma^2 = np(1-p) \)             |  
| Corrección de continuidad  | \( k \to k \pm 0.5 \)                |  
| Estandarización            | \( Z = \frac{X - \mu}{\sigma} \)     |  

## 10. **Conclusión**  
- La aproximación normal es útil para binomiales con \( n \) grande y \( p \) no extremo.  
- **Siempre aplica corrección de continuidad** para mayor precisión.  
- Verifica las condiciones \( np \geq 5 \) y \( n(1-p) \geq 5 \).
