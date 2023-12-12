# NMKR-STUDIO-API

NMKR is a minting and cardano infrastructure solution. We have an extensive API with an open [Swagger documentation](https://studio-api.nmkr.io/swagger/index.html)

In case you are completly new to NMKR please also see our [Docs](https://docs.nmkr.io/)

This is a typesafe API Client wrapper for interactions with the NMKR Studio V2 API.
It aims to simplify the development experience when building cNFT and Cardano blockchain projects. It gives you type safety and inteliSense by providing classes and interfaces.

All methods from our [Swagger API](https://studio-api.nmkr.io/swagger/index.html) are mapped into easy reusable classes.



Basic example usage
````
    import { NMKRClient } from "nmkr-studio-api";

    //Create and initialize the client
    const client=new NMKRClient({TOKEN:"NMKR-STUDIO-API-TOKEN"})

    //load all currently listed projects for this account
    const projects=await client.projects.getV2ListProjects({});

    //print all project names to console
    projects.forEach((project)=>console.log(project.projectname));

    //create a new project
    const newProject = await client.projects.postV2CreateProject({
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


    //delete the created project
    const deltedProject = await client.projects.getV2DeleteProject({ projectuid: newProject.uid! });
````

Note:  You can overwrite the `BASE` URL parameter in `new NMKRClient({TOKEN:"NMKR-STUDIO-API-TOKEN",BASE:"https://studio-api.preprod.nmkr.io"}` if you want to change the default URL to preprod (WARNING the preprod API might be slightly diffrent and this package is up-to-date with the production version)

## Roadmap
- [x] Initial typesafe client
- [ ] More examples and documentation
- [ ] Add min/max values and minLength/maxLength to fields
- [ ] Add better descriptions for fields, results and errors