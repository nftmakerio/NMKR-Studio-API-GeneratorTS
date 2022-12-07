import { NMKRClient } from '../index';
test('ListProjects', async () => {
  const client = new NMKRClient({ TOKEN: process.env.NMKRTOKEN });
  const projects = await client.projects.getV2ListProjects({});
  expect(projects).not.toBeNull();
});
