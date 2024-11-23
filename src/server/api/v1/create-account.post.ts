export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const payload = await readBody(event);
  console.log (payload);

  try {
    const response = await $fetch(`${config.apiUrl}/register`, {
      'method': 'POST',
      headers: {
        'Access-Control-Allow-Origin': config.apiDomain,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      'body': payload
    });

    if (!response.status === 'success') {
      return {
        status: 'error',
        message: 'Registration request failed.'
      }
    }

    return response;
  } catch(error) {
    console.error('Error during API registration:', error);
    return {
      status: 'error',
      message: 'API registration failed.'
    };
  }
})
