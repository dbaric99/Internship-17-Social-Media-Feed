const calculateLoginCap = (hours) => {
    return new Date(Date.now() + (hours * 60 * 60 * 1000));
}

export const timeUtil = {
    calculateLoginCap,
}