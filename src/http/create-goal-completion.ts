// Utility function to get the base URL based on the environment
function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3333';
  }
  return 'https://in-orbit-server-ivfk.onrender.com'; 
}


export async function createGoalCompletion(goalId: string) {
  // const url = `${getBaseUrl()}/completions`;
  const url = 'https://in-orbit-server-ivfk.onrender.com/completions';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          goalId,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create goal: ${response.status} ${response.statusText} - ${errorText}`);
      }
    
      console.log('Goal created successfully');
    } catch (error) {
      console.error('Error creating goal:', error);
    } 
  }