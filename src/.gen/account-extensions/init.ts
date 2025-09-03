import * as extensions from "./extensions/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(extensions.Extensions);
loader.register(extensions.Extension);
loader.register(extensions.History);
loader.register(extensions.AdminCap);
 }
