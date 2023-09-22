export default {
	async fetch(request, env) {
	  const { pathname } = new URL(request.url);
	  console.log(env.DB);
  
	  if (pathname === "/api/cunstomer") {
		const { results } = await env.DB.prepare(
		  "SELECT * FROM Customers WHERE id > ?"
		)
		  .bind(0)
		  .all();
		return Response.json(results);
	  }
	  // …
	  return new Response("Call /api/users to display users over 30 years old");
	},
  };