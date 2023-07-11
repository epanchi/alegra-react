// API function to create some usefull stuff
// Offset: number of records we have to skip before selecting records

export const getAllData = async (limit = 10, offset = 0) => {
    let api_url = `http://alegra.test/api/order/`;
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

