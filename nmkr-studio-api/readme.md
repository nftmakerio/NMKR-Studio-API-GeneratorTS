# NMKR-STUDIO-API

This is a typesafe API Client for interactions with the NMKR Studio V2 API.

It aims to simplify the development experience when building cNFT and Cardano blockchain projects. It gives you type safety and inteliSense by providing classes and interfaces.

Basic example usage
````
    //Create and initialize the client
    const client=new NMKRClient({TOKEN:"NMKR-STUDIO-API-TOKEN"})

    //load all currently listed projects for this account
    const projects=await client.projects.getV2ListProjects({});

    //print all project names to console
    projects.forEach((project)=>console.log(project.projectname));
````

Note:  You can overwrite the `BASE` URL parameter in `new NMKRClient({TOKEN:"NMKR-STUDIO-API-TOKEN",BASE:"https://studio-api.preprod.nmkr.io"}` if you want to change the default URL to preprod (WARNING the API might be slightly diffrent and this package is up-to-date with the production version only)

## Roadmap
- [x] Initial typesafe client
- [ ] More examples and documentation
- [ ] Add min/max values and minLength/maxLength to fields
- [ ] Add better descriptions for fields, results and errors