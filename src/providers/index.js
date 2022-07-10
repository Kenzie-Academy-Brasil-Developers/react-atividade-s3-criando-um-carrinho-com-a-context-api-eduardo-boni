import {CatalogueProvider} from "./catalogue.js";

function Providers ({children}) {
    return 
   <CatalogueProvider>{children}</CatalogueProvider>
};

export default Providers;