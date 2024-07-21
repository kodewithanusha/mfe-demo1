# STEPS

Angular Applicatoins :: Micro Frontend
2 Appliactions

> > Application 1 :: Remote Application
> > COST-BASIS-UI

    - NG-MODULE (mfe1)
        - DOD
        - MASK

> > Module Federation

> > Application 2 :: Wants to access the Application 1 (MFE)
> > HOST_APPLICATION

    - CONSUME_THE_MODULES
        - DOD
        - MASK

> > net360hostapp

- Basics
- ng new cost-basis-ui
- ng g m mfe1
  -- ng g c dod --module=mfe1
  -- ng g c mask --module=mfe1
- Routing as well.

# STEPS

- https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md

# FOR HOST

- ng add @angular-architects/module-federation --type host --port 4200

# FOR REMOTE

- ng add @angular-architects/module-federation --type remote --port 4201

In the Remote App, copy the flights-module as it as reference while implemnting first time.

- ng generate module hello --routing
- ng g c hello/hello-search --module=hello

```
{
       path: 'flights',
       loadChildren: () =>
            loadRemoteModule({
               type: 'module',
               remoteEntry: 'http://localhost:4201/remoteEntry.js',
               exposedModule: './Module'
           })
           .then(m => m.FlightsModule)
   },
```
