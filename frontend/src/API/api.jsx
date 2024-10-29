const fetchData = async (API_URL) => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error for getting the data ${error}`)
  }
}

export {
  fetchData
}