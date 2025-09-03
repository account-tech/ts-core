import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585 from "../_dependencies/source/0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585/init";
import * as package_source_f477dbfad6ab1de1fdcb6042c0afeda2aa5bf12eb7ef42d280059fc8d6c36c94 from "../account-actions/init";
import * as package_source_87bee60d3ea6dc5b42e1074134373af27733fb3c5ebc3ac8e013901426d85d53 from "../account-extensions/init";
import * as package_source_10c87c29ea5d5674458652ababa246742a763f9deafed11608b7f0baea296484 from "../account-protocol/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_10c87c29ea5d5674458652ababa246742a763f9deafed11608b7f0baea296484.registerClasses(loader);
package_source_87bee60d3ea6dc5b42e1074134373af27733fb3c5ebc3ac8e013901426d85d53.registerClasses(loader);
package_source_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585.registerClasses(loader);
package_source_f477dbfad6ab1de1fdcb6042c0afeda2aa5bf12eb7ef42d280059fc8d6c36c94.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
