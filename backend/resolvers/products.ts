export const ProductResolvers = {
  Query: {
    getAll:  (parent: any,  args: any, context: any,  info: any) => {
      console.log("args", args, parent, context, info);
      return {
        items: ['jordans', 'reeboks']
      };
     }
  },
  Mutation: {
    deleteOne: (parent: any, { _id }: any, context: any, info: any) => {
      console.log("args", _id, context, info);
      return true
    }
  }
}