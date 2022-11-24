let inputs = {
  simple: {
    MyFolder: {
      Type: "Folder",
      RunAs: "controlm",
      Application: "Demo Query",

      Job1: {
        Type: "Job:Command",
        Command: "echo Hello World!",
      },
    },
  },
  multijobs: {
    MyFolder: {
      Type: "Folder",
      RunAs: "controlm",
      Application: "Demo Query",

      Job1: {
        Type: "Job:Command",
        Command: "echo Hello World!",
      },
      Job2: {
        Type: "Job:Command",
        Command: "echo Hello World!",
      },

      SubFolder1: {
        Type: "SubFolder",
        Application: "Demo Query",

        Job1: {
          Type: "JobDummy",
        },
      },
    },
  },
};

let queries = [
  {
    name: "simple query",
    description: "Showcase a simple query",
    input: inputs.simple,
    query: "MyFolder.Application",
  },
  {
    name: "Multiple query",
    description: "Showcase a complex query",
    input: inputs.multijobs,
    query: "*.*.Type",
  },
];
