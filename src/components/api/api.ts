export const fetchAndStoreContacts = async () => {
    try {
        const response = await fetch("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060");
        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API");
        }
        const data = await response.json();
        localStorage.setItem("contacts", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        throw error;
    }
};
