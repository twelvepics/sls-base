async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from bazinga.nowhere " }),
  };
}

export const handler = hello;
