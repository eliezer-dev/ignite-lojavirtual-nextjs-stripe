export const formatToBRL = (number: number) : string => {
    return new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    }).format(number)
}