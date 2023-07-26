function formatDate(
    time: string | number,
    locate = "pt-br",
    timeZone = "America/Sao_Paulo"
) {
    const date = new Date(time)
    const formatedDate = date.toLocaleString(locate, { timeZone })
    return formatedDate
}

export { formatDate }