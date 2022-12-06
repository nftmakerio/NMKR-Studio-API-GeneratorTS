# NMKR-STUDIO-API

This is typesafe API Client for interactions with the NMKR Studio V2 API.

It aims to simplify the development experience when building cNFT and cardano blockchain projects. It gives you typesafety and intelisense by providing classes and interfaces.

Basic example usage
````
    //Create and initialize the client
    const client=new NMKRClient({TOKEN:"NMKR-STUDIO-API-TOKEN"})

    //load all currently listed projects for this account
    const projects=await client.projects.getV2ListProjects();

    //print all project names to console
    projects.forEach((project)=>console.log(project.projectname));
````

Note:  You can overwrite the `BASE` parameter if you want to change the defaul URL to preprod (WARNING the API might be slightly diffrent and this package is up to date with the production version only)