interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

// Utility function to get the base URL based on the environment
function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3333';
  }
  return 'https://in-orbit-server-ivfk.onrender.com'; 
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
  const url = `${getBaseUrl()}/goals`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        desiredWeeklyFrequency,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create goal: ${response.status} ${response.statusText} - ${errorText}`);
    }

    console.log('Goal created successfully');
  } catch (error) {
    console.error('Error creating goal:', error);
  }
}
