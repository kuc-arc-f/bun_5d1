import testRouter from './routes/test';
import todoRouter from './routes/todo';
import userRouter from './routes/user';
import sessionRouter from './routes/session';
import repoNameRouter from './routes/RepoName';
import repoCountRouter from './routes/RepoCount';
import planRouter from './routes/plan';
import erChartRouter from './routes/ErChart';
import taskItemRouter from './routes/TaskItem';
import projectRouter from './routes/Project';

//
const Router = {
  /**
  * route
  * @param
  *
  * @return
  */  
  route: async function (pathname: string, req: any, res: any, env: any): Promise<Response>
  {
    let response;
    /* test */
    if (pathname === "/test2") {
      response = await testRouter.test2(req, res, env);
    }
    if (pathname === "/test3") {
      response = await testRouter.test3(req, res, env);
    }
    if (pathname === "/test/create") {
      response = await testRouter.create(req, res, env);  
    }
    if (pathname === "/test/get") {
      response = await testRouter.get(req, res, env);  
    }
    if (pathname === "/test/get_list") {
      response = await testRouter.get_list(req, res, env);  
    }
    if (pathname === "/test/delete") {
      response = await testRouter.delete(req, res, env);  
    }
    if (pathname === "/test/update") {
      response = await testRouter.update(req, res, env);  
    }
    //todo
    if (pathname === "/todos/create") {
      response = await todoRouter.create(req, res, env);  
    }
    if (pathname === "/todos/delete") {
      response = await todoRouter.delete(req, res, env);  
    }
    if (pathname === "/todos/update") {
      response = await todoRouter.update(req, res, env);  
    }
    if (pathname === "/todos/get") {
      response = await todoRouter.get(req, res, env);  
    }
    if (pathname === "/todos/get_list") {
      response = await todoRouter.get_list(req, res, env);  
    }
    if (pathname === "/todos/search") {
      response = await todoRouter.search(req, res, env);  
    }
    //user
    if (pathname === "/users/create") {
      response = await userRouter.create(req, res, env);  
    }
    if (pathname === "/users/get") {
      response = await userRouter.get(req, res, env);  
    }    
    //session
    if (pathname === "/session/create") {
      response = await sessionRouter.create(req, res, env);  
    }
    if (pathname === "/session/get") {
      response = await sessionRouter.get(req, res, env);  
    }
    if (pathname === "/session/delete") {
      response = await sessionRouter.delete(req, res, env);  
    }
    //repo_name
    if (pathname === "/repo_name/create") {
      response = await repoNameRouter.create(req, res, env);  
    }
    if (pathname === "/repo_name/create_repo_name") {
      response = await repoNameRouter.create_repo_name(req, res, env);  
    }
    if (pathname === "/repo_name/get_list") {
      response = await repoNameRouter.get_list(req, res, env);  
    }
    if (pathname === "/repo_name/delete_all") {
      response = await repoNameRouter.delete_all(req, res, env);  
    }
    //repoCountRouter
    if (pathname === "/repo_count/create") {
      response = await repoCountRouter.create(req, res, env);  
    }
    if (pathname === "/repo_count/delete_all") {
      response = await repoCountRouter.delete_all(req, res, env);  
    }
    if (pathname === "/repo_count/get_list") {
      response = await repoCountRouter.get_list(req, res, env);  
    }
    //planRouter
    if (pathname === "/plan/create") {
      response = await planRouter.create(req, res, env);  
    }
    if (pathname === "/plan/delete") {
      response = await planRouter.delete(req, res, env);  
    }
    if (pathname === "/plan/update") {
      response = await planRouter.update(req, res, env);  
    }
    if (pathname === "/plan/get_list") {
      response = await planRouter.get_list(req, res, env);  
    }
    if (pathname === "/plan/get") {
      response = await planRouter.get(req, res, env);  
    }
    //erChartRouter
    if (pathname === "/er_chart/create") {
      response = await erChartRouter.create(req, res, env);  
    }
    if (pathname === "/er_chart/get_list") {
      response = await erChartRouter.get_list(req, res, env);  
    }
    if (pathname === "/er_chart/get") {
      response = await erChartRouter.get(req, res, env);  
    }
    if (pathname === "/er_chart/delete") {
      response = await erChartRouter.delete(req, res, env);  
    }   
    if (pathname === "/er_chart/update") {
      response = await erChartRouter.update(req, res, env);  
    }   
    if (pathname === "/er_chart/search") {
      response = await erChartRouter.search(req, res, env);  
    }
    //taskItemRouter
    if (pathname === "/tasks/create") {
      response = await taskItemRouter.create(req, res, env);  
    }
    if (pathname === "/tasks/get_list") {
      response = await taskItemRouter.get_list(req, res, env);  
    }
    if (pathname === "/tasks/get") {
      response = await taskItemRouter.get(req, res, env);  
    }
    if (pathname === "/tasks/delete") {
      response = await taskItemRouter.delete(req, res, env);  
    }
    if (pathname === "/tasks/update") {
      response = await taskItemRouter.update(req, res, env);  
    }
    if (pathname === "/tasks/search") {
      response = await taskItemRouter.search(req, res, env);  
    }

    //projectRouter
    if (pathname === "/project/create") {
      response = await projectRouter.create(req, res, env);  
    }
    if (pathname === "/project/get_list") {
      response = await projectRouter.get_list(req, res, env);  
    }
    if (pathname === "/project/get") {
      response = await projectRouter.get(req, res, env);  
    }    
    if (pathname === "/project/delete") {
      response = await projectRouter.delete(req, res, env);  
    }   
    if (pathname === "/project/update") {
      response = await projectRouter.update(req, res, env);  
    }   
    if (pathname === "/project/search") {
      response = await projectRouter.search(req, res, env);  
    }
    //@ts-ignore
    return response;
  },
}
export default Router;
