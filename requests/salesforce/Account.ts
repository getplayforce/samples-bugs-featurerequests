// Generated by generateSalesforceObjects 2025-05-26T10:09:18.861Z
    
import { createTypedSalesforceObject, SalesforceObjectInterface } from 'playforce';
import { Account, objectType } from './defs/objects/Account.def';
export { Account, objectType };

export const AccountBase = createTypedSalesforceObject<Account>(objectType);

export function accountMethods(accountBase: SalesforceObjectInterface<Account>) {
 return {
    // Add method definitions here e.g.

    // getAccountObjectByEmail: async (email: string): Promise<Account> => {
    //     return await accountBase.getObjectByField(Account.Email, email)    
    // },
    // getAccountObjectByName: async (name: string): Promise<Account> => {
    //     return await accountBase.getObjectByField(Account.Name, name)    
    // },

  };
}
