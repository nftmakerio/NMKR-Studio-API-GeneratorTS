import { NMKRClient } from '../index';

test('ListProjects', async () => {
  const client = new NMKRClient({ TOKEN: process.env.NMKRTOKEN });
  const projects = await client.projects.getV2ListProjects({});
  expect(projects).not.toBeNull();
});
jest.setTimeout(10000);
test('CreateDeleteProject', async () => {
  const client = new NMKRClient({ TOKEN: process.env.NMKRTOKEN });
  try {
    const project = await client.projects.postV2CreateProject({
      requestBody: {
        description: 'MyTestProject is only for testing',
        projectname: 'MyTestProject',
        policyExpires: false,
        addressExpiretime: 40,
        maxNftSupply: 1,
        enableFiat: false,
        enableDecentralPayments: false,
        enableCrossSaleOnPaymentgateway: true,
        activatePayinAddress: true,
        payoutWalletaddress:
          'addr1q98qjgkvv6ul6p5tlxvq9zxklnj87y0lf4s0lta4km4s0scktx0qwk39jnq9a3krt20xa07fgkpf23q4wl3sqcgmrwps79n8u9',
      },
    });
    expect(project.uid).not.toBeNull();
    const deltedProject = await client.projects.getV2DeleteProject({ projectuid: project.uid! });
    expect(deltedProject.resultState).toBe('Ok');
  } catch (error) {
    throw error;
  }
});
