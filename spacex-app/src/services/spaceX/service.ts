export const getAllRockets = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/rockets?limit=2`);
        if (response.status !== 200) return;

        const data: JSON = await response.json();

        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getAllMissions = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/missions`);
        if (response.status !== 200) return;

        const data: [] = await response.json();

        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
    }
}