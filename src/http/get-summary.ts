export interface GetSummaryResponse {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        createdAt: string
      }[]
    >
  }
}

export async function getSummary(): Promise<GetSummaryResponse> {
  try {
    // Define the base URL dynamically based on environment
    // const baseUrl = process.env.NODE_ENV === 'development' 
    //   ? 'http://localhost:3333' 
    //   : 'https://in-orbit-server-ivfk.onrender.com';

    // Make the request to the appropriate URL
    const response = await fetch('https://in-orbit-server-ivfk.onrender.com/summary');

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch summary: ${response.statusText}`);
    }

    // Parse the response data
    const data: GetSummaryResponse = await response.json();
    return data;
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching summary:', error);
    throw error;
  }
}
