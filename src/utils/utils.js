const formatPrice = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}
const formatDate = (date) => {
    return date.slice(0,10);
}

export {
    formatPrice,
    formatDate
};