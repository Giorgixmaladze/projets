const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}

export { fetchData }