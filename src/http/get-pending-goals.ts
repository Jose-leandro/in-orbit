type Goal = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
};

type PendingGoalsResponse = {
  pendingGoals: Goal[];
};

  export async function getPendingGoals(): Promise<PendingGoalsResponse> {
    const response = await fetch('https://in-orbit-server-ivfk.onrender.com/pending-goals');
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`Failed to fetch Pending Goals: ${response.statusText}`);
      }
  
      // Parse the response data
      const data: PendingGoalsResponse = await response.json();
      return data;
  }