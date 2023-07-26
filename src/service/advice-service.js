const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        return {
            adviceId: data.slip.id,
            adviceMessage: data.slip.advice,
        };
    } catch (error) {
        console.log(error);
        throw error; 
    }
};

export const adviceService = {
    getAdvice
}