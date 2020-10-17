let CurrencyMap: any = {
    AUD: "$",
    EURO: "€"
}

export function getCurrencyFormatted(amount: number, currency: string) {
    let amountString = amount.toString();

    return `${CurrencyMap[currency]}${amountString.slice(0, amountString.length - 2)}.${amountString.slice(-2)}`
}
