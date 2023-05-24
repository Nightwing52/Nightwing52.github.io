<style>
.center {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>

## Stocks and Bonds
Stocks and bonds are often combined to create more balanced portfolios. Since stocks and bonds are often negatively coorelated, poor performance in stocks can partially be set off by bonds and vise versa. In this project we will quantify this effect and analyze the tradeoff between stocks and bonds.

## Historical Data
In this project we fit historical data of [stocks](https://www.macrotrends.net/2526/sp-500-historical-annual-returns), [bonds](https://www.macrotrends.net/2016/10-year-treasury-bond-rate-yield-chart), and [inflation](https://fred.stlouisfed.org/series/FPCPITOTLZGUSA) from *macrotrends* and *FRED* going from 1990 to 2020. The stock and inflation data is visualized in my [previous post](https://nightwing52.github.io/monte_carlo_analysis.html). Here we plot the bond data to ensure it makes sense.

<img src="/img/stock_bond/bond_hist.png" class="center" alt="Historic bond data.">

We fit a normal distribution to the returns.

<img src="/img/stock_bond/bond_fit.png" class="center" alt="Bond fitted with normal.">

For stocks, bonds, and inflation we have a mean of 9.87, 2.31, and 4.25 respectively. Inflation used to be much higher and outside of recent inflation has consistently been around 2% (the FED's target). Therefore, we will use the 2% figure going forward.

As mentioned before, the coorelation between stocks and bonds is important to create a successful portfolio. A scatter matrix is always a good start.

<img src="/img/stock_bond/scatter_matrix.png" class="center" alt="Scatter matrix of variables.">

To obtain a quantitative estimate we calculate the coorelation matrix between our variables.

<img src="/img/stock_bond/coor_matrix.png" class="center" alt="Coorelation matrix of variables.">

We can see that market with bonds and bonds with inflation have a reasonable coorelation. This will be important when building our model.

## Simulation
Using the computed means and coorelation matrix from the previous section, we draw from a multivariate normal using *numpy*. After the samples are drawn and structured in the same manner as my [previous post](https://nightwing52.github.io/monte_carlo_analysis.html), let the stock allocation $0 \leq r \leq 1$ and the return is
$$\text{TR} = (r\text{SR}+(1-r)\text{BR})/\text{I} .$$

With a 60% stock allocation we recieve a distribution of returns that looks like this after 30 years.

<img src="/img/stock_bond/return_dist.png" class="center" alt="Return distribution.">

Much like the last time, it is a right skewed distribution with a median of 4.39 and a standard deviation of 5.62. 

## Sharpe Ratio
We want to know what happens when we change the stock bond allocation. To quantify this we simulate many different stock bond allocations to show return against allocation and volatility against allocation.

<img src="/img/stock_bond/alloc_vs_return_vol.png" class="center" alt="Return and volatility vs stock allocation.">

We see that median returns increases as stock allocation increases as expected. However, it comes with a penalty of increased volatility. To get an idea of how much return is earned for a unit of volatility we use the [Sharpe ratio](https://www.investopedia.com/terms/s/sharperatio.asp) with the risk free return being the portfolio with 0% stocks. 

<img src="/img/stock_bond/sharpe.png" class="center" alt="Sharpe ratio.">

The Sharpe ratio is between 50-60%. To increase this ratio we would want to add higher yield and uncoorelated assets. 

## Conclusion
Using the Monte Carlo method we simulated a mixed portfolio of stocks and long-term government bonds. Bonds act as a great stabalizing factor in a portfolio. Stocks offer much greater returns at the cost of higher risk. When building a portfolio for savings or retirement a balance should be struck between the two.

Lastly, this analysis ignores some things for simplicity. For example, one could combine stocks, government bonds, and corporate bonds. Model the distributions with non-normal distributions using a [copula](https://en.wikipedia.org/wiki/Copula_(probability_theory)). The later is very important when accuracy is important. This is because [tail risks](https://www.investopedia.com/terms/t/tailrisk.asp) and [black swan events](https://www.investopedia.com/terms/b/blackswan.asp) can have a massive impact over longer time spans. This project is just a starting point. My code can be found [here](https://github.com/Nightwing52/econ). Have fun!
