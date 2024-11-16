export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const payload = await readBody(event)

  try {
    const response = await $fetch(`${config.apiUrl}/login`, {
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
        message: 'Login request failed.'
      }
    }

    return response;
  } catch(error) {
    console.error('Error during API login:', error);
    return {
      status: 'error',
      message: 'API login failed.'
    };
  }
})
