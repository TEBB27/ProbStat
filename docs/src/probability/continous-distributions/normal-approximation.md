# Aproximaciones de Distribuciones a la Normal

## 1. Aproximación por el Teorema del Límite Central (TLC)

### Teoría
El TLC establece que la suma de variables aleatorias independientes (con media $\mu$ y varianza $\sigma^2$ finitas) converge a una distribución normal cuando $n \to \infty$:

$$
\begin{array}{c}
\frac{\overline{X} - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0,1)
\end{array}
$$

**Condiciones**:
- Muestras independientes
- Varianza finita ($\sigma^2 < \infty$)
- $n \geq 30$ para distribuciones no simétricas

### Ejemplo: Promedio de Dados
- Lanzar 50 dados ($X_i \sim U(1,6)$)
- Calcular $P(3.3 \leq \overline{X} \leq 3.7)$

**Cálculos**:
$$
\begin{array}{c}
\mu = 3.5, \quad \sigma = \sqrt{\frac{35}{12}} \approx 1.707 \\
\sigma_{\overline{X}} = \frac{1.707}{\sqrt{50}} \approx 0.241 \\
Z_1 = \frac{3.3 - 3.5}{0.241} \approx -0.83 \\
Z_2 = \frac{3.7 - 3.5}{0.241} \approx 0.83 \\
P \approx \Phi(0.83) - \Phi(-0.83) = 0.5935 - 0.4065 = 0.1870
\end{array}
$$