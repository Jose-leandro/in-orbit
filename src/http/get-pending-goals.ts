type PendingGoalsResponse = {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
   

  export async function getPendingGoals(): Promise<PendingGoalsResponse> {
    try {
      // Define the base URL dynamically based on environment
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3333' 
        : 'https://in-orbit-server-ivfk.onrender.com';
  
      // Make the request to the appropriate URL
      const response = await fetch(`${baseUrl}/pending-goals`);
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`Failed to fetch Pending Goals: ${response.statusText}`);
      }
  
      // Parse the response data
      const data: PendingGoalsResponse = await response.json();
      return data;
    } catch (error) {
      // Log error for debugging
      console.error('Error fetching Pending Goals:', error);
      throw error;
    }
  }