export function convertCurrencyStringToNumber(currencyString: string) {

    if(currencyString) {
        // const unformattedString = currencyString.replace(/[^\d.-]/, '')
        const stringWithoutSymbol = currencyString.replace(/R\$\s?/, '');
        const price = stringWithoutSymbol.replace(',', '.')
       
        const numberValue = parseFloat(price);
        return numberValue
    }
  }
  