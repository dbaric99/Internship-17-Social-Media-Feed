const calculateLoginCap = (hours) => {
    return new Date(Date.now() + (hours * 60 * 60 * 1000));
}

const getTimeFromNow = (date) => {
    const timeDifference = Date.now() - date.getTime();
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
  
    if (timeDifference < minute) {
        return 'just now';
    } else if (timeDifference < hour) {
        return `${Math.floor(timeDifference / minute)} minute(s) ago`;
    } else if (timeDifference < day) {
        return `${Math.floor(timeDifference / hour)} hour(s) ago`;
    }
    return `${Math.floor(timeDifference / day)} day(s) ago`;    
}

export const timeUtil = {
    calculateLoginCap,
    getTimeFromNow,
}