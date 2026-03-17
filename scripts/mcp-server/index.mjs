/* eslint-disable no-undef */
/* eslint-env node */
import process from 'node:process';
import { createServer } from 'node:http';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { registerComponentResources } from './resources.mjs';

async function main() {
  const host = process.env.MCP_HOST || '127.0.0.1';
  const port = Number(process.env.MCP_PORT || 8686);

  const server = new McpServer({
    name: '1money-react-ui',
    version: '0.1.0'
  });

  console.info('[mcp] Starting 1money-react-ui MCP server...');

  const registeredCount = await registerComponentResources(server);
  console.info(`[mcp] Registered ${registeredCount} component resources from src/components`);

  const transport = new StreamableHTTPServerTransport();
  console.info(`[mcp] Binding HTTP transport on http://${host}:${port}/mcp`);

  const httpServer = createServer(async (req, res) => {
    try {
      await transport.handleRequest(req, res);
    } catch (error) {
      console.error('[mcp] HTTP handler error:', error);
      res.statusCode = 500;
      res.end('Internal MCP server error');
    }
  });

  await server.connect(transport);

  await new Promise(resolve => httpServer.listen(port, host, resolve));
  console.info('[mcp] Server ready at http://%s:%d/mcp', host, port);
}

main().catch(error => {
  console.error('[mcp] Fatal error:', error);
  process.exit(1);
});
