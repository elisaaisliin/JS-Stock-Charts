async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    let twelve = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:Huobi,TRP:TSX&interval=1min&apikey=60065cc9860e49d0ad01fe50b8989b4f')

    let stocks = await twelve.json()

    // let GME = result.GME
    // let MSFT = result.MSFT
    // let DIS = result.DIS
    // let BNTX = result.BTNX

    // const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result data
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array


}

main()