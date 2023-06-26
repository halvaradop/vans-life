
const getAllVans = async () => {
    return fetch("/src/utils/data.json")
        .then(response => response.json())
        .catch(error => error)
}

export { getAllVans }