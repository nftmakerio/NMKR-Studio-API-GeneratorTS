import { NMKRClient } from '../index';
test('ListProjects', async () => {
  const client = new NMKRClient({ TOKEN: process.env.NMKRTOKEN });
  const projects = await client.projects.getV2ListProjects({});
  expect(projects).not.toBeNull();
});
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
        payoutWalletaddress: 'addr1ThisIsOurTeamsWallet',
      },
    });
    expect(project.uid).not.toBeNull();
    const deltedProject = await client.projects.getV2DeleteProject({ projectuid: project.uid! });
    expect(deltedProject.resultState).toBe('Ok');
  } catch (error) {
    throw error;
  }
});
