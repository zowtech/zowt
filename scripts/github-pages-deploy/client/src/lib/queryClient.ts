import { QueryClient, QueryOptions } from "@tanstack/react-query";

// Para GitHub Pages, usar formulário estático
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
}

// Simulação de API para GitHub Pages
export async function apiRequest(
  url: string, 
  options: RequestInit = {}
): Promise<Response> {
  // Para GitHub Pages, redirecionar para email
  if (url.includes('/api/contact')) {
    // Abrir cliente de email
    const data = JSON.parse(options.body as string);
    const subject = encodeURIComponent('Contato ZowT - Website');
    const body = encodeURIComponent(`
Nome: ${data.name}
Email: ${data.email}
Mensagem: ${data.message}
    `);
    
    window.location.href = `mailto:contato@zowt.com.br?subject=${subject}&body=${body}`;
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  
  return fetch(url, options).then(throwIfResNotOk);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
