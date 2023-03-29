export function convertNumerToPrice(value: number) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    })
}