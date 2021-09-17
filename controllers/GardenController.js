
export const getGardenTasks = async(session,gardenId) => {
    console.log("getting task: ", session, gardenId)
    if (session && session.jwt) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.jwt}`
            }
        };
        // console.log("request: ", requestOptions)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/gardentasks?garden=${gardenId}`, requestOptions)
            return response.json();
        } catch (err) {
            console.log(err)
            return {error: err}
        }     
    } else {
        return null
    }    
}
export const getGarden = async(session,gardenId) => {
    if (session && session.jwt) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.jwt}`
            }
        };
        // console.log("request: ", requestOptions)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/garden/${gardenId}`, requestOptions)
            const garden = await response.json();
            return garden
        } catch (err) {
            console.log(err)
            return {error: err}
        }     
    } else {
        return null
    }    
}

export const updateGarden = async(session, gardenId, body) => {
  const { leaders, blurb } = body
  if (session && session.jwt) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.jwt}`,

        },
        body: JSON.stringify({ 
            leaders,
            blurb
        })
    };
    // console.log("request: ", requestOptions)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/garden/${gardenId}`, requestOptions)
        const garden = await response.json();
        return garden
    } catch (err) {
        console.log(err)
        return {error: err}
    }      
  } else {
      return null
  }
  
}