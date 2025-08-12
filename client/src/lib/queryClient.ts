import { QueryClient } from "@tanstack/react-query";

// Static build: no real backend. Provide minimal helpers.
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Mock contact form endpoint
  if (url === "/api/contact" && method.toUpperCase() === "POST") {
    // Simulate network latency
    await new Promise((r) => setTimeout(r, 600));
    return new Response(
      JSON.stringify({ message: "Спасибо! Мы свяжемся с вами в ближайшее время." }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }

  // Any other API is disabled in static mode
  return new Response(
    JSON.stringify({ error: "Static build: API disabled" }),
    { status: 404, headers: { "Content-Type": "application/json" } },
  );
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // No automatic fetching in static build
      queryFn: async () => {
        throw new Error("Static build: data fetching disabled");
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
