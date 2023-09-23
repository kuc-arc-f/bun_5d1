import LibCrypto from '../lib/LibCrypto';
//
const router = {
  /**
  * create
  * @param
  *
  * @return
  */
  create: async function (req: any, res: any, env: any): Promise<Response>
  {
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      if (req) {
        const hashed_password = LibCrypto.encode(req.password);
        const sql = `
        INSERT INTO User ( name, email, password, updatedAt)
        VALUES('${req.name}', '${req.email}', '${hashed_password}',
        CURRENT_TIMESTAMP
        );
        `;
console.log(sql);
        const resulte = await env.DB.prepare(sql).run();
        if(resulte.success !== true) {
          console.error("Error, /create");
          throw new Error('Error , create');
        }
console.log(resulte);
        const sql_id = "SELECT last_insert_rowid() AS id;";
        const resultId = await env.DB.prepare(sql_id).all();
        if(resultId.results.length < 1) {
          console.error("Error, resultId.length < 1");
          throw new Error('Error , create, SELECT last_insert_rowid');
        }
        const item_id = resultId.results[0].id;
console.log("item_id=", item_id);
        req.id = item_id;

//console.log(resultId);
        //id
      }            
      return Response.json({ret: "OK", data: req});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  }, 
  /**
  *
  * @param
  *
  * @return
  */ 
  delete: async function (req: any, res: any, env: any): Promise<Response>
  {
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      if (req) {
      }
      return Response.json({ret: "OK", data: req});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  },
  /**
  *
  * @param
  *
  * @return
  */ 
  update: async function (req: any, res: any, env: any): Promise<Response>
  {
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      if (req) {
      }                
      return Response.json({ret: "OK", data: req});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  },
  /**
  *
  * @param
  *
  * @return
  */
  get: async function (req: any, res: any, env: any): Promise<Response>
  {
//    console.log(req);
    let item = {};
    let result: any = {}; 
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      if (req) {
        const sql = `
        SELECT * FROM User
        WHERE email = '${req.email}'
        `;     
console.log(sql);   
        result = await env.DB.prepare(sql).all();
//console.log(result.results);
        if(result.results.length < 1) {
          console.error("Error, results.length < 1");
          throw new Error('Error , get');
        }
        item = result.results[0];
//console.log(item);
        const decryptPassword = LibCrypto.decode(item.password);
console.log("decryptPassword=", decryptPassword);
        if(decryptPassword === req.password) {
          return Response.json({ret: "OK", data: item});
        } 
      }      
      return Response.json(retObj);
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  }, 
 
}
export default router;
